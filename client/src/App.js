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

// const ProtectedRoute 
//   = ({ isAllowed, ...props }) => 
//      isAllowed 
//      ? <Route {...props}/> 
//      : <Redirect to="/authentificate"/>;

// const _App = ({ lastTab, isTokenVerified })=> 
//     <Switch>
//       <Route exact path="/authentificate" component={Login}/>
//       <ProtectedRoute 
//          isAllowed={isTokenVerified} 
//          exact 
//          path="/secrets" 
//          component={Secrets}/>
//       <ProtectedRoute 
//          isAllowed={isTokenVerified} 
//          exact 
//          path="/polices" 
//          component={Polices}/>
//       <ProtectedRoute 
//          isAllowed={isTokenVerified} 
//          exact 
//          path="/grants" component={Grants}/>
//       <Redirect from="/" to={lastTab}/>
//     </Switch>



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
          <Route exact path="/" component={StartPage} />
          <Route exact path="/TranslatePage" component={TranslatePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


// function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Route path="/public" component={Public} />
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" component={Protected} />
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function Public() {
//   return <h3>Public</h3>;
// }

// function Protected() {
//   return <h3>Protected</h3>;
// }

// class Login extends Component {
//   state = { redirectToReferrer: false };

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });
//   };

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;

//     if (redirectToReferrer) return <Redirect to={from} />;

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }


export default App;