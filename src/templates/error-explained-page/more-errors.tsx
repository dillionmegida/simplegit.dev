import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 20px 0;

  a {
    display: block;
    background-color: var(--color-git-dark-2);
    padding: 20px;
    margin-bottom: 20px;
    border: 2px solid var(--color-git-dark-2);
    transition: 300ms;

    &:hover {
      text-decoration: none;
      background-color: var(--text-color);
      color: var(--color-git-dark-2);
    }
  }
`

export default function MoreErrors({ errors }) {
  return (
    <Container>
      <hr />
      <p>Check out more errors explained</p>
      {errors.map(error => (
        <Link key={error.id} to={error.fields.slug}>
          {error.frontmatter.title}
        </Link>
      ))}
    </Container>
  )
}
