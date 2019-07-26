import React, { Component } from "react";
import API from "../utils/usersAPI";
import { Input, FormBtn } from "../components/Loginform/index";
import Footer from "../components/Footer";
import { Redirect } from "react-router-dom";
import BananaLogo from "../components/BananaLogo";
// import axios from "axios";
// import SignupForm from "../components/SignupForm"
// import "./SignupPage.css";


class SignupPage extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
        redirectTo: null,
    };  

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
    };
 
    handleSubmit = event => {
        event.preventDefault();
        console.log('username: ')
        console.log(this.state.username);
        if (this.state.username) {
            API.saveUser({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(response => {
                    console.log(response, "response");
                    if (response) {
                        console.log('successful signup');
                        this.setState({ //redirect to login page
                            // loggedin: true,
                            redirectTo: '/LoginPage'
                        })
                    } 
                }).catch(error => console.log('signup error: ', error))
        }
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        // can change this to look however it needs to look
        return (
            <div className="SignupForm">  
                <BananaLogo/>
            <form>
            <p class="form-text text-muted">First Step: Create Your Account!</p>
                    <Input
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                        placeholder="username (required)"
                    />
                    <Input
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        name="first_name"
                        placeholder="first_name (required)"
                    />
                    <Input
                        value={this.state.last_name}
                        onChange={this.handleChange}
                        name="last_name"
                        placeholder="last_name (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        placeholder="password (required)"
                    />
                    <Input
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        name="email"
                        placeholder="email (required)"
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    
                    <FormBtn
                        // disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleSubmit}
                    >
                        Submit
                        </FormBtn>
            
                </form>
                <Footer></Footer>
                
            </div>
        )
    }
}
}

export default SignupPage
