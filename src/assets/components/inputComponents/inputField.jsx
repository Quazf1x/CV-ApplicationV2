import React, { Component } from "react";

function InputField({id, label, placeholder}) {
  return (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input 
    id={id}
    placeholder={placeholder}/>
  </div>
)
}

export default InputField;