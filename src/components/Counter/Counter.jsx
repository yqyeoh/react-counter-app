import React from 'react'

function Counter(props) {
  const evaluateClass=()=>{
    return props.value > 0? "primary":"warning";
  }
  return (
    <React.Fragment>
        <h2>
          <span className={`badge badge-${evaluateClass()}`}>{props.value}</span>
        </h2>
        <button onClick={()=>props.handleIncrement(props.id)} className="btn btn-primary m-2"> + </button>
        <button onClick={()=>props.handleDecrement(props.id)} className="btn btn-danger m-2"> - </button>
        <button onClick={()=>props.handleDelete(props.id)} className="btn btn-secondary m-2"> Delete </button>
      </React.Fragment>
  )
}

export default Counter
