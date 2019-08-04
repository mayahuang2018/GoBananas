// BOOTSTRAP file - begins the React process - 

import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
   
        <App />
    , document.getElementById("root"));
registerServiceWorker();
