import React from "react";
//import "./signup.css";
//import logo from "./admin.jpg";
const SignUp = () => {
return (
    <div>
        <div className="container">
          <form role="form" action="" method="post" modelattribute="form">
            <u><h2>Fill the criteria</h2></u>
            {/* <b>&lt;%@ include file="businessMessage.jsp"%&gt;</b> */}
            <br/>
              <div className="id">
              <label>Name</label>
                <input type="text" path="" placeholder="Enter Name" required/>
                  </div>
                  <br/>
                
            
            
              <div className="id">
              <label>Contact No</label>
                <input type="text" path="" placeholder="Enter Contact No" required />
                </div>
                <br/>
                
            
            
              <div className="id">
              <label>Gender:</label>
                <label><input type="radio" path="" name="gender" value="Female" />
                Female</label><br/><br/><br/>
                <label><input type="radio" path=""  name="gender" value="Male" />Male</label>
                  </div>
            
            
      
              <div className="id">
              <label>Email</label>
                <input type="email" path="" placeholder="Enter Email Id" required />
            </div>
            
            
             
            
              <div className="id">
              
                <label >Affiliation Board:</label>
                <label><input type="radio"  name="board" className="t4" path="" value="CBSE" />CBSE &nbsp;&nbsp;&nbsp;&nbsp;<br/>
                  <input type="radio" name="board" className="t4" path="" value="ICSE" />ICSE <br/>
                    <input type="radio" name="board" className="t4" path="" value="State Board" />State Board</label>
                    </div>
            
            <div className="id">
            <label>Fee:</label>
              <input className="last" type="text" path="" placeholder="Desired Education Fee Range" required />
            {/*Submission buttons*/}
            </div>
            <br/><br/>
            <div className="button">
            <input id="submit" type="submit" defaultValue="Search" name="operation" />
            <input id="cancel" type="submit" value="Cancel" defaultValue="Cancel" name="operation" />
            </div>
          </form>
        </div>
      </div>
          
);
};
export default SignUp;