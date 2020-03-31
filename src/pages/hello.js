import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Hello extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
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
    const fields = {"fields": {"Name": this.state.name, "Email": this.state.email,"Message": this.state.message}}
    fetch("https://api.airtable.com/v0/appISrTWW4ky3WynU/Table%201", {
      method: "POST",
      headers: {"Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
                "Content-Type": "application/json"},
      body: JSON.stringify(fields)
    })

    .catch(error => alert(error))
  
    event.preventDefault()
    alert(`Thank you ${this.state.name}!`)
  }

  render() {
    return (
      <Layout>
        <SEO title="Hello" />
          <h2> Say Hello</h2>
          <div style={{  marginBottom: `3rem`, fontSize:`15px`, display:`flex`, justifyContent:`space-between` }}>
            <div style={{maxWidth: `300px`}}>
              <p>We built Superscript because we love typography, and using fonts made our websites and apps slow. We made it open source because we know others are facing the same challenges. If this resonates with you, please say hello!</p>
            </div>

            <div style={{}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    style={{border:`1px solid black`, backgroundColor:`#F7D200`}}
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="email"
                    placeholder="your@email.address"
                    style={{border:`1px solid black`, backgroundColor:`#F7D200`, placeholderColor:`#F7D200`}}
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="message"
                    placeholder="Your message"
                    style={{border:`1px solid black`, backgroundColor:`#F7D200`}}
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </label>
                <button type="submit" style={{ backgroundColor:`#F7D200`, border:`none`, color:`#00B7F5`}}>Send</button>
              </form>
            </div>  
        </div>
      </Layout>
    )
  }
}

