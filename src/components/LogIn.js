import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <label htmlFor="userName"><b>Username</b></label>
            <input 
              name="Uname"
              placeholder="Enter Username" 
              type="text" name="userName" 
              onChange={this.handleChange} 
              value={this.state.user.userName} 
            />

            <label htmlFor="password"><b>Password</b></label>
            <input 
            placeholder="Enter Password" 
            type="password" 
            name="password" 
            className="inputForm"
            />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"/>Remember me
          </label>
          </div>
          </form>
      </div>
    )
  }
}

export default LogIn


{/* <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName"> Enter Username</label><br/>
            <input 
              className="inputForm"
              placeholder="username" 
              type="text" name="userName" 
              onChange={this.handleChange} 
              value={this.state.user.userName} 
            />
          </div>
          <div>
            <label htmlFor="password">Enter Password</label><br/>
            <input 
            placeholder="password" 
            type="password" 
            name="password" 
            className="inputForm"
            /> <br/>
            <small className="passwordHelp">
              We'll never share your password with anyone else.
            </small>
          </div>
          <button className="login-button">Log In</button><br/><br/>
          <Link className="linktohome"to="/">Back to Home</Link>
        </form>
      </div> */}