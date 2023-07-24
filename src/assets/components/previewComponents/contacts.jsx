import React, { Component } from "react";

function Contacts({infoState}){
  return(
    <div className="preview-contacts light-font">
      <div>
        <p className="preview-street"> {infoState.adress} </p>
        <p className="preview-country"> {infoState.country} </p>
      </div>
      <div>
        <p className="preview-website"> {infoState.website} </p>
        <p className="preview-phone"> {infoState.phoneNumber} </p>
      </div>
    </div>
  )
}
export default Contacts;