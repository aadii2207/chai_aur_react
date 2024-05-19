import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Layout from './Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Layout/>
      
      <Footer/>


    </>
  )
}

export default App
