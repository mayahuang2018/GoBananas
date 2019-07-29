import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
import SearchInput from "../components/Searchinput";
import SearchResult from "../components/Searchresult";



class IdiomSearchPage extends Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) =>{
    //更新状态 update search idiom
    this.setState({searchName});
  }

  render() {
    return (
      <div className="IdiomSearchPage"> 
        <NavBar />
        <BananaLogo />
        <SearchInput setSearchName={this.setSearchName}/>
        <SearchResult searchName={this.state.searchName}/>
        <Footer />
      </div>
    );
  }
}

export default IdiomSearchPage;
