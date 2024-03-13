import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { LINKS } from "../constants"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--text-color);
  border: 2px solid var(--color-git-dark-3);
  font-size: clamp(1rem, 7vw, 1.2rem);

  &.container {
    margin-top: 20px;
    padding: 0 20px;
  }

  a {
    display: block;
    color: var(--color-git-dark-2);
    height: 100%;
    padding: 15px 30px;
    transition: background-color 300ms, color 300ms;

    &.active,
    &:hover {
      background-color: var(--color-git-dark-3);
      color: white;
    }
  }
`

export default function Navbar() {
  return (
    <Nav className="container">
      <Link activeClassName="active" to="/">
        Course
      </Link>
      <Link activeClassName="active" to={LINKS.errors.default}>Errors Explained</Link>
    </Nav>
  )
}
