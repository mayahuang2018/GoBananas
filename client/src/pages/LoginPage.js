import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar.js";
import { Input, FormBtn } from "../components/LoginForm/LoginForm.js";
// import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import axios from "axios";


class LoginPage extends Component {
  
    constructor() {
      super()
      this.state = {
          username: '',
          password: '',
          loggedIn: false,
          redirectTo: null,
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  };

  handleChange = name => event => {
      this.setState({
          [name]: event.target.value
      })
      console.log(event.target.value)
  };

  handleSubmit = event => {
      event.preventDefault()
      console.log('handleSubmit')

      axios.post('user/login', {
          usernmae: this.state.username,
          password: this.state.password
      })
          .then(response => {
              console.log('login response: ')
              console.log('response')
              if (response.status === 200) {
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  this.setState({
                      redirectTo: '/'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log('error')
          })
  };

  render() {
      if (this.state.redirectTo) {
          return <Redirect to={{ pathname: this.state.redirectTo }} />
      } else {
          // can change this to look however it needs to look
          return (
              <div>
                <NavBar></NavBar>
                <form>
              <Input
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="password (required)"
              />
              <FormBtn
                // disabled={!(this.state.username && this.state.password)}
                onClick={this.handleSubmit}
              >
                Submit
              </FormBtn>
            </form>
              </div>
          )
      }
  }
}

export default LoginPage;

