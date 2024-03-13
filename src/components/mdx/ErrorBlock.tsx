import React from "react"
import styled from "styled-components"

const Block = styled.div`
  background-color: #ecec2a;
  color: var(--color-git-dark-4);
  padding: 20px;
  position: relative;

  & > * {
    margin: 0;
  }

  .reason {
    position: absolute;
    top: -0.6em;
    background-color: var(--color-git-dark-4);
    padding: 0.1em 0.3em;
    color: var(--text-color);
    font-size: 0.8em;
  }

  .content {
    font-weight: bold;
  }
`

export default function ErrorBlock({ children }) {
  return (
    <Block>
      <span className="reason">Reason:</span>
      <div className="content">{children}</div>
    </Block>
  )
}
