import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../../components/mdx/CodeBlock"
import ErrorBlock from "../../components/mdx/ErrorBlock"
import HeadingBlock from "../../components/mdx/HeadingBlock"
import MoreErrors from "./more-errors"

const Container = styled.div`
  color: var(--text-color);
  font-size: 1.3rem;
  font-size: clamp(1rem, 7vw, 1.4rem);
  line-height: 1.5;
  font-weight: 300;

  .article-content {
    margin-top: 40px;
  }

  h1 {
    color: white;
    padding: 0.3em;
    background-color: var(--color-git-dark-2);
    display: inline-block;
    font-size: clamp(2rem, 7vw, 4rem);
    font-weight: bold;
  }

  p {
    margin: 1em 0 0.7em;
  }

  a {
    color: var(--color-regex);
    text-decoration: none;
  }

  h2 {
    font-size: clamp(1.6rem, 7vw, 2.7rem);
    font-weight: 500;
  }

  hr {
    width: 50%;
    margin: 3em 0;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .important-block {
    margin: 30px 0;
  }

  .go-home {
    text-align: center;
    display: block;
  }

  .landing-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
  }

  .part-block {
    text-transform: uppercase;
    background-color: var(--color-regex);
    color: var(--color-regex-dark);
    padding: 5px;
    font-size: 0.8rem;
    width: max-content;
    font-family: var(--font-heading);
    display: block;
  }

  .views-block {
    font-size: 1rem;
    width: 50px;
  }

  .multiline-code {
    font-size: 0.9em;
    position: relative;
    isolation: isolate;
  }

  blockquote {
    margin: 10px 0 20px;
    font-style: italic;
    padding: 20px;
    background-color: var(--color-regex-dark-1);
    border: 1px solid var(--color-regex-dark-3);
    position: relative;
    border-radius: 5px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--color-regex-dark-3);
      border-radius: inherit;
      inset: 0;
      z-index: -1;
      transform: translate(10px, 10px);
    }
  }

  ul,
  ol {
    padding-left: 20px;
    margin-top: 0;
    list-style-position: initial;
    li {
      margin-bottom: 10px;
      padding-left: 10px;

      a {
        font-size: inherit;
      }
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
    line-height: 25px;
  }

  h1 {
    margin-top: 10px;
  }

  .youtube-iframe {
    margin-top: 20px;
    margin-bottom: 30px;
    border: 2px solid var(--color-regex-dark-3);
    width: 100%;

    iframe {
      width: 100%;
      min-height: 400px;
    }
  }
`

const components = {
  code: CodeBlock,
  ErrorBlock: ErrorBlock,
  HeadingBlock: HeadingBlock,
  h2: HeadingBlock,
}

export default function ErrorExplainedPage({ data, children }) {
  const {
    frontmatter: { title, excerpt },
  } = data.currentError

  const { prevError, nextError, allErrors } = data

  return (
    <Layout>
      <Container className="container">
        <h1>{title}</h1>
        <ErrorBlock>{excerpt}</ErrorBlock>
        <div className="article-content">
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
        <MoreErrors errors={allErrors.nodes} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!, $previousErrorId: String, $nextErrorId: String) {
    currentError: mdx(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
        date
      }
      fields {
        slug
      }
    }
    nextError: mdx(id: { eq: $nextErrorId }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    prevError: mdx(id: { eq: $previousErrorId }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    allErrors: allMdx(filter: { id: { ne: $id } }) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`
