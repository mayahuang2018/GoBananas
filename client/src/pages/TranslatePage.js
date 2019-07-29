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
  buttonLanguages: [], //language to populate the buttons
  clicked: false, //if state clicked = true then will do axios to MS translate with this language
  // languageCodePicked: this.state.languageCodePicked, //which language code to use to send to MS translate
}

componentDidMount() {
  API.getLanguagesAll(this.state.language, this.state.languageCode)
  .then(res => {
    console.log("got langauges from api");
    const buttonLanguages = res.data;
    this.setState({ buttonLanguages });
  })
};

handleClick = (event, id) => {
  event.preventDefault();
  console.log("clicked");
  let pickedLanguage = this.state.languages.find(i => i.id === id)

  if (pickedLanguage.clicked === true) {
    // console.log(this)

    // 1. take idiom choosen
    // 2. take the langauge code
    // 3. send to MS api for translate - axios call
    // 4. show/display the translated idiom
  }
}

// languageCodePicked = () => {
//  fetch("../utils/languagesAPI.js")
//  .then(response => response.json)
//  .then(languages => console.log(JSON.stringify(languages)))
//  .catch(err => console.log(err))
// }

    

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