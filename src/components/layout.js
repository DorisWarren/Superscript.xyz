/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import logo from "../images/logo.svg"



console.log(logo)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout">
        <main style={{paddingBottom:`1rem`}}>{children}</main>
        <div className="logo-section">
          <img src={logo} alt="Logo" />
          <a className="get-it" href="https://github.com/permanencelabs/superscript-xyz">Get it</a>
        </div>
  
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
