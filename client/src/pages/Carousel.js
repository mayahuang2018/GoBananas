import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//import Carousel from "../components/Carousel";
import UserInfoSection from "../components/Userinfo"



class CardSave extends Component {
  render() {
    return (
      <div className="CarouselPage">
        <NavBar />
        <UserInfoSection />
        {/* <Carousel />  */}
        <Footer />
      </div>
    );
  }
}

export default CardSave;
// something
