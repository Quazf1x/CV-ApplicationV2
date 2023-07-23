import React, { Component } from "react";
import ButtonArea from "./inputComponents/buttonArea";
import PersonalInfo from "./inputComponents/personalInfo";

function InputSection() {
  return(
    <section id='input-section'>
      <ButtonArea/>
      <PersonalInfo/>
    </section>
  )
}

export default InputSection;