import React, { Component } from "react";
import InputField from "./re-usables/inputField";

function PersonalInfo({infoState, handleChange}) {
 
  return(
    <div className="input-section-padding pretty-background">
      <h1> Personal Info</h1>
      <InputField id='full-name' value={infoState.fullName} dataKey='fullName' handleChange={handleChange} label='Full Name' placeholder='Your first and last name'/>
      <InputField id='email' value={infoState.email} dataKey='email' handleChange={handleChange} label='Email' placeholder='yourmail@mail.com'/>
      <InputField id='adress' value={infoState.adress} dataKey='adress' handleChange={handleChange} label='Adress' placeholder='956, 31st Street'/>
      <InputField id='country' value={infoState.country} dataKey='country' handleChange={handleChange} label='Country' placeholder='United States'/>
      <InputField id='website' value={infoState.website} dataKey='website' handleChange={handleChange} label='Website' placeholder='yourwebsite.com'/>
      <InputField id='phone-number' value={infoState.phoneNumber} dataKey='phoneNumber' handleChange={handleChange} label='Phone Number' placeholder='(123) 848 888'/>
    </div>
  )
}

export default PersonalInfo;