import React from 'react';
import "./left.css";

interface IProps {
  message:string;
}

// interface IState{
//   data:string;
// }

const Left = (props:IProps) => {
  return (
    <div className="left">
      Left
      <h3 style={{textAlign:"center", color:"#810909"}}>{props.message}</h3>
      
    </div>
  );
}
  

export { Left };
