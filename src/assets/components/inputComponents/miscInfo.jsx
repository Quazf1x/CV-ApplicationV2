import React, { Component } from "react";
import TextArea from "./re-usables/textAreaField";

function MiscInfo({infoState, handleChange}) {
  return(
    <div  className="input-section-padding pretty-background">
      <h1>Misc. Info</h1>
      <TextArea id="skills" value={infoState.skills} handleChange={handleChange} dataKey="skills" label="Skills" placeholder="List your skills here!"/>
      <TextArea id="objective" value={infoState.objective} handleChange={handleChange} dataKey="objective" label="Objective" placeholder="/careerName/ looking for..."/>
    </div>
  )
}

export default MiscInfo;