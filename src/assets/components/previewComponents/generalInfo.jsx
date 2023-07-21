import React, { Component } from "react";
import placeholderImg from '../../Img/placeholder.png';

function GeneralInfo() {
  return(
    <div className="preview-general-info">
      <div>
        <hr className="bold-horizontal"></hr>
        <div className="name-display">
          <h1>John Smith</h1>
          <p className="light-font">yourmail@mail.com</p>
        </div>
        <hr className="bold-horizontal"></hr>
      </div>
      <div className="preview-img">
        <img src={placeholderImg} alt='CV author'/>
      </div>
    </div>
  )
}

export default GeneralInfo;