// import React, { Component } from "react";
// // import logo from "./logo.svg";
// import "./App.css";
// import Idiom from "./components/Idiom/Idiom";
// import Footer from "./components/Footer/Footer";
// import LanguageButton from "./components/LanguageButton/Language";

// class App extends Component {

//   componentDidMount(){
//     //call function to load the languages from the langugage API
//   }
//   render() {
//     return (
//       <div>
//       <div className="App">
//         <div className="App-header">
//           <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84539/preview.svg" className="App-logo" alt="logo" />
//           <h2>GoBananas</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Idiom></Idiom>
//         <LanguageButton></LanguageButton>
//         <Footer></Footer>

//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import LoginPage from "./pages/LoginPage.js";
// import IdiomSearchPage from "./pages/IdiomSearch.js";
// import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <LoginPage />
      {/* <IdiomSearchPage /> */}
    </div>
  );
}

export default App;