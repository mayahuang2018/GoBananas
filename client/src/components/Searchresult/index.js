<<<<<<< HEAD
 import React, {Component} from "react";
 import propTypes from "prop-types"
 import "./Searchresult.css"
 import LanguageButton from"../LanguageButton"
 import LikeButton from "../LikeButton"
 import TranslatedDescription from "../TranslatedDescription"
 
 export default class SearchResult extends Component{
 
     static propTypes ={
         searchIdiom: propTypes.string.isRequired
     }
 
     state = {
         initView:true,
         loading:false,
         idioms:null,
         errorMasg:null
     }

     //call back when the component receive a new idiom
     componentWillReceiveProps (newProps){
         //debugger;
         console.log(newProps);
 
=======

import React, { Component } from "react";
import propTypes from "prop-types"
import "./Searchresult.css"
// import LanguageButton from "../LanguageButton"
import LikeButton from "../LikeButton"
//  import TranslatedDescription from "../TranslatedDescription"
import API from "../../utils/languagesAPI";
const request = require('request');
const uuidv4 = require('uuid/v4');
const subscriptionKey = "aa4b796d586a40bc9e33ba503ea1d3c4";
if (!subscriptionKey) {
    throw new Error('Environment variable for your subscription key is not set.')
};

export default class SearchResult extends Component {

    static propTypes = {
        searchIdiom: propTypes.string.isRequired
    };

    state = {
        initView: true,
        loading: false,
        idioms: null,
        errorMasg: null,
        buttonLanguagesArray: [],
        languageCode: "",
    };

    //call back when the component receive a new idiom
    componentWillReceiveProps(newProps) {
        //debugger;
        console.log(newProps);

>>>>>>> 05ed957e50f6e081d43011ecb3d32a59eb06b5ad
        //set loading...
        this.setState({
            initView: false,
            loading: false,
            idioms: newProps.searchResults,
        })
<<<<<<< HEAD
 
     };
 
 render(){
     const{initView,loading,idioms,errorMasg} = this.state
     const {searchIdiom} = this.props
 
     if (initView){
         return <h3>Enter an idiom and look for the explanation...{searchIdiom}</h3>
     }else if (loading){
         return <h3>loading...</h3>
     }else if(errorMasg){
         return <h3>{errorMasg}</h3>
     }else{
         return (           
             <div className="SearchResult">
                 {
                     idioms.map((idioms,index) => (
                     <div className="card rearchCard col-6" key={index}>
                     <div className="card-body" data-id={idioms._id}>
                       <h5 className="card-title">{idioms.idiom} </h5>
                       <p className="card-text">{idioms.meaning}</p>
                       <LanguageButton />
                       <button href="#" className="btn bg-warning text-dark">Go Translate !</button>
                       <LikeButton />
                       <TranslatedDescription />
                     </div>
                   </div> 
                   ) )
                     }            
          </div>
     
                 );
         }
     };
 }       
  
=======

    };

    componentDidMount() {
        API.getLanguagesAll()
            .then(res => {
                const buttonLanguagesArray = res.data;
                this.setState({ buttonLanguagesArray });
                console.log(buttonLanguagesArray);
            })
            .catch(err => { console.log("error:", err) })
    };


    handleChange = (event)  => {
        console.log(this.state.idioms);
        console.log(event.target.value);
        this.translateText(event.target.value, this.state.idioms[0].meaning) 

        // this.setState({
        //     languageCode: event.target.value,
        // });
      //need to pass the selected idiom to be translated
    };

    translateText = (l, i) => {    // need to pass the selected idiom to be translated (i) - (l) = the chosen language
        let options = {
            method: 'POST',
            baseUrl: 'https://api.cognitive.microsofttranslator.com/',
            url: 'translate',
            qs: {
                'api-version': '3.0',
                'to': [l]
            },
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            body: [{
                'text': i
            }],
            json: true,
        };
        request(options, function (err, res, body) {
            console.log(JSON.stringify(body, null, 4));
        });
    };

    render() {
        const { initView, loading, idioms, errorMasg, buttonLanguagesArray } = this.state
        const { searchIdiom } = this.props

        let buttonLanguagesArrayList = buttonLanguagesArray.length >= 0
            && buttonLanguagesArray.map((item, i) => {
                return (
                    <option key={i} value={item.languageCode}>{item.language}</option>
                )
            }, this);

        if (initView) {
            return <h3>Enter an idiom and look for the explanation...{searchIdiom}</h3>
        } else if (loading) {
            return <h3>loading...</h3>
        } else if (errorMasg) {
            return <h3>{errorMasg}</h3>
        } else {
            return (
                <div className="SearchResult">
                    {
                        idioms.map((idioms, index) => (
                            <div className="card rearchCard col-6" key={index}>
                                <div className="card-body">
                                    <h5 className="card-title">{idioms.idiom} </h5>
                                    <p className="card-text">{idioms.meaning}</p>
                                    <br></br>
                                    <div>
                                        <select onChange={this.handleChange}>
                                            {buttonLanguagesArrayList}
                                        </select>
                                    </div>
                                    <br></br>
                                    <h5 className="card-title">Placeholder - translation </h5>
                                    <p className="card-text">Placeholder - translation</p>
                                    <LikeButton />
                                </div>
                            </div>
                        ))
                    }
                </div>
            );
        }
    };
}
>>>>>>> 05ed957e50f6e081d43011ecb3d32a59eb06b5ad
