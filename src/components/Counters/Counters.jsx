import React, { Component } from 'react'
import {counters} from '../../sampleData'
import Counter from "../Counter/Counter"

export class Counters extends Component {
    
    

  render() {
      const {data} = this.props
      const isEmpty = data.length === 0
      

    return (
      <div>
        <button onClick={this.props.handleReset}className="btn btn-info m-2"> Reset </button>
          {isEmpty && <h2>No More Counters</h2>}
          {data.map(counter => (
            <Counter key={counter.id} id={counter.id} value={counter.value} handleDelete={this.props.handleDelete} handleIncrement={this.props.handleIncrement} handleDecrement={this.props.handleDecrement}/>
          ))}

      </div>
    )
  }
}

export default Counters
