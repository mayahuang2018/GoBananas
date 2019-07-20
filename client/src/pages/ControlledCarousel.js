import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ControlledCarousel from "../components/ControlledCarousel";

class CardSave extends Component {
  render() {
  return (
    <div>
            <NavBar />
            <ControlledCarousel />
            <Footer />
   </div>
  );
}
}

export default CardSave;
