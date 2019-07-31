import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
import SearchInput from "../components/Searchinput";
import SearchResult from "../components/Searchresult";

import axios from "axios"



class IdiomSearchPage extends Component {

  state = {
    searchIdiom: '',
    searchResults: []
  }

  setSearchIdiom = (search) =>{
    //更新状态 update search idiom
    debugger;
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

    let results = [];

    const url = "./idiom.json"//{$searchIdiom}
    //const url = '/api/idioms'
    axios.get(url).then(response => {
    //client/src/components/Searchresult/index.js
    //client/public/idiom.json
        //get idiom
        const result = response.data
        //console.log(result)
        debugger;
        //const filterIdioms = result.idioms.filter(s => s.idiom === searchIdiom);
        const filterIdioms = result.idioms;

        console.log(filterIdioms);

        const idioms = filterIdioms.map(idioms=>{
            return{idiom:idioms.idiom, meaning:idioms.meaning}
        })
        console.log(idioms)

        //results[0] = result.idioms[0];
        // set stste "idioms"
        // this.setState({
        //  initView:false,
        //  loading:false,
        //  idioms 
        // })

        resolve(idioms);

    })
    .catch(error => {
        // error message
        // this.setState({ 
        //  loading:false,
        //  errorMasg:error.message
        // })

        reject(error);

    })

    });
  }

  render() {
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
