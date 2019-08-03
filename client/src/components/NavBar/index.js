import React from "react";

function NavBar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand  float-right" href="/IdiomSearchPage">GoBananas</a>

  <div id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        {/* <button onClick = {foo}>执行操作 Perform Action</ button> */}
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="/Carousel">My idioms</a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  );
}


export default NavBar; 