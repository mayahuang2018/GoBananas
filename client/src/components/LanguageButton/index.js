import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Route, withRouter } from 'react-router-dom';
import "./Language.css";
import API from "../../utils/languagesAPI"
import 'react-dropdown/style.css';
// import LanugageChoice from "./LanguageChoice"


class LanguageButton extends Component {

    state = {
        buttonLanguagesArray: [],
    }

    componentDidMount() {
        API.getLanguagesAll()
            .then(res => {
                const buttonLanguagesArray = res.data;
                this.setState({ buttonLanguagesArray })
            })
    }

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Language
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    { this.state.buttonLanguagesArray.map((buttonLanguage, index) => <div className="dropdown-item" type="button" key={index}>{ buttonLanguage.language }</div>)}
                    </div>       
                </div>
            </div>
        )
    }
}

export default LanguageButton;
