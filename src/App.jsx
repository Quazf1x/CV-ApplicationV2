import React, { Component, useState } from "react";
import { data } from "./data";
import { inputData } from "./inputData";
import ButtonArea from "./assets/components/inputComponents/buttonArea";
import PersonalInfo from "./assets/components/inputComponents/personalInfo";
import GeneralInfo from "./assets/components/previewComponents/generalInfo";
import Contacts from "./assets/components/previewComponents/contacts";
import Attribute from "./assets/components/previewComponents/attributes";
import MiscInfo from "./assets/components/inputComponents/miscInfo";
import AttributeInfo from "./assets/components/inputComponents/attribute/attributeInfo";

function App() {
  const [personalInfo, changePersonalInfo] = useState(data.personalInfo);
  const [miscInfo, changeMiscInfo] = useState(data.miscInfo);
  const [educations, changeEducations] = useState(data.educations);
  const [jobExperiences, changeJobExperiences] = useState(data.jobExperiences);

  const handleNewEducation = (educationObject) => {
    changeEducations(educations.concat(educationObject));
  }

  const removeEducation = (e) => {
    const id = e.target.closest('.attribute-input-wrapper').dataset.id;
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
        <PersonalInfo inputData={inputData.personalInfo} handleChange={handlePersonalInfo}/>
        <MiscInfo handleChange={handleMiscInfo}/>
        <AttributeInfo inputData={inputData.education} infoState={educations} handleRemoval={removeEducation} handleChange={handleNewEducation}/>
        <AttributeInfo inputData={inputData.jobExperience} infoState={jobExperiences} handleRemoval={removeEducation} handleChange={handleNewEducation}/>
      </section>
      <section id='preview-section' className='pretty-background'>
        <GeneralInfo infoState={personalInfo} />
        <Contacts infoState={personalInfo} />
        <Attribute isOutlined={false} name='Skills' dataKey="skills" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Objective' dataKey="objective" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Education' infoState={educations} type="list"/>
        <Attribute isOutlined={true} name='Work Experience' infoState={jobExperiences}  type="list"/>
        <Attribute isOutlined={true} name='Qualifications' type="list"/>
    </section>
    </div>
  );
}

export default App;