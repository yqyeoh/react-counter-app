import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Label from "./Label";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  add = (id) => {
    console.log(id);
    let newValue = this.state.value;
    newValue++;
    this.setState({
      value: newValue
    });
  };

  minus = () => {
    let newValue = this.state.value;
    newValue--;
    this.setState({
      value: newValue
    });
  };

  render() {
    return (
      <React.Fragment>
        <Label value={this.state.value} />
        <div className="App">
          <Counter add={()=>this.add({id:1})} minus={this.minus} value={this.state.value} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
