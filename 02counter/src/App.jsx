import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if(counter==5) setCounter(5)
    else setCounter(counter+1)
    
    //IMPORTANT

    //this will update count by 1 not 4
    //useState will send all requests in batches, 
    //but all the update requests are working at once on the same counter
    //hence only one undate happens
    //as the same operation is being performed
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //now the counter will be increemented by 4 at once
    //callback fun: oneach call, last updated value is returned and then the next operation occurs. prevcount has the last updated value of counter and then added on
    setCounter(prevCount => prevCount+1);
    setCounter(prevCount => prevCount+1);
    setCounter(prevCount => prevCount+1);
    setCounter(prevCount => prevCount+1);

  }

  const removeValue = () => {
    if(counter==0) setCounter(0)
    else setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
