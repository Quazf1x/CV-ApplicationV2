import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import InputField from "../re-usables/inputField";

function EducationForm({inputData, handleChange, handleClick, handleCancel}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    //creates an object from form data
    let formObject = {};
    const data = new FormData(e.target);
    for (let [key, value] of data.entries()) {
      formObject[key] = value;
    }
    formObject.id = uuidv4();

    //add object to the educations array 
    handleChange(formObject);
    
    //close form
    handleClick();
  }

  //function that creates input fields from data provided
  const forms = inputData.map((element, i) => {
    //checking if the data element is an array
    // if yes, it nests array elements as InputFields inside div
    //if no, creates a single InputField element
    const field = Array.isArray(element) ? 
    <div key={i}>
      {element.map(subField => {
        return <InputField 
          key={subField.key}
          id={subField.id} 
          label={subField.label} 
          dataKey={subField.dataKey}
          placeholder={subField.placeholder}/>
      })}
    </div>
    : 
    <InputField 
    key={element.key} 
    id={element.id} 
    label={element.label} 
    dataKey={element.dataKey}
    placeholder={element.placeholder}/>

  return field;
  });

  return(
    <form id="education-form" onSubmit={handleSubmit}>
      {forms}      
      <div onClick={console.log(inputData)} className="top-margin">
        <button onClick={handleCancel} id="cancel-education-btn" className="button-template">Cancel</button>
        <button type="submit" id="save-education-btn" className="button-template">Save</button>
      </div>
    </form>
  )
}

export default EducationForm;