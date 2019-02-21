import React from 'react'

function Counter(props) {
  const {value, id, handleDecrement, handleIncrement, handleDelete} = props
  const evaluateClass=()=>{
    return props.value > 0? "primary":"warning";
  }
  return (
    <React.Fragment>
        <h2>
          <span className={`badge badge-${evaluateClass()}`}>{value}</span>
        </h2>
        <button onClick={()=>handleIncrement(id)} className="btn btn-primary m-2"> + </button>
        <button onClick={()=>handleDecrement(id)} className="btn btn-danger m-2"> - </button>
        <button onClick={()=>handleDelete(id)} className="btn btn-secondary m-2"> Delete </button>
      </React.Fragment>
  )
}

export default Counter
