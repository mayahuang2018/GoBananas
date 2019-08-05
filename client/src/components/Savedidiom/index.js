import React from "react";
import "./Savedidiom.css"
import { Input, FormBtn } from "../Loginform/index";


function SavedIdiomCard(props) {
    return (
        <div className="SavedIdiom">

                <div className="front">
                    Idiom
                </div>
                <div className="back">
                    Explanation
                    <br></br>
                    <FormBtn >
                    <i className="fas fa-trash-alt"></i>
                    </ FormBtn>
                </div>
        </div>
    );
}

export default SavedIdiomCard;

