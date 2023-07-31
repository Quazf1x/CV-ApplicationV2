import React, { Component, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ButtonArea from "./assets/components/inputComponents/buttonArea";
import PersonalInfo from "./assets/components/inputComponents/personalInfo";
import GeneralInfo from "./assets/components/previewComponents/generalInfo";
import Contacts from "./assets/components/previewComponents/contacts";
import Attribute from "./assets/components/previewComponents/attributes";
import MiscInfo from "./assets/components/inputComponents/miscInfo";
import EducationInfo from "./assets/components/inputComponents/education/educationInfo";

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
    skills: '',
    objective: ''
  });

  const [educations, changeEducations] = useState([{
    name: 'Computer Science',
    university: 'Columbia University',
    startDate: 'Sep 1989',
    endDate: 'Sep 1992',
    contry: 'United States',
    id: uuidv4()},
  ]);

  const handleNewEducation = (educationObject) => {
    changeEducations(educations.concat(educationObject));
  }

  const removeEducation = (e) => {
    const id = e.target.closest('.education-input-wrapper').dataset.id;
    const newEducationList = educations.filter(education => education.id !== id);
    changeEducations(newEducationList);
  }

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
        <EducationInfo infoState={educations} handleRemoval={removeEducation} handleChange={handleNewEducation}/>
      </section>
      <section id='preview-section' className='pretty-background'>
        <GeneralInfo infoState={personalInfo} />
        <Contacts infoState={personalInfo} />
        <Attribute isOutlined={false} name='Skills' dataKey="skills" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Objective' dataKey="objective" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Education' infoState={educations} type="list"/>
        <Attribute isOutlined={true} name='Work Experience'  type="list"/>
        <Attribute isOutlined={true} name='Qualifications' type="list"/>
    </section>
    </div>
  );
}

export default App;