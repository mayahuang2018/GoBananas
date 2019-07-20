import React from "react";
import ReactDOM from "react-dom";
import {Route, withRouter} from 'react-router-dom';
import "./Language.css";
import langList from "./languages.js";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const defaultOption = langList[0];




export function LanguageButton (props) {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    return (
        <div>
           
           <div id="react-search"></div>

            <button>
                <Dropdown onClick={handleClick} value={defaultOption} placeholder="Select an option" />
            </button>
        </div>

    );

};

export default LanguageButton;


// var Answer = React.createClass({
//     render: function () {
//         var Data = langList,
//             MakeItem = function (X) {
//                 return <option>{X}</option>;
//             };
//             console.log(Data)
//         return <select>{Data.map(MakeItem)}</select>;
//     }
// });
