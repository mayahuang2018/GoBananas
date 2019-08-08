
import React, { Component } from "react";
import propTypes from "prop-types"
import "./Searchresult.css"
// import LanguageButton from "../LanguageButton"
import LikeButton from "../LikeButton"
//  import TranslatedDescription from "../TranslatedDescription"
import API from "../../utils/languagesAPI";
// import axios from "axios";
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
        translatedText: []
    };

    //call back when the component receive a new idiom
    componentWillReceiveProps(newProps) {
        //debugger;
        console.log(newProps);

        //set loading...
        this.setState({
            initView: false,
            loading: false,
            idioms: newProps.searchResults,
        })
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


    handleChange = (event) => {
        console.log(this.state.idioms);
        console.log(event.target.value);
        this.translateText(event.target.value, this.state.idioms[0].meaning)
    };

    translateText = (l, i) => {    // need to pass the selected idiom to be translated (i) - (l) = the chosen language
        // const thisthing = this.state.translatedText
        let translatedText = '';
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

        const setText = (text) => {
            console.log("setText function")
            this.setState({ translatedText: text })
            console.log("this works")
        };

        request(options, function (err, res, body) {
            console.log(JSON.stringify((body[0].translations[0].text), null, 4));
            console.log(res.body[0].translations[0].text);
            const renderedText = res.body[0].translations[0].text;
            console.log(renderedText);
            console.log(res);
            setText(renderedText)
        })
        // body[""0""].translations[""0""]
        // this.setState({translatedText: renderedText})


        // const url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to%5B0%5D=${l}`
        // axios.get(url, {
        //     headers: {
        //         'Ocp-Apim-Subscription-Key': subscriptionKey,
        //         'Content-type': 'application/json',
        //         'X-ClientTraceId': uuidv4().toString()
        //     },
        //     body: [{
        //         'text': i
        //     }]
        // })
        //     .then(res => {
        //         console.log(res);
        //         const renderedText = res.body[0].translations[0].text;
        //         this.setState({ translatedText: renderedText })
        //     })
        // "af"
        // .then(res => {
        //    this.setState({thisthing: res.body[0].translations[0].text})})

    };

    render() {
        const { initView, loading, idioms, errorMasg, buttonLanguagesArray, translatedText } = this.state
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
                <div className="row d-flex">
                    <div className="col-lg-12">
                        <div className="SearchResult ml5">
                            {
                                idioms.map((idioms, index) => (
                                    <div className="card rearchCard col-6" key={index}>
                                        <div className="card-body">
                                            <h5 className="card-title">{idioms.idiom} </h5>
                                            <p className="card-text">{idioms.meaning}</p>
                                            <br></br>
                                            <div>
                                                <select onChange={this.handleChange}>
                                                    {/* <option value="es"> Spanish </option> */}
                                                    {buttonLanguagesArrayList}
                                                </select>
                                            </div>
                                            <br></br>
                                            <h5 className="card-title">{translatedText} </h5>
                                            {/* <p className="card-text">Placeholder - translation</p> */}
                                            <LikeButton />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }
    };
}