import React, { Component } from 'react';
import "./Language.css";
import API from "../../utils/languagesAPI"


class LanguageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLanguagesArray: [],
        };
        console.log(this.state.value)
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
            value: event.target.value
        });
        console.log(event.target.value)
    };

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