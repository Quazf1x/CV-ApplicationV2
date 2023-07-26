import React, { Component } from "react";

function ButtonArea() {
  return(
    <div className="button-section input-section-padding pretty-background">
      <button className="button-template">Load Template</button>
      <button className="button-template">
      <i className="fa-solid fa-file-arrow-down"></i>
        Download PDF
      </button>
      <button className="delete-btn button-template">
        <i className="fa-solid fa-trash"></i>
        Clear Resume
      </button>
    </div>
  )
}

export default ButtonArea;