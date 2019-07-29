import React from "react";
// import ReactDOM from "react-dom";
// import { Route, withRouter } from 'react-router-dom';
import "./Language.css";
// import language from "./languages.js";

// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// const defaultOption = langList[0];


function LanguageButton(props) {
    return (
        <div>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Language
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button" {...props} value="en">English</button>
                    <button className="dropdown-item" type="button" {...props} value="es">Spanish</button>
                    <button className="dropdown-item" type="button" {...props} value="zh-Hans">Chinese</button>
                </div>
            </div>

        </div >
    );
};

export default LanguageButton;

