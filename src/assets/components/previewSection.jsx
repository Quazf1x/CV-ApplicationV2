import React, { Component } from "react";
import GeneralInfo from "./previewComponents/generalInfo";
import Contacts from "./previewComponents/contacts";
import Attribute from "./previewComponents/attributes";

function PreviewSection() {
  return(
    <section>
      <GeneralInfo/>
      <Contacts/>
      <Attribute isOutlined={false}/>
    </section>
  )
}

export default PreviewSection;