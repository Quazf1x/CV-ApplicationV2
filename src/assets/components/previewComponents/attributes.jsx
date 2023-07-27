// import React, { Component } from "react";

function Attribute({isOutlined = false, name, dataKey, infoState, type = 'text'}) {

  const content = type === 'text' ? 
    <div className='text-area-div'>
      {infoState[dataKey]}
    </div> 
    : 
    <div>
      <div>
        <h2>Computer Science</h2>
        <p>
          <span>Sep 1989</span> — <span>Sep 1992</span>
        </p>
      </div>
      <p>
        University of Washington
      </p>
      <p>
        United States
      </p>
    </div>;

  return(
      <div className={isOutlined ? 'top-border' + ' attribute-list': 'attribute-list'}>
        <h2 className="attribute-name">{name}</h2>
        {content}
      </div>
    );


  // if(type === 'text') 
  // return(
  //   <div className={isOutlined ? 'top-border' + ' attribute-list': 'attribute-list'}>
  //     <h2 className="attribute-name">{name}</h2>
  //     <div className='text-area-div' >
  //       {infoState[dataKey]}
  //     </div>
  //   </div>
  // );
  // else return(
  //   <div className={isOutlined ? 'top-border' + ' attribute-list' : 'attribute-list'}>      
  //     <h2 className="attribute-name">{name}</h2>
  //     <ul className="attribute-ul-list">
  //       <li>11</li>
  //       <li>22</li>
  //     </ul>
  //   </div>
  // )

}

export default Attribute;