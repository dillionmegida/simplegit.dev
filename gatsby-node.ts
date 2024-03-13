const path = require(`path`)
const { LINKS } = require("./src/constants")
const { createFilePath } = require(`gatsby-source-filesystem`)

const errorExplainedPageTemplate = path.resolve(
  "./src/templates/error-explained-page/index.tsx"
)

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    const filepathRegex = /^\/([\d\.]+)-([\w-]+)/

    const [, , mainPath] = value.match(filepathRegex)

    const relativePath = LINKS.errors[mainPath]


    createNodeField({
      name: `slug`,
      node,
      value: relativePath,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allErrors: allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            date
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your query`,
      result.errors
    )
    return
  }

  const errors = result.data.allErrors.nodes

  if (errors.length > 0) {
    errors.forEach((error, index) => {
      const previousErrorId = index === 0 ? null : errors[index - 1].id
      const nextErrorId =
        index === errors.length - 1 ? null : errors[index + 1].id

      createPage({
        path: error.fields.slug,
        component: `${errorExplainedPageTemplate}?__contentFilePath=${error.internal.contentFilePath}`,
        context: {
          id: error.id,
          previousErrorId,
          nextErrorId,
        },
      })
    })
  }
}
