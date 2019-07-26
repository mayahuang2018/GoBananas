import React from "react";
import "./SearchInput.css";

function SearchInput(props) {
    return (
        <div className="container">
            <div className="SearchInput">
                <div id={props.id}>
                    <input type="text" placeholder="Enter an idiom here..."></input>
                        </div>
                </div>
            </div>
            );
        }
        
export default SearchInput; 