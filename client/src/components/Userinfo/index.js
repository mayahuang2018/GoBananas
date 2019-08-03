import React from "react";
import SavedIdiomCard from "../Savedidiom/index"
import "./Userinfo.css"

// make axios call to get user info
// set the state
// pass in the user info where needed

function UserInfoSection(props) {
    return (
        <div className="UserInfoSection">
      
            <div className="card userCard text-warning .bg-transparent mb-3">  
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />   
                <div className="card-body">
                    <h5 className="card-title">User</h5>
                    <p className="card-text">email</p>
                </div> 
            </div>
            <div className="container">
            <SavedIdiomCard />
            </div>
            
      </div>

    );
}

export default UserInfoSection; 