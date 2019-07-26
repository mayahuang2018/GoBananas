import React, { Component } from "react";
import BananaLogo from "../components/BananaLogo";

class StartPage extends Component {
  render() {
  return (
    <div className ="StartPage">
        <BananaLogo/>
        <div className="card text-center">
        <div className="card-header">
        Welcome to GoBananas...
         </div>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">It's time to search for English idioms and save your favourite ones.</p>
    <a href="#" className="btn text-white bg-warning">Create your account !</a>
  </div>
  <div className="card-footer text-muted">
  Already have an account? <a href="/" className="text-dark">Login here</a>
  </div>
</div>
   </div>
  );
}
}

export default StartPage;
