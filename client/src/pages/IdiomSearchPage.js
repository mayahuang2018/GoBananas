import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
import SearchInput from "../components/Searchinput";
import SearchResult from "../components/Searchresult";



class IdiomSearchPage extends Component {

  state = {
    searchIdiom: ''
  }

  setSearchIdiom = (searchIdiom) =>{
    //更新状态 update search idiom
    this.setState({searchIdiom});
  }

  render() {
    return (
      <div className="IdiomSearchPage"> 
        <NavBar />
        <BananaLogo />
        <SearchInput setSearchIdiom={this.setSearchIdiom}/>
        <SearchResult searchIdiom={this.state.searchIdiom}/>
        <Footer />
      </div>
    );
  }
}

export default IdiomSearchPage;
