import React, { Component } from 'react';

import { Header } from "./hader/header";
import { Left } from "./left/left";
import { Center } from "./center/center";
import { Right } from "./right/right";
import { Bottom } from "./bottom/bottom";
import { tsConstructorType } from '@babel/types';



interface IState{
  
    mess0: string;
    mess1: string;
  
}

class App extends Component<{}, IState> {

state = {
  mess0: "",
  mess1: ""
}

public leftAndCenter = () => {
  this.setState({
    mess0:"you clicked on red button",
    mess1:""
  });
};

public rightAndBottom = () => {
  this.setState({
    mess0:"",
    mess1:"you clicked on green button"
  });
};

public delAllMess = () => {
  this.setState({
    mess0:"",
    mess1:""
  })
}
  render () {
    
      return (
        <div className="app">
          < Header delAllMess={this.delAllMess} rightAndBottom={this.rightAndBottom}  leftAndCenter={this.leftAndCenter} />
          < Left message={this.state.mess0} />
          < Center message={this.state.mess0} />
          < Right  message={this.state.mess1} />
          < Bottom message={this.state.mess1} />
        </div>
      );
}
}


  


export default App;
