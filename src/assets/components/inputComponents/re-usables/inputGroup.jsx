import React, { Component } from "react";
import InputField from "../re-usables/inputField";

function InputsGroup({arrayData, handleChange}) {
  //function that creates input fields from data provided
  const forms = arrayData.map((element, i) => {
    //checking if the data element is an array
    // if yes, it nests array elements as InputFields inside div
    //if no, creates a single InputField element
    const field = Array.isArray(element) ? 
    <div key={i}>
      {element.map(subField => {
        return <InputField 
          key={subField.key}
          maxLength={subField.maxLength}
          id={subField.id} 
          label={subField.label} 
          dataKey={subField.dataKey}
          placeholder={subField.placeholder}
          handleChange={handleChange}/>
      })}
    </div>
    : 
    <InputField
    key={element.key}
    maxLength={element.maxLength}
    id={element.id} 
    label={element.label} 
    dataKey={element.dataKey}
    placeholder={element.placeholder}
    handleChange={handleChange}/>

  return field;
  });

  return (
    <>
    {forms}
    </>
  )
}

export default InputsGroup;