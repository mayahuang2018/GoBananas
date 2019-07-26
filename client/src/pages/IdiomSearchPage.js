import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Input, FormBtn } from "../components/Loginform/index";

class IdiomSearchPage extends Component {
  render() {
  return (
    <div>
            <NavBar />        
            <BananaLogo/>
          <form>
          <p class="form-text text-muted"></p>
            <Input
              placeholder="Go Bananas!"
            />
            <FormBtn
            >
              Search!
              </FormBtn>
              
          </form>
        
            <Footer />
   </div>
  );
}
}

export default IdiomSearchPage;
