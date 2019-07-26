import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import { Input, FormBtn } from "../components/Loginform/index";
import BananaLogo from "../components/BananaLogo";
// import SearchInput from "../components/SearchInput/index";


class IdiomSearchPage extends Component {
  render() {
    return (
      <div>
        <BananaLogo />
        {/* <SearchInput /> */}
        <Footer />
      </div>
    );
  }
}

export default IdiomSearchPage;
