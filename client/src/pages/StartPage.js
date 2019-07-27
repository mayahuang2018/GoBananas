import React, { Component } from "react";
import BananaLogo from "../components/BananaLogo";

class StartPage extends Component {
  render() {
  return (
    <div className ="StartPage">
        <BananaLogo/>
        <div className="card startCard text-center">
       <div >
       <h5 >Welcome to GoBananas...</h5>
       <p >Search for English idioms and save your favourite ones.</p>
       <a href="/SignupPage" className="btn text-dark bg-warning">Create your account !</a>
       <p></p>
        </div>
       <hr></hr>
       <p >Already have an account? <a href="/LoginPage" className="text-warning">Login here</a>  </p>   
        </div>
   </div>
  );
}
}

export default StartPage;
