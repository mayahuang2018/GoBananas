import React from "react";
import SavedIdiomCard from "../Savedidiom/index"
import Carousel from "../Carousel/index";
import "./Userinfo.css"

function UserInfoSection(props) {
    return (
        <div className="UserInfoSection">
      
            <div class="card userCard text-warning .bg-transparent mb-3">  
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />   
                <div class="card-body">
                    <h5 class="card-title">User Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> 
            </div>
            <div class="container">
            <SavedIdiomCard />
            {/* <Carousel /> */}
            </div>
            
      </div>

    );
}

export default UserInfoSection; 