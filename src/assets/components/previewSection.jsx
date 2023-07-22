import React, { Component } from "react";
import GeneralInfo from "./previewComponents/generalInfo";
import Contacts from "./previewComponents/contacts";
import Attribute from "./previewComponents/attributes";

function PreviewSection() {
  return(
    <section className="pretty-background">
      <GeneralInfo/>
      <Contacts/>
      <Attribute isOutlined={false} name='Skills'/>
      <Attribute isOutlined={true} name='Objective'/>
      <Attribute isOutlined={true} name='Education'/>
      <Attribute isOutlined={true} name='Work Experience'/>
      <Attribute isOutlined={true} name='Qualifications'/>
    </section>
  )
}

export default PreviewSection;