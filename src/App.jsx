import React, { Component, useState } from "react";
import ButtonArea from "./assets/components/inputComponents/buttonArea";
import PersonalInfo from "./assets/components/inputComponents/personalInfo";
import GeneralInfo from "./assets/components/previewComponents/generalInfo";
import Contacts from "./assets/components/previewComponents/contacts";
import Attribute from "./assets/components/previewComponents/attributes";
import MiscInfo from "./assets/components/inputComponents/miscInfo";
import EducationInfo from "./assets/components/inputComponents/educationInfo";

function App() {
  const [personalInfo, changePersonalInfo] = useState({
    fullName: 'John Smith',
    email: 'youremail@mail.com',
    adress: '956, 31st Street',
    country: 'United States',
    website: 'yourwebsite.com',
    phoneNumber: '(123) 456 789'
  });

  const [miscInfo, changeMiscInfo] = useState({
    skills: 'JavaScript, Python, HTML5/CSS...',
    objective: 'To land a job in a...'
  })

  const handlePersonalInfo = (e) => {
    const key = e.target.dataset.key;
    changePersonalInfo({...personalInfo, [key]: e.target.value});
  }

  const handleMiscInfo = (e) => {
    const key = e.target.dataset.key;
    changeMiscInfo({...miscInfo, [key]: e.target.value});
  }

  return (
    <div className="App">
      <section id='input-section'>
        <ButtonArea/>
        <PersonalInfo handleChange={handlePersonalInfo}/>
        <MiscInfo handleChange={handleMiscInfo}/>
        <EducationInfo/>
      </section>
      <section id='preview-section' className='pretty-background'>
        <GeneralInfo infoState={personalInfo} />
        <Contacts infoState={personalInfo} />
        <Attribute isOutlined={false} name='Skills' dataKey="skills" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Objective' dataKey="objective" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Education' type="list"/>
        <Attribute isOutlined={true} name='Work Experience' type="list"/>
        <Attribute isOutlined={true} name='Qualifications' type="list"/>
    </section>
    </div>
  );
}

export default App;