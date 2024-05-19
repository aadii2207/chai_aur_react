import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=  useState(15);
  // let counter=4;

  const add=(counter)=>{
    counter++;
    setCounter(counter)
  }
  const minus=()=>{
    console.log("clicked",counter);
    counter--;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value</h2>
      <button 
      onClick={add}
      >add Value {counter} </button>
      <br />
      <button
      onClick={minus}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
 