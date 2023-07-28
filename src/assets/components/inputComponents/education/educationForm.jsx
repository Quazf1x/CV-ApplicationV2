import React, { Component } from "react";
import InputField from "../re-usables/inputField";

function EducationForm({handleCancel}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    let formObject = {}
    const data = new FormData(e.target)
    for (let [key, value] of data.entries()) {
      formObject[key] = value;
      console.log(formObject);
  }
  } 

  return(
    <form id="education-form" onSubmit={handleSubmit}>
      <InputField id="education-name" dataKey="name" label="Name" placeholder="Software engineer"/>
      <InputField id="university-name" dataKey="university" label="University" placeholder="University of Washington"/>
      <div>
        <InputField id="university-start" dataKey="startDate" label="Start Date" placeholder="01.01.2000"/>
        <InputField id="university-end" dataKey="endDate" label="End Date" placeholder="01.01.2004"/>
      </div>
      <InputField id="university-contry" dataKey="contry" label="Contry" placeholder="United States"/>
      <div className="top-margin">
        <button onClick={handleCancel} id="cancel-education-btn" className="button-template">Cancel</button>
        <button type="submit" id="save-education-btn" className="button-template">Save</button>
      </div>
    </form>
  )
}

export default EducationForm;