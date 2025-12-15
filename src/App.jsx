import React from 'react'
import './App.css'
import Navbar from './Pages/Shared_pages/Navbar/Navbar'
import Home from './Pages/Homepage/Home/Home'

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
