

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
// import TranslatePage from "./pages/TranslatePage.js"
// import IdiomSearchPage from "./pages/IdiomSearchPage.js";
import SignupPage from "./pages/SignupPage.js"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BananaLogo from "./components/BananaLogo";
import "./App.css";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <BananaLogo/>
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/Carousel" component={Carousel} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;