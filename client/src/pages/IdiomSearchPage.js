import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
import SearchInput from "../components/Searchinput";
import SearchResult from "../components/Searchresult";



class IdiomSearchPage extends Component {
  render() {
    return (
      <div className="IdiomSearchPage"> 
        <NavBar />
        <BananaLogo />
        <SearchInput />
        <SearchResult />
        <Footer />
      </div>
    );
  }
}

export default IdiomSearchPage;
