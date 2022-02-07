import React from "react";
//import "./suggestion.css";

const Suggestion = () => {
return (
<div>
        <title>Suggestion</title>
    
        <div className="container">
          <form role="form" action="" method="post">
            <h1>Suggestion</h1>
            
            
              
                <div className="id">
                <label>Enter Name</label>
                  <input type="text" path="" placeholder="Enter Name" required />
                    
                  </div>
             
              
                <div className="id">
                <label>Enter Email</label>
                  <input type="text" path="" placeholder="Enter Email" required />
                    
                </div>
              
              
                <div className="id">
                <label>School Name</label>
                  <input type="text" path="" placeholder="Enter School Name" required />
                
                </div>
              
              
                <div className="id">
                <label>School Address</label>
                  <input type="text" path="" placeholder="Enter School Address" required/>
                    </div>
             
                <div className="id">
                <label>Affiliation</label>
                  <input type="text" path="" placeholder="Enter Affiliation" required/>
                    </div>
              
                <div className="id">
                <label>Contact No</label>
                  <input type="text" path="" placeholder="Enter Contact No" required/>
                    </div>
              
                <div className="id">
                <label>Email</label>
                  <input type="text" path="" placeholder="Enter School Email Id" required/>
                    </div>
              <div className="id">
              <label>About School</label>
                <textarea path="" cols={15} rows={5} placeholder="Enter About School..." required/>
                
                </div>
                <div className="button">
              <input id="save" type="submit"  name="operation" />
              <input id="reset" type="reset"  name="operation" />
           </div>
           </form>
        </div>
      </div>
          
);
}
export default Suggestion;