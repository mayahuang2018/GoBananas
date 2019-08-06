import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
import SearchInput from "../components/Searchinput";
import SearchResult from "../components/Searchresult";
// import API from "../utils/idiomsAPI"
import axios from "axios"
import { Redirect } from "react-router-dom";



class IdiomSearchPage extends Component {

  state = {
    searchIdiom: '',
    searchResults: [],
    loggedIn: true
  }

  setSearchIdiom = (search) =>{
    //更新状态 update search idiom

    console.log(`Looking for ${search}`);
    this.getIdiomsResults(search)
      .then(result => {
        console.log(result);
         //Get the idiom data from api base on searched Idiom..
        this.setState({searchIdiom: search, searchResults: result});
      })
      .catch(err => console.log(err));
   
  }

  getIdiomsResults = (searchIdiom) => {

    return new Promise(function (resolve, reject) {

    // let results = [];
    // const url = "./idiom.json"
    const url ="/api/idioms"
    axios.get(url).then(response => {
    
      console.log("new")
        //get idiom
        const result = response.data
        console.log(result)

        const filterIdioms = result.filter(s => s.idiom === searchIdiom);

        console.log(filterIdioms);

        const idioms = filterIdioms.map(idioms=>{
            return{idiom:idioms.idiom, meaning:idioms.meaning}
        })
        console.log(idioms)
        resolve(idioms);

    })
    .catch(error => {
        reject(error);

    })

    });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to ={ {pathname: this.state.redirectTo} }  />
    }
    return (
      <div className="IdiomSearchPage"> 
        <NavBar />
        <BananaLogo />
        <SearchInput setSearchIdiom={this.setSearchIdiom}/>
        <SearchResult searchResults={this.state.searchResults}/>
        <Footer />
      </div>
    );
  }
}

export default IdiomSearchPage;