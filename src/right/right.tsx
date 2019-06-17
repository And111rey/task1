import React, { Component } from 'react';
import "./right.css";



interface IProps {
  message:string;
}

const Right = (props:IProps) => {
  
    return (
      <div className="right">
        Right
        <h3 style={{textAlign:"center", color:"#17C422"}}>{props.message}</h3>
      </div>
    );
}


export { Right };
