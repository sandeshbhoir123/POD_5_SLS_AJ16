import React from "react";
import "./Login.css";
import logo from "./admin.jpg";
const login = () => {
return (
<div>
        <meta charSet="utf-8" />
        <title>HTML CSS Register Form</title>
        <link rel="stylesheet" href="style1.css" />
        <form className="signup-form" id="login-form">
          {/* form header */}
          <div className="form-header">
            <h1>Admin Login</h1>
          </div>
          {/* form body */}
          <div className="form-body">
            {/* Firstname and Lastname */}
            <div className="horizontal-group">
               
              <div className="img"><img src={logo} alt="image" /></div>
              <div className="form-group">
                <label htmlFor="username" className="label-title">Username*</label>
                <input type="text" name="username" id="username-field" className="form-input" placeholder="Username" required="required" />
              </div>
              <div className="form-group ">
                <label htmlFor="lastname" className="label-title">Password*</label>
                <input type="password" name="password" id="password-field" className="form-input" placeholder="Password" required="required" />
              </div>
            </div>
            {/* form-footer */}
            <div className="form-footer">
              <center>
                <button type="submit" value="Login" className="btn" id="login-form-submit">Login</button>
              </center>
              <center><a href="#">Forgot Password</a></center>
            </div>
          </div></form></div>
          
);
};
export default login;