import React, { Component, useState } from "react";
import placeholderImg from '../../Img/placeholder.png';

function GeneralInfo({infoState}) {
  const [image, setImage] = useState(placeholderImg);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return(
    <div className="preview-general-info">
      <div>
        <hr className="bold-horizontal"></hr>
        <div className="name-display">
          <h1>{infoState.fullName}</h1>
          <p className="light-font">{infoState.email}</p>
        </div>
        <hr className="bold-horizontal"></hr>
      </div>
      <div className="preview-img">
        <img src={image} alt='CV author'/>
        <input onChange={handleImageChange} id='cv-avatar' type="file"/>
        <label htmlFor='cv-avatar'>Add Image</label>
      </div>
    </div>
  )
}

export default GeneralInfo;