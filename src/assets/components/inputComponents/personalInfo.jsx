import React, { Component } from "react";
import InputField from "./inputField";

function PersonalInfo({handleChange}) {
 
  return(
    <div className="input-section-padding pretty-background">
      <h1> Personal Info</h1>
      <InputField id='full-name' dataKey='fullName' handleChange={handleChange} label='Full Name' placeholder='Your first and last name'/>
      <InputField id='email' dataKey='email' handleChange={handleChange} label='Email' placeholder='yourmail@mail.com'/>
      <InputField id='adress' dataKey='adress' handleChange={handleChange} label='Adress' placeholder='956, 31st Street'/>
      <InputField id='country' dataKey='country' handleChange={handleChange} label='Country' placeholder='United States'/>
      <InputField id='website' dataKey='website' handleChange={handleChange} label='Website' placeholder='yourwebsite.com'/>
      <InputField id='phone-number' dataKey='phoneNumber' handleChange={handleChange} label='Phone Number' placeholder='(123) 848 888'/>
    </div>
  )
}

export default PersonalInfo;