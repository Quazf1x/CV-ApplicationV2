import React, { Component, useState } from "react";
import ButtonArea from "./assets/components/inputComponents/buttonArea";
import PersonalInfo from "./assets/components/inputComponents/personalInfo";
import GeneralInfo from "./assets/components/previewComponents/generalInfo";
import Contacts from "./assets/components/previewComponents/contacts";
import Attribute from "./assets/components/previewComponents/attributes";
import MiscInfo from "./assets/components/inputComponents/miscInfo";

function App() {
  const [personalInfo, changePersonalInfo] = useState({
    fullName: 'John Smith',
    email: 'youremail@mail.com',
    adress: '956, 31st Street',
    country: 'United States',
    website: 'yourwebsite.com',
    phoneNumber: '(123) 456 789'
  });

  const handlePersonalInfo = (e) => {
    const key = e.target.dataset.key;
    changePersonalInfo({...personalInfo, [key]: e.target.value});
  }

  return (
    <div className="App">
      <section id='input-section'>
        <ButtonArea/>
        <PersonalInfo handleChange={handlePersonalInfo}/>
        <MiscInfo/>
      </section>
      <section id='preview-section' className='pretty-background'>
        <GeneralInfo infoState={personalInfo} />
        <Contacts infoState={personalInfo} />
        <Attribute isOutlined={false} name='Skills'/>
        <Attribute isOutlined={true} name='Objective'/>
        <Attribute isOutlined={true} name='Education'/>
        <Attribute isOutlined={true} name='Work Experience'/>
        <Attribute isOutlined={true} name='Qualifications'/>
    </section>
    </div>
  );
}

export default App;