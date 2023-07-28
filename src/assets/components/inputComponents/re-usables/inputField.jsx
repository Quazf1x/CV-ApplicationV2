import React, { Component } from "react";

function InputField({id, dataKey, label, handleChange, placeholder, maxLength = 23}) {

  return (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input 
    maxLength={maxLength}
    id={id}
    name={dataKey}
    data-key={dataKey}
    onChange={handleChange}
    placeholder={placeholder}/>
  </div>
)
}

export default InputField;