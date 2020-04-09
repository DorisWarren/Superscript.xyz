import React from "react"
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
    fetch("https://api.airtable.com/v0/appgSajKjJuIxIPnf/Table%201", {
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
          <div className="hello-body">
            <div className="description">
              <p>We built Superscript because we love typography, and using fonts made our websites and apps slow. We made it open source because we know others are facing the same challenges. If this resonates with you, please say hello!</p>
            </div>

            <div className="contact-form">
              <form style={{paddingTop:`5px`}}onSubmit={this.handleSubmit}>
                <label className="name-label">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    style={{width: `47%`, height:`30px`, paddingLeft: `10px`}}
                    autoComplete="off"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label className="email-label">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    style={{width: `48.2%`, height:`30px`, paddingLeft: `10px`}}
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </label>
                <label className="form-message">
                  <input
                    type="text"
                    name="message"
                    placeholder="Your message"
                    style={{width: `100%`, height: `50px`, paddingLeft: `10px`}}
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </label>
                <button type="submit" style={{color: `#00B7F5`, padding:`10px 0 0 0 `, fontSize:`17px`, outline:`none`}}>Send</button>
              </form>
            </div>  
        </div>
      </Layout>
    )
  }
}

