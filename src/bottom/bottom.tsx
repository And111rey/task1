import React, { Component } from 'react';
import "./bottom.css";
// import { render } from "react-dom";

interface IProps {
  message:string;
};

const Bottom = (props:IProps) => {
  
    return (
      <div className="bottom">
          Bottom content
          <h3 style={{textAlign:"center", color:"#17C422", marginTop:"10px"}}>{props.message}</h3>
      </div>
    );
 };




export { Bottom };
