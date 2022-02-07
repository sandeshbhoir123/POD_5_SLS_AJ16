import React from "react";
import "./SuggestionDetails.css";
import logo from "./pin.png";
import logo1 from "./tel.png";
import logo2 from "./email.png";
const SuggestionDetails = () => {
return (
    <div>
   
    <title>${'{'}form.name{'}'}</title>
    <div className="UpperTitle">
      <img className="demo-bg" src="" alt="" />
      <h1 className="HeadTitle">
        ${'{'}form.schoolName{'}'}
      </h1>
    </div>
    <div className="about">
      <h2>About School</h2>
      <p>${'{'}form.about{'}'}</p>
    </div>
    <div className="details">
      <h2>More Info</h2>
      <table>
        <tbody><tr>
            <td>Suggestion User Name : ${'{'}form.name{'}'}</td>
          </tr>
          <tr>
            <td>Suggestion User Email : ${'{'}form.email{'}'}</td>
          </tr>
          <tr>
            <td>
              <img className="icon" src={logo} alt="" />
            </td>
            <td>${'{'}form.schoolAddress{'}'}</td>
          </tr>
          <tr>
            <td>
              <img className="icon" src={logo1} alt="" />
            </td>
            <td>
              ${'{'}form.contactNo{'}'}
            </td>
          </tr>
          <tr>
            <td>
              <img className="icon" src={logo2} alt="" />
            </td>
            <td>${'{'}form.schoolEmailId{'}'}</td>
          </tr>
          <tr>
            <td>Affiliation:</td>
            <td>${'{'}form.affliation{'}'}</td>
          </tr>
        </tbody></table>
    </div>
  </div>
          
);
}
export default SuggestionDetails;