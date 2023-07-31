import React, { Component } from "react";

function EducationAdd({infoState, handleRemoval, handleClick}) {

  const existingEducationsInfo = infoState.map(education => {
    return(
      <div className="education-input-wrapper" key={education.id} data-id={education.id}>
        <h3>{education.name}, <span className="education-input-date">{education.startDate} - {education.endDate}</span></h3>
        <div className="education-btns-wrapper">
          <button onClick={handleRemoval} className="delete-btn"><i className="fa-regular fa-trash-can"></i></button>
        </div>
      </div>
    )
  });

  return(
      <div id="education-input-div" className="align-center-btn" >
        {existingEducationsInfo}
        <button onClick={handleClick} className="button-template">+ Add Education</button>
      </div>
  )
}

export default EducationAdd;