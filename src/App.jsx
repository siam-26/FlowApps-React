import React from 'react'
import './App.css'
import Navbar from './Pages/Shared_pages/Navbar/Navbar'
import Home from './Pages/Homepage/Home/Home'
import Footer from './Pages/Shared_pages/Navbar/Footer/Footer'

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
