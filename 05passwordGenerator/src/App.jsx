import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  //use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@_-#$&*";

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword]) //argument added for tracking changes and optimization

  const copyToClipboard = useCallback(() => {
    setCopied(() => true)
    passwordRef.current?.select(); //highlight password to give user copy effect
    passwordRef.current?.setSelectionRange(0,100) //how many characters to select/highlight
    window.navigator.clipboard.writeText(password) //copy to clipboard
  },[password])

  /*
  1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
  2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
  3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values
  */
  useEffect(() => {
    passwordGenerator()
    setCopied(() => false)
  }, [length, numberAllowed, charAllowed,passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-4xl text-center text-white my-5'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 hover:bg-blue-300 text-white px-3 py-0.5 shrink-0'>
          {!copied ? "Copy" : "Copied"} 
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={100} 
            value={length} 
            onChange={(e) => {setLength(e.target.value)}}
            className='cursor-pointer'/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setNumberAllowed(prev => !prev)}}
            className='cursor-pointer'/>
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {setCharAllowed(prev => !prev)}}
            className='cursor-pointer'/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
