import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import About from '../Components/About'

const Home = () => {
  return (
    <div className='bg-primary'>
        <Navbar />
        {/* <Header /> */}
        <About />
    </div>
  )
}

export default Home