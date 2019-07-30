import React from "react";
import SavedIdiomCard from "../Savedidiom/index"
import Carousel from "../Carousel/index";
import "./Userinfo.css"

function UserInfoSection(props) {
    return (
        <div className="UserInfoSection">
      
            <div className="card userCard text-warning .bg-transparent mb-3">  
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />   
                <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> 
            </div>
            <div className="container">
            <SavedIdiomCard />
            {/* <Carousel /> */}
            </div>
            
      </div>

    );
}

export default UserInfoSection; 