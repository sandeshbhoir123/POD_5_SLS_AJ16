import React from "react";
import "./SuggestionList.css";
//import logo from "./admin.jpg";
const suggestionlist = () => {
return (
    <div>
    
    <title>Suggestion School List</title>
    
    {/* Title Division Declaration and Adding the title in a separate division*/}
    <div className="UpperTitle">
      <img className="demo-bg" src="" alt="" />
      <h1 className="HeadTitle">Suggestions Schools</h1>
    </div>
    {/* <b>&lt;%@ include file="businessMessage.jsp"%&gt;</b> */}
    {/*Using table to display a structured view of page content */}
    <foreach items="${list}" var="sc" varstatus="school">
    </foreach><table>
      <tbody><tr>
          {/*Adding the Schools as a link */}
          {/*Each link is added as a table data row-wise*/} 
          <td>
            <a href="" suggestion detailid="${sc.id}/">
              <div className="cell">
                KES PEN
              </div>
            </a>
          </td>
        </tr>
      </tbody></table>
    {/*Each link redirects the user to a separate page for each school respectively*/}
  </div>
          
);
};
export default suggestionlist;