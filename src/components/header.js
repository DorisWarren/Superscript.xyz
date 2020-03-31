import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header
    style={{
      background: `#F7D200`,
      marginBottom: `1.45rem`,
      marginTop:`3rem`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize:`60px`,
            color: `black`,
            textDecoration: `none`,
          }}
        >
          superscri<span style={{color:`#00B7F5`}}>p</span>t
          <p style={{paddingLeft: `25%`}}>.<span style={{color:`#00B7F5`}}>x</span>yz</p>
        </Link>
      </h1>
      <div style={{textAlign:`right`, width: `100%`, borderBottom:`2px solid black`,borderTop:`2px solid black`, padding:`1rem`, }} >
        <Link to="/" style={{color:'black', textDecoration: `none`, marginRight: `4rem`,}}>Superscript</Link>
        <Link to="/about" style={{color:'black', textDecoration: `none`, marginRight: `4rem` }}>About</Link>
        <Link to="/hello" style={{color:'black', textDecoration: `none` }}>Hello</Link>
      </div>
    </div>
  </header>
)



export default Header
