// import React, { Component } from "react";

function Attribute({isOutlined = false, name, dataKey, infoState, type = 'text'}) {

  let renderEducations;

  if(Array.isArray(infoState)) {
    renderEducations = infoState.map(education => {
    return (<div key={education.id}>
      <div className="attribute-headline-row">
        <h2>{education.name}</h2>
        <p>
          <span>{education.startDate} — {education.endDate}</span>
        </p>
      </div>
      <p>
      {education.university}
      </p>
      <p>
      {education.contry}
      </p>
    </div>)
    }
  );}
  
  const content = type === 'text' ? 
    <div className='text-area-div'>
      {infoState[dataKey]}
    </div> 
    : 
    <div>
      {renderEducations}
    </div>;

  return(
      <div className={isOutlined ? 'top-border' + ' attribute-list': 'attribute-list'}>
        <h2 className="attribute-name">{name}</h2>
        {content}
      </div>
    );
}

export default Attribute;