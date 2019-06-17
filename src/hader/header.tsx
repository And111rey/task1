import React, { Component } from 'react';
import "./header.css";


interface IProps {
  leftAndCenter():void;
  rightAndBottom():void;
  delAllMess():void;
}

const Header = (props:IProps) => {
  
  let show = () => {
    props.leftAndCenter();
  };
  
  let show1 = () => {
    props.rightAndBottom();
  };
  
  let clear = () => {
    props.delAllMess();
  }
  
  
    return (
      <div className="header">
        <button style={{backgroundColor:"red", marginLeft:"33%", marginTop:"15px"}} onClick={show}>Click</button>
        <button style={{backgroundColor:"green",  marginLeft:"33%", marginTop:"15px"}} onClick={show1}>Click</button>
        <button style={{backgroundColor:"white",  marginLeft:"50%", marginTop:"15px"}} onClick={clear}>Clear</button>
      
      
      </div>
    );
  }
  


export { Header };
