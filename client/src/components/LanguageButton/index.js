import React, { Component } from 'react';
import "./Language.css";
import API from "../../utils/languagesAPI";
import propTypes from 'prop-types';
const request = require('request');
const uuidv4 = require('uuid/v4');
const subscriptionKey = "aa4b796d586a40bc9e33ba503ea1d3c4";
if (!subscriptionKey) {
    throw new Error('Environment variable for your subscription key is not set.')
};

// let options = {}
// options.qs.to = this.state.languageCode 

class LanguageButton extends Component {

    static propTypes = {
        buttonLanguagesArray: propTypes.array,
        languageCode: propTypes.string,

        
    }

    constructor(props) {
        super(props);
        this.state = {
            buttonLanguagesArray: [],
            languageCode: "",
        };
        this.handleChange = this.handleChange.bind(this)
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
        this.translateText(event.target.value, ""); //also will need to pass in the idio to be translated
    };

   translateText = (l, i) => {    
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
       
        
        request(options, function(err, res, body){
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