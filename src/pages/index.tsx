import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import LessonsSection from "../components/lessons-section"
import ReactConcepts from "../components/react-concepts"

const IndexPage = () => (
  <Layout>
    <Landing />
    {/* <LessonsSection />
    <ReactConcepts /> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
