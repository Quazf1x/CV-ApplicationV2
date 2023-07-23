import React, { Component, useState } from "react";
import ButtonArea from "./assets/components/inputComponents/buttonArea";
import PersonalInfo from "./assets/components/inputComponents/personalInfo";
import GeneralInfo from "./assets/components/previewComponents/generalInfo";
import Contacts from "./assets/components/previewComponents/contacts";
import Attribute from "./assets/components/previewComponents/attributes";

function App() {
  const [personalInfo, changePersonalInfo] = useState({
    fullName: '',
    email: '',
    adress: '',
    country: '',
    website: '',
    phoneNumber: ''
  });

  return (
    <div className="App">
      <section id='input-section'>
        <ButtonArea/>
        <PersonalInfo/>
      </section>
      <section className="pretty-background">
        <GeneralInfo/>
        <Contacts/>
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