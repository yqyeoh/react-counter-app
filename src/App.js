import React, { Component } from 'react'

import Counters from './components/Counters/Counters'
import Total from './components/Total/Total'
import {counters} from './sampleData'

export class App extends Component {
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

    const numCounter = this.state.data.length
    const totalCount = this.state.data.reduce((acc,element)=>{ return acc+element.value},0)
    return (
      <React.Fragment>
        <h1>Counter Lab</h1>
        <Total numCounter={numCounter} totalCount={totalCount} />
        <Counters
        data={this.state.data}
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
         />
      </React.Fragment>
      
    )
  }
}

export default App
