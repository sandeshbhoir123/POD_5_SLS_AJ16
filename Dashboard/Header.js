import React from "react";
//import "./SuggestionList.css";
import logo from "./dd1.png";
const Header = () => {
return (
    <div>
   
    {/* up navigation bar */}
    <header>
      <h1 style={{fontSize: 'xx-large'}}>Admin's Dashboard</h1>
      <nav>
        <ul className="nav__links">
          <li><a href="">Home</a></li>
         
          <li><a href="">About</a></li>
        </ul>
      </nav>
      <a href=""><button>Logout</button></a>
    </header>
    <div className="admin-wrapper">
      {/*--left side bar*/}
      <div className="left-sidebar">
      </div>
      {/*--admin content*/}
      <div className="admin-content">
      </div>
    </div>
    {/* Side navigation */}
    <div className="sidenav">
      <div>
        <img src={logo} id="icon" alt="User Icon" />
      </div>
      <div className="admin-bio">
        <h2>Welcome Admin</h2>
      </div>
      <a href=""><button>Add Schools</button></a>
      <a href=""><button>Suggestions</button></a>
    </div>
  </div>
          
);
};
export default Header;