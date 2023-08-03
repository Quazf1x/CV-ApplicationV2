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

  const loadTemplate = () => {
    changePersonalInfo(data.personalInfo);
    changeMiscInfo(data.miscInfo);
    changeEducations(data.educations);
    changeJobExperiences(data.jobExperiences);
  }

  const clearTemplate = () => {
    changePersonalInfo('');
    changeMiscInfo('');
    changeEducations([]);
    changeJobExperiences([]);
  }

  const handleNewAttribute = (object, state, stateHook) => {
    stateHook(state.concat(object));
  }

  const handleNewEducation = (object) => {
    handleNewAttribute(object, educations, changeEducations);
  }

  const handleNewJob = (object) => {
    handleNewAttribute(object, jobExperiences, changeJobExperiences);
  }

  const removeAttributeElement = (e, state, stateHook) => {
    const id = e.target.closest('.attribute-input-wrapper').dataset.id;
    const newAttributeList = state.filter(attribute => attribute.id !== id);
    stateHook(newAttributeList);
  }

  const removeEducation = (e) => {
    removeAttributeElement(e, educations, changeEducations);
  }

  const removeJob = (e) => {
    removeAttributeElement(e, jobExperiences, changeJobExperiences);
  }

  const handleInfo = (e, state, stateHook) => {
    const key = e.target.dataset.key;
    stateHook({...state, [key]: e.target.value});
  }

  const handlePersonalInfo = (e) => {
    handleInfo(e, personalInfo, changePersonalInfo);
  }

  const handleMiscInfo = (e) => {
    handleInfo(e, miscInfo, changeMiscInfo);
  }

  return (
    <div className="App">
      <section id='input-section'>
        <ButtonArea fillResume={loadTemplate} clearResume={clearTemplate}/>
        <PersonalInfo inputData={inputData.personalInfo} handleChange={handlePersonalInfo}/>
        <MiscInfo handleChange={handleMiscInfo}/>
        <AttributeInfo name='Education' inputData={inputData.education} infoState={educations} handleRemoval={removeEducation} handleChange={handleNewEducation}/>
        <AttributeInfo name='Job Experience' inputData={inputData.jobExperience} infoState={jobExperiences} handleRemoval={removeJob} handleChange={handleNewJob}/>
      </section>
      <section id='preview-section' className='pretty-background'>
        <GeneralInfo infoState={personalInfo} />
        <Contacts infoState={personalInfo} />
        <Attribute isOutlined={false} name='Skills' dataKey="skills" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Objective' dataKey="objective" infoState={miscInfo}/>
        <Attribute isOutlined={true} name='Education' infoState={educations} type="list"/>
        <Attribute isOutlined={true} name='Work Experience' infoState={jobExperiences}  type="list"/>
    </section>
    </div>
  );
}

export default App;