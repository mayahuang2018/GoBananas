import React, {Component} from "react";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
// import LanguageButton from "../components/LanguageButton/Language.js"
// import Idiom from "../components/Idiom";
import TranslatedDescription from "../components/TranslatedDescription";

class TranslatePage extends Component{
  render(){
    return (
    <div>
      <NavBar/> 
      <TranslatedDescription/> Hilary
      <Footer/>
    </div>
    )
  }
};

export default TranslatePage;