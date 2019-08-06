import React from "react";

function NavBar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand  float-right" href="/IdiomSearchPage">GoBananas</a>

  <div id="navbarSupportedContent">
    <ul className="navbar-nav">

      <li className="nav-item active">
      <a className="nav-link" href="/User">My idioms</a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  );
}


export default NavBar; 