import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-bottom: 100px;
  background-image: radial-gradient(
    var(--color-git-dark-3) 1px,
    var(--color-git-dark-4) 1px
  );
  background-size: 10px 10px;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
