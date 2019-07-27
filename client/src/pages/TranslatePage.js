import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
// import LanguageButton from "../components/LanguageButton/Language.js"
// import Idiom from "../components/Idiom";
import LanguageButton from "../components/LanguageButton"
import TranslatedDescription from "../components/TranslatedDescription";
import BananaLogo from "../components/BananaLogo";

 

class TranslatePage extends Component {
  state

  handleClick = event => {
    event.preventDefault();
    console.log("This button was clicked.")
  };


  render() {
    return (
      <div className="TranslatePage">
        <NavBar />
        <BananaLogo />
        <LanguageButton
          value={this.state.language}
          onClick={this.handleClick}
        />
        <TranslatedDescription />
        <Footer />
      </div>
    );
  }
};

export default TranslatePage;