import React, { Component } from 'react';
import "./center.css";

interface IProps {
  message:string;
}

const Center = (props:IProps) => {
  
    return (
      <div className="center">
        Center
        <h3 style={{textAlign:"center", color:"#810909"}}>{props.message}</h3>
      </div>
    );
}

  
  
  
  

export { Center };
