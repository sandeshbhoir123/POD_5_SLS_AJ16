import React from "react";
import "./Welcome.css";
import logo from "./Slogo.png";
import {Link} from "react-router-dom"


const welcome = () => {
  
return (
<div>
    
        
        <title>TSD Home</title>
        <header>
          <div id="header-container">
            <div className="col-3">
              <img className="logo" src={logo} height={60} width={100} />
            </div>
            
            {/* Divided the navbar into 3 columns.
				One is icon,second is for class menu,third is for login and suggestion buttons */}
            <div className="col-2">
              {/* THIS IS FOR LOGIN BUTTON */}
              <Link to="/LoginPage" class="loginBTN">Login</Link>
              {/* THIS IS FOR SUGGESTION BUTTON ,BUT NAMED IT AS SEARCH*/}
              <Link to="/Suggestion" class="SearchBTN">Suggestions</Link>
              </div>
            {/*Header-Container Ends Here*/}
          </div></header>
        <div className="main-container">
          <div id="top-section-main">
            <div id="top-section-content">
              <h1>SCHOOL LISTING SYSTEM</h1>
              <p>Get the latest school updates here!!</p>
              
              <br />
              <br />
              {/* Buttons for School listing and searching options */}
              <div className="main-form">
                <div id="buttons">
                  
                    <Link to="SignUp"  className="btn1">Lookup a School you are interested in
                  </Link>
                  <Link to="#">
                    <button className="btn2">Search for Schools that we have for you<span /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
        </div>
        {/*End main-container*/}
        
      </div>
);
};
export default welcome;
