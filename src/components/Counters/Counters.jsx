import React, { Component } from 'react'
import {counters} from '../../sampleData'
import Counter from "../Counter/Counter"

export class Counters extends Component {
    state={
        data:counters,
    }

    settingState = (counterId, operator) =>{
      const copy = [...this.state.data]
      copy.find(element=>element.id===counterId).value += operator;
      this.setState({data:copy})
    }

    handleIncrement=(counterId)=>{
      this.settingState(counterId, 1)
      //const newValue = this.state.value + 1
      //this.setState({value:newValue})s
    }

    handleDecrement=(counterId)=>{
      this.settingState(counterId, -1)
      //const newValue = this.state.value - 1
      //this.setState({value:newValue})
    }

  handleDelete = (counterid) =>{
    const filteredData = this.state.data.filter(counter=>counter.id!==counterid)
    this.setState({data:filteredData});
  }  

  handleReset = () =>{
    const copy = [...this.state.data]
    const updated = copy.map(counter=>{
      counter.value=0;
      return counter;
    })
    this.setState({data:updated});
  }

  render() {
      const {data} = this.state
      const isEmpty = data.length === 0
      

    return (
      <div>
        <button onClick={this.handleReset}className="btn btn-info m-2"> Reset </button>
          {isEmpty && <h2>No More Counters</h2>}
          {data.map(counter => (
            <Counter key={counter.id} id={counter.id} value={counter.value} handleDelete={this.handleDelete} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}/>
          ))}
      </div>
    )
  }
}

export default Counters
