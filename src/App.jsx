import React from 'react'
import "./App.css"
import { useState } from 'react'
const App = () => {

  let [counter, setCounter]=useState(0);

  const addValue =()=>{
    if(counter < 20)
      {
        setCounter(counter+1);

      }
  }

  const removeValue=()=>{
    if(counter > 0)
      {
        setCounter(counter-1)
      }
  }
  return (
    <div className='main-container'>
      <h1>React Hooks</h1>
      <h2>Counter Project</h2>
      <h3>Count: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default App