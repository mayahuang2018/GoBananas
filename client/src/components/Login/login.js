import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
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
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            // can change this to look however it needs to look
            return (
                <div>
                    <form>
                        <div>
                            <div className="login-form">
                                <label className="form-label" htmlFor="username">Username</label>
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="login-form">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-input"
                                    name="username"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Login

// needs a forgot username or password?
// what is