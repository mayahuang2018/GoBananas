import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import TranslatePage from "./pages/TranslatePage.js"
import IdiomSearchPage from "./pages/IdiomSearchPage.js";
import SignupPage from "./pages/SignupPage.js";
import StartPage from "./pages/StartPage";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path ="/IdiomSearchPage" component={IdiomSearchPage} />
          {/* <Route exact path ="/ProfilePage" component={ProfilePage} /> */}
          <Route exact path="/Carousel" component={Carousel} />
          <Route exact path="/StartPage" component={StartPage} />
          <Route exact path="/TranslatePage" component={TranslatePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;