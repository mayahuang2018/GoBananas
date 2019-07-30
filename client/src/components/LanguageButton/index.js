import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Route, withRouter } from 'react-router-dom';
import "./Language.css";
import API from "../../utils/languagesAPI"
import 'react-dropdown/style.css';
// import LanugageChoice from "./LanguageChoice"


function LanguageButton(props) {

    const buttonLanguagesArray = [];

    const buttonLanguages = () => {
    API.getLanguagesAll()
    .then(res => buttonLanguagesArray.push(res))
    console.log(buttonLanguages)
    }
    console.log(buttonLanguagesArray)

    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Language
                     </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {buttonLanguagesArray.map((buttonLanguage, index) => <div className="dropdown-item" type="button" key={index}> {buttonLanguage} </div>)}
                </div>
            </div>
        </div>
    )
}


// class LanguageButton extends Component {

//     state = {
//         buttonLanguagesArray: [],
//     }

//     componentDidMount() {
//         API.getLanguagesAll()
//             .then(res => {
//                 const buttonLanguagesArray = res.data;
//                 this.setState({ buttonLanguagesArray })
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="dropdown">
//                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         Language
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                     { this.state.buttonLanguagesArray.map((buttonLanguage, index) => <div className="dropdown-item" type="button" key={index}> { this.state.buttonLanguage} </div>)}
//                     </div>       
//                 </div>
//             </div>
//         )
//     }
// }

export default LanguageButton;
