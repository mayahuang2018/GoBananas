import React, { Component } from "react";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import API from "../utils/languagesAPI";
// import LanguageButton from "../components/LanguageButton/Language.js"
// import Idiom from "../components/Idiom";
import LanguageButton from "../components/LanguageButton"
import TranslatedDescription from "../components/TranslatedDescription";
import BananaLogo from "../components/BananaLogo";
import OriginalIdiom from "../components/OriginalIdiom";

class TranslatePage extends Component {
  state = {
    languages: [],
    languageCode: '',
    originalIdiom: '',
    translatedIdiom: '',
  };
   loadLanguages = () =>{
     API.getlanguages()
     .then(res=>
      this.setState({languages: res.data, languageCode: "", language: ""}))
   }

  handleClick = (event, value) => {
    event.preventDefault();
    console.log("This button was clicked.");
    console.log({languages: this.state.languages, languageCode: this.state.languageCode})
    this.setState({languageCode: value});
    console.log(this.setState({languageCode: value}))
  };

  render() {
    return (
      <div className="TranslatePage">
        <NavBar />
        <BananaLogo />
        <OriginalIdiom />
        <LanguageButton
          value={this.state.languageCode}
          onClick={this.handleClick}
        />
        <TranslatedDescription
          value={this.state.translatedIdiom} />
        <Footer />
      </div>
    );
  }
};

export default TranslatePage;