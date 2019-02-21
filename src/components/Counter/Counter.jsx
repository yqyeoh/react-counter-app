import React, { Component } from 'react'

export class Counter extends Component {
    state = { 
      id: this.props.id,
      value: this.props.value
    }

    handleIncrement=()=>{
      const newValue = this.state.value + 1
      this.setState({value:newValue})
    }

    handleDecrement=()=>{
      const newValue = this.state.value - 1
      this.setState({value:newValue})
    }

    evaluateClass=()=>{
      return this.state.value > 0? "primary":"warning";
    }

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className={`badge badge-${this.evaluateClass()}`}>{this.state.value}</span>
        </h2>
        <button onClick={this.handleIncrement} className="btn btn-primary m-2"> + </button>
        <button onClick={this.handleDecrement} className="btn btn-danger m-2"> - </button>
        <button onClick={()=>this.props.handleDelete(this.state.id)} className="btn btn-secondary m-2"> Delete </button>
      </React.Fragment>
    )
  }
}

export default Counter