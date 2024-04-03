import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Vite + React</h1>
      <Cards username="Swati" btnText="click me"/>
      <Cards username="Abhay"/>
    </>
  )
}

export default App
