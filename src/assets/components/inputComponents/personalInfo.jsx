import React, { Component } from "react";
import InputField from "./inputField";

function PersonalInfo() {
  return(
    <div className="input-section-padding pretty-background">
      <h1>Personal Info</h1>
      <InputField id='full-name' label='Full Name' placeholder='Your first and last name'/>
      <InputField id='email' label='Email' placeholder='yourmail@mail.com'/>
      <InputField id='adress' label='Adress' placeholder='956, 31st Street'/>
      <InputField id='country' label='Country' placeholder='United States'/>
      <InputField id='website' label='Website' placeholder='yourwebsite.com'/>
      <InputField id='phone-number' label='Phone Number' placeholder='(123) 848 888'/>
    </div>
  )
}

export default PersonalInfo;