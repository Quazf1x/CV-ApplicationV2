import React, { Component, useState } from "react";
import EducationForm from "./educationForm";
import EducationAdd from "./educationAdd";

function EducationInfo() {
  const [isForm, changeForm] = useState(false);

  const handleClick = () => {
    changeForm(!isForm);
  }

  return(

    <div className="input-section-padding pretty-background">
      <h1>Education</h1>
      {isForm ? <EducationForm handleCancel={handleClick}/> : <EducationAdd handleClick={handleClick} /> }
    </div>
  )
}

export default EducationInfo;