import React, { Component } from "react";
import BananaLogo from "../components/BananaLogo";

class StartPage extends Component {
  render() {
  return (
    <div className ="StartPage">
        <BananaLogo/>
        <div className="card text-center">
       <div >
       <h5 className="text-secondary">Welcome to GoBananas...</h5>
       <p className="text-secondary">Search for English idioms and save your favourite ones.</p>
       <a href="/SignupPage" className="btn text-white bg-warning">Create your account !</a>
       <p></p>
        </div>
       <hr></hr>
       <p className="text-secondary">Already have an account? <a href="/LoginPage" className="text-dark">Login here</a>  </p>   
        </div>
   </div>
  );
}
}

export default StartPage;
