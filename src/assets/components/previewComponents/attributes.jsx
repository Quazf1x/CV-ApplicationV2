// import React, { Component } from "react";

function Attribute({isOutlined = false, name, dataKey, infoState, type = 'text'}) {

  let renderAttributes;

  if(Array.isArray(infoState)) {
    renderAttributes = infoState.map(attribute => {
    return (<div key={attribute.id}>
      <div className="attribute-headline-row">
        <h2>{attribute.name}</h2>
        <p>
          <span>{attribute.startDate} — {attribute.endDate}</span>
        </p>
      </div>
      <p>
      {attribute.university || attribute.companyName}
      </p>
      <p>
      {attribute.contry || attribute.description}
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
      {renderAttributes}
    </div>;

  return(
      <div className={isOutlined ? 'top-border' + ' attribute-list': 'attribute-list'}>
        <h2 className="attribute-name">{name}</h2>
        {content}
      </div>
    );
}

export default Attribute;