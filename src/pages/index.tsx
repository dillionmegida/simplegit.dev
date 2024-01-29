import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import LessonsSection from "../components/lessons-section"

const IndexPage = () => (
  <Layout>
    <Landing />
  </Layout>
)
export const Head = () => <Seo />

export default IndexPage
