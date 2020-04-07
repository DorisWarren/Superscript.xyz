import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>About Superscript</h2>
    <div className="about">
      <p>Superscript is an open source service written in go lang. You can use it to serve fonts scoured from a variety of fonts APIs and serve custom fint files.</p>
    </div>
  </Layout>
)

export default AboutPage;
