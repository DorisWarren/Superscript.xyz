import { Link } from "gatsby"
import './header.css'
import React from "react"

const Header = () => (
  <header>
    <div className="inner-header">
      <h1 className="logo">
        <Link
          to="/"
          className="logo-link">
          superscri<span style={{color:`#00B7F5`}}>p</span>t
          <p className="xyz"style={{paddingLeft: `25.3%`, lineHeight:`1rem`}}>.<span style={{color:`#00B7F5`, marginBottom:`2rem`}}>x</span>yz</p>
        </Link>
      </h1>
      <div className="navigation">
        <Link className="nav-links" to="/">Superscript</Link>
        <Link className="nav-links" to="/about">About</Link>
        <Link className="nav-links" to="/brand">Brand</Link>
        <Link className="hello-link" to="/hello">Hello</Link>
       
      </div>
    </div>
  </header>
)



export default Header
