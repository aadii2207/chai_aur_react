import { useState } from 'react'
import {useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
 const [length,setLength]=useState(8);
 const [numberAllow,setNumberAllowed]=useState(false);
 const [charAllowed,setCharAllowed] =useState(false);
 const [password,setPassWord]=useState("");

 const passwordGenerator=useCallback( ()=>{
     let pass=""
     let str=""
     if(numberAllow) str+="0123456789"
     if(charAllowed) str+="!@#$%^&*()_-+=[]{}\|~`?"

     for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length()+1);
      pass+=str.charAt(char);
     }
     setPassWord(pass)

 }

  ,[length,numberAllow,
  charAllowed,setPassWord])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,
    charAllowed,setPassWord])
  return (
    <>
    <div className='w-full max-w-md mx-auto  
    shadow-md rounded-lg px-4 my-8
     text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg 
      overflow-hidden mb-4'>
        <input type=" " 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly

        />
        <button className='outline-none bg-blue-700 text-white px-3
        py-0.5 shrink-0'>copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChanges={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <input type="checkbox"
        defaultChecked={numberAllow}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }} />
      </div>
    </div>
    </>
  )
}

export default App
