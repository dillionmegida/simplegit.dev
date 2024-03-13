import * as React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

const Wrapper = styled.div`
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
