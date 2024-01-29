import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-bottom: 100px;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
