import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

class IdiomSearchPage extends Component {
  render() {
  return (
    <div>
            <NavBar />        
            <SearchInput />
            <Footer />
   </div>
  );
}
}

export default IdiomSearchPage;
