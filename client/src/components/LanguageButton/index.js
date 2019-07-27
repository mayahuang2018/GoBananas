import React from "react";
import ReactDOM from "react-dom";
import { Route, withRouter } from 'react-router-dom';
import "./Language.css";
import langList from "./languages.js";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// const defaultOption = langList[0];


function LanguageButton(props) {
    return (
        <div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Language
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button" {...props}>English</button>
                    <button class="dropdown-item" type="button">Spanish</button>
                    <button class="dropdown-item" type="button">Chinese</button>
                </div>
            </div>

        </div >
    );
};

export default LanguageButton;