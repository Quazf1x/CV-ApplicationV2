import React, { Component, useState } from "react";
import EducationForm from "./educationForm";
import EducationAdd from "./educationAdd";

function EducationInfo({infoState, handleChange}) {
  const [isForm, changeForm] = useState(false);

  const handleClick = () => { //swaps add button to form and vice versa
    changeForm(!isForm);
  }

  return(

    <div className="input-section-padding pretty-background">
      <h1>Education</h1>
      {isForm ? <EducationForm handleClick={handleClick} handleChange={handleChange} handleCancel={handleClick}/> : <EducationAdd infoState={infoState} handleClick={handleClick} /> }
    </div>
  )
}

export default EducationInfo;