import React, { Component } from 'react';
import "./Language.css";
import API from "../../utils/languagesAPI";
// import propTypes from 'prop-types';
const request = require('request');
const uuidv4 = require('uuid/v4');
const subscriptionKey = "aa4b796d586a40bc9e33ba503ea1d3c4";
if (!subscriptionKey) {
    throw new Error('Environment variable for your subscription key is not set.')
};

class LanguageButton extends Component {

    state = {
        buttonLanguagesArray: [],
        languageCode: "",
        idioms: null
    }

    constructor(props) {
        super(props);
        this.state = {
            buttonLanguagesArray: [],
            languageCode: "",
        };
        this.handleChange = this.handleChange.bind(this)
    }


    componentWillReceiveProps(newProps) {
        console.log(newProps);
        //set loading...
        this.setState({
            idioms: newProps.searchResults,  
        })

    }   
    
    componentDidMount() {
        API.getLanguagesAll()
            .then(res => {
                const buttonLanguagesArray = res.data;
                this.setState({ buttonLanguagesArray });
                console.log(buttonLanguagesArray);
            })
            .catch(err => { console.log("error:", err) })
    }

    handleChange = event => {
        this.setState({
            languageCode: event.target.value
        });
        console.log(event.target.value);
        this.translateText(event.target.value); //need to pass the selected idiom to be translated
    };

    translateText = (l, i) => {    // need to pass the selected idiom to be translated

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
    }

    render() {
        const { buttonLanguagesArray } = this.state;

        let buttonLanguagesArrayList = buttonLanguagesArray.length >= 0
            && buttonLanguagesArray.map((item, i) => {
                return (
                    <option key={i} value={item.languageCode}>{item.language}</option>
                )
            }, this);

        return (
            <div>
                <select onChange={this.handleChange}>
                    {buttonLanguagesArrayList}
                </select>
            </div>
        );
    }
}

export default LanguageButton;