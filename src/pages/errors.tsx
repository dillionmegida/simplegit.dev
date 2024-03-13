import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const Container = styled.div`
  &.container {
    padding-top: 50px;
  }

  h1 {
    color: white;
    background-color: var(--color-git-dark-2);
    font-size: clamp(2rem, 7vw, 4rem);
    padding: 0.3em;
    display: inline-block;
  }

  .articles {
    margin-top: 2em;
  }

  article {
    background-color: var(--color-git-dark-4);
    border: 1px solid var(--color-git-light);
    padding: 20px;
    margin-bottom: 2em;
    transition: border 300ms;

    &:hover {
      border: 1px solid white;
    }

    h2 {
      color: var(--color-git-light);
      font-size: clamp(1.6rem, 7vw, 2.8rem);
      text-align: left;
    }

    .excerpt {
      margin-top: 15px;
      color: var(--text-color);
      font-size: clamp(1rem, 7vw, 1.6rem);
    }
  }
`

export default function ErrorPage({ data }) {
  const errors = data.allMdx.nodes

  return (
    <Layout>
      <Container className="container">
        <h1>Git Errors Explained</h1>
        <div className="articles">
          {errors.map(error => (
            <article key={error.id}>
              <Link to={error.fields.slug}>
              <h2>{error.frontmatter.title}</h2>
              <p className="excerpt">{error.frontmatter.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          excerpt
        }
        fields {
          slug
        }
      }
    }
  }
`
