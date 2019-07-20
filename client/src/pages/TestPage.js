import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class TestPage extends Component{
    render(){
      return (
      <div>
        <NavBar/>
        <h1>test</h1>
        <Footer/>
      </div>
      )
    }
  };

export default TestPage;
