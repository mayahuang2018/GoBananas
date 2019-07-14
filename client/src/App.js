import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Idiom from "./components/Idiom/Idiom";
import Footer from "./components/Footer/Footer";

class App extends Component {
 

  componentDidMount(){
    //call function to load the languages from the langugage API
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />
          <h2>GoBananas</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Idiom></Idiom>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
