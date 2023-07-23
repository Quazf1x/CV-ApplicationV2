import React, { Component } from "react";

function ButtonArea() {
  return(
    <div className="button-section input-section-padding pretty-background">
      <button>Load Template</button>
      <button>
      <i className="fa-solid fa-file-arrow-down"></i>
        Download PDF
      </button>
      <button className="delete-btn">
        <i className="fa-solid fa-trash"></i>
        Clear Resume
      </button>
    </div>
  )
}

export default ButtonArea;