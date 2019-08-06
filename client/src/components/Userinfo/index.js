import React, { Component } from "react";
//import DeleteBtn from "../DeleteBtn/index";
import SavedIdiomCard from "../Savedidiom/index"
import axios from "axios";
import "./Userinfo.css"

class UserInfoSection extends Component {

    // set the state
    state = {
        Users: []
    };

    // make axios call to get user info
    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        axios.get("/api/findUsers")//这儿的API应该用哪个？还是换个新的？
            .then(res => this.setState({ Users: res.data }))
            .catch(err => console.log(err));

    };


    // pass in the user info where needed

    render() {
        return (     
            <div className="UserInfoSection" >

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

      {/* {this.state.Users.map((Users,Users_id)=> (
                <a href={"/User/" + Users._id}>

                <div key={Users_id} className="card userCard text-warning .bg-transparent mb-3">
                    <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />
                    <div className="card-body">
                        <h5 className="card-title">User{Users.username}</h5>
                        <p className="card-text">email{Users.email}</p>
                    </div>
                </div>
                <div className="container">

                  {Users.idioms.map((idioms,idioms_index)=>( 
                   <div className="SavedIdiom" key={idioms_index}> 
                        <div className="front" >
                        {idioms.idiom} 
                        </div>
                        <div className="back">
                         {idioms.meaning}
                          <br></br>
                          <DeleteBtn />
                        </div>
                   </div>
                  ))}
               
        
                </div>
 </a>
))}  */}

 </div>

        );
    }
}

export default UserInfoSection; 