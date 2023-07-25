import React, { Component } from "react";

function TextArea({id, dataKey, label, handleChange, placeholder}) {

  return (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <textarea 
    id={id}
    data-key={dataKey}
    onChange={handleChange}
    placeholder={placeholder}/>
  </div>
)
}

export default TextArea;