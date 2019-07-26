import React from "react";

function NavBar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand  float-right" href="/IdiomSearchPage">GoBananas</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        {/* <button onClick = {foo}>执行操作 Perform Action</ button> */}
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="/Carousel">My idioms</a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
   */}
    </ul>
   
  </div>
</nav>
    </div>
  );
}


export default NavBar; 