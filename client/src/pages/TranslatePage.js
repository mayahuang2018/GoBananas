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

componentDidMount() { //when the page loads... do this
  API.getLanguagesAll(this.state.language, this.state.languageCode) //get language&codes from db
  .then(res => { //then console log that we have the languages, and set the languages to a variable, use the variable to set the state property
    console.log("got langauges from api");
    const buttonLanguages = res.data;
    this.setState({ buttonLanguages });
  })
};

handleClick = (event, id) => { //when I click the button, I want to do these things
  event.preventDefault();
  console.log("clicked"); //let me know it is clicked
  let pickedLanguage = this.state.buttonLanguages.find(i => i.id === id) //let me know which language I picked
  console.log(this.state.buttonLanguages);
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
        {this.state.buttonLanguages.map(languageChoices => (
        <LanguageButton
          id={languageChoices.id}  
          key={languageChoices.id}
          value={this.state.languageCode}
          onClick={this.handleClick}
        />
        ))}
        <TranslatedDescription
          value={this.state.translatedIdiom} />
        <Footer />
        
      </div>
    );
  }
};

export default TranslatePage;