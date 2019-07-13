import React from "react";
import "./idiom.css";

function Idiom(props) {
    return (
        <div className="container">
            <div className="idiomCard">
                <div id={props.id}></div>
            </div>
        </div>
    )
}

export default Idiom; 