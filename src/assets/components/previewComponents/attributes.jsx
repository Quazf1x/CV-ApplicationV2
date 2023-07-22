// import React, { Component } from "react";

function Attribute({isOutlined = false, name}) {
  return(
    <div className={isOutlined ? 'top-border' + ' attribute-list' : 'attribute-list'}>
      <h2>{name}</h2>
      <ul>
        <li>11</li>
        <li>22</li>
      </ul>
    </div>
  )
}

export default Attribute;