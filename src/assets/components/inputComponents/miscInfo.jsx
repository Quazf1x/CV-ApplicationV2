import React, { Component } from "react";
import InputField from "./inputField";
import TextArea from "./textAreaField";

function MiscInfo({handleChange}) {
  return(
    <div className="input-section-padding pretty-background">
      <h1>Misc. Info</h1>
      <TextArea id="skills" handleChange={handleChange} data-key="skills" label="Skills" placeholder="List your skills here!"/>
      <TextArea id="objective" handleChange={handleChange} data-key="objective" label="Objective" placeholder="/careerName/ looking for..."/>
    </div>
  )
}

export default MiscInfo;