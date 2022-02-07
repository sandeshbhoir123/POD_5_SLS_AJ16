import React from "react";
import "./Dashboard.css";
import "./Dashboard1.css";
import logo from "./dd.jpg";
const Dashbord = () => {
return (
    <div>
        
        <title>Admin Dashbord</title>
    
        <title>navbar</title>
        
        
        {/* Page content */}
        <div className="main">
          <div className="cards-list">
            <div className="card">
              <div className="card_image"> <a className="card" href=""><img src={logo} /> </a></div>
              <div className="card_title title-black">
                <p style={{color: '#edf0f1', fontSize: '100px'}}>#</p>
                <p style={{fontSize: 'xx-large', color: '#edf0f1'}}>No of Schools</p>
              </div>
            </div>
            <div className="card">
              <div className="card_image"> <img src={logo} /> </div>
              <div className="card_title title-black">
                <p style={{color: '#edf0f1', fontSize: '100px'}}>#</p>
                <p style={{fontSize: 'xx-large', color: '#edf0f1'}}>Suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

          
);
};
export default Dashbord;