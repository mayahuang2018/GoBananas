import React from "react";
import "./Savedidiom.css"
import DeleteBtn from "../DeleteBtn/index";


function SavedIdiomCard(props) {
    return (
        <div className="SavedIdiom">

                <div className="front">
                    Idiom
                </div>
                <div className="back">
                    Explanation
                    <br></br>
                    <DeleteBtn />
                </div>
        </div>
    );
}

export default SavedIdiomCard;

