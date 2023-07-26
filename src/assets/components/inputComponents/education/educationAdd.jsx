import React, { Component, useState } from "react";

function EducationAdd({handleClick}) {
  return(
      <div  className="align-center-btn" >
        <button onClick={handleClick} className="button-template">+ Add Education</button>
      </div>
  )
}

export default EducationAdd;