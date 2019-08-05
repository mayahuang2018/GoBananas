import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";
// import 



const Auth = {
    isLoggedIn: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };


function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          Auth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/IdiomSearchPage",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute