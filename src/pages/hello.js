import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {
  state = {
    name: "",
    email: "",
    note: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Thank you ${this.state.name}!`)
  }

  render() {
    return (
      <Layout>
        <SEO title="Hello" />
          <h2> Say Hello</h2>
          <div style={{  marginBottom: `3rem`, fontSize:`15px`, display:`flex`, justifyContent:`space-between` }}>
            <div>
              <p>We built Superscript because we love typography, and using fonts made our websites and apps slow. We made it open source because we know others are facing the same challenges. If this resonates with you, please say hello!</p>
            </div>

          <div style={{}}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Email Address
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <label> 
                Your Message
                <input
                  type="text"
                  name="message"
                  value={this.state.massage}
                  onChange={this.handleInputChange}
                />
              </label>
              <button type="submit">Send</button>
            </form>
          </div>  
        </div>
      </Layout>
    )
  }
}

