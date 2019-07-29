import React from "react";
import "./Searchinput.css"


function SearchInput(props) {
    return (
            <div className="SearchInput">
                <div id={props.id}>
                <div className="input-group mb-3">
       
                        <input type="search results=5 name=s" className="form-control" placeholder="Enter an idiom here..." aria-label="Recipient's username" aria-describedby="button-addon2">
                        </input> 
                        <div className="input-group-append">
                         <button className="btn bg-warning text-dark" type="button">Go!
                        </button>
                         </div>
                          
                    </div>
                </div>
            </div>
    
                );
            }
            
    export default SearchInput; 
