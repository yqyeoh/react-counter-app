import React, { Component } from 'react'

export class Counter extends Component {
    /*state = { 
      id: this.props.id,
      value: this.props.value
    }*/

    evaluateClass=()=>{
      return this.props.value > 0? "primary":"warning";
    }

  render() {
    return (
      <React.Fragment>
        <h2>
          <span className={`badge badge-${this.evaluateClass()}`}>{this.props.value}</span>
        </h2>
        <button onClick={()=>this.props.handleIncrement(this.props.id)} className="btn btn-primary m-2"> + </button>
        <button onClick={()=>this.props.handleDecrement(this.props.id)} className="btn btn-danger m-2"> - </button>
        <button onClick={()=>this.props.handleDelete(this.props.id)} className="btn btn-secondary m-2"> Delete </button>
      </React.Fragment>
    )
  }
}

export default Counter
