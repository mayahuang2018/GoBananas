import React, { Component } from "react";
import BananaLogo from "../components/BananaLogo";

class StartPage extends Component {
  render() {
  return (
    <div className ="StartPage">
        <BananaLogo/>
        <div className="card text-center">
       <div >
       <h5 className="card-title">Welcome to GoBananas...</h5>
       <p className="text-secondary">Search for English idioms and save your favourite ones.</p>
       <a href="#" className="btn text-white bg-warning">Create your account !</a>
       <p></p>
        </div>
       <hr></hr>
       Already have an account? <a href="/" className="text-dark">Login here</a>     
        </div>
   </div>
  );
}
}

export default StartPage;
