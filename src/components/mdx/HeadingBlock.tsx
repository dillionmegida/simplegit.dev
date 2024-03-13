import React from "react"
import styled from "styled-components"

const Block = styled.div`
  margin: 1.5em 0 0.3em;
  
  h2 {
    font-size: clamp(1.6rem, 7vw, 2.7rem);
  }
  
  .solution,
  .regular {
    padding: 10px;

  }

  .solution {
    background-color: #acf73b;
    color: var(--color-git-dark-4);
  }

  .regular {
    background-color: var(--color-git-dark-3);
  }
`

export default function HeadingBlock({ children, type = "regular" }) {
  return (
    <Block>
      <div className={type}>
        <h2>{children}</h2>
      </div>
    </Block>
  )
}
