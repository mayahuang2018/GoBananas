import React from "react";
import SavedIdiomCard from "../Savedidiom/index"
import "./Userinfo.css"

function UserInfoSection(props) {
    return (
        <div className="UserInfoSection">

            <div class="card userCard text-white bg-dark mb-3">     
                <div class="card-body">
                    <h5 class="card-title">User Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> 
                <div class="container">
            <SavedIdiomCard />
            </div>

            </div>
            
     
        </div>

    );
}

export default UserInfoSection; 