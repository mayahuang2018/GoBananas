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
import languages from "../../../server/scripts/languages.json"

class TranslatePage extends Component {

  renderDropDown = () => {
    let lanugages = {
      array: []
    };

    for (var i=0)
  }

  //  loadLanguages = () =>{
  //   console.log(this.state); 
  //   API.getlanguages()
  //    .then(res=>
  //     this.setState({languages: res.data, languageCode: "", language: ""})
      
  //     ).catch(err => console.log(err));
   
  //   }




  handleClick = (event) => {
    event.preventDefault();
    console.log("This button was clicked.");
    console.log({languages: this.state.languages, languageCode: this.state.languageCode})
    // rest of my function
    // Click button =
    // 1. take idion choose
    // 2. tkae the langauge code
    // 3. send to MS api for translate - axios call
    // 4. show/display the translated idiom
// 
    
    
    // this.setState({languageCode: value});
    // console.log(this.setState({languageCode: value}))
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