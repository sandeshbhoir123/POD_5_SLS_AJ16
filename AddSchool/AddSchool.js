import React from "react";
import "./AddSchool.css";

const AddSchool= () => {
    return (
  
  <div class="container">
  <form role="form" action="" method="labelost"  >
  <h1>ADD SCHOOL</h1>
  
  {/* school name */}
  <div class="id">
  <label>Enter School Name: &nbsp;&nbsp;&nbsp;<input type="text" required/></label>
  </div>
  {/* enter contact number */}
  
  <div class="id">
  <label>Enter Contact No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" required/></label>
  </div>
  {/* enter email id */}
  
  <div class="id">
  <label>Enter Email Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" required/></label>
  </div>
  {/* enter location */}
  
  <div class="id">
  <label>Enter Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" required/></label>
  </div>
  {/* enter affiliation */}
  <div class="id">
  <label>Enter Affiliation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" required/></label>
  </div>
  
  {/* enter rating */}
  <div class="id">
  <label>Enter Rating: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" required/></label>
  </div>
  {/* enter website */}
  <div class="id">
  <label>Enter Website:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" required/></label>
  </div>
  {/* enter distance */}
  <div class="id">
  <label>Enter Distance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" required/></label>
  
  </div>
  {/* enter fee */}
  <div class="id">
  <label>Enter Fee: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" required/></label>
  
  </div>
  {/* logo  */}
  <div class="id">
  <label>uplode the logo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="file" required/></label>
  
  </div>
 {/* image */}
  <div class="id">
  <label>uplode Image: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="file" required/></label>
  </div>
  {/* enter about school */}
  <div class="id">
  <label>About School:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <textarea  cols="15" rows="5" required/></label><br/>
  </div>
  {/* buttons */}
  <div class="button">
  <input id="save" type="submit" value="Save" name="operation" />
  <input id="reset" type="submit" value="Reset" name="operation "/>
  </div>
  </form>
 </div>
  );
  }
  export default AddSchool;