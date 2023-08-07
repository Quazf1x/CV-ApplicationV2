import React, { Component } from "react";

function ButtonArea({fillResume, clearResume}) {

  const downloadPDF = () => {
    console.log('do later'); 
  }

  return(
    <div className="button-section input-section-padding pretty-background">
      <button onClick={fillResume} className="button-template">Load Template</button>
      <button onClick={downloadPDF} className="button-template">
      <i className="fa-solid fa-file-arrow-down"></i>
        Download PDF
      </button>
      <button onClick={clearResume} className="delete-btn button-template">
        <i className="fa-solid fa-trash"></i>
        Clear Resume
      </button>
    </div>
  )
}

export default ButtonArea;