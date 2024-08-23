import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Projects from '../Components/Projects'
import Cv from '../Components/Cv'
import Footer from '../Components/Footer'
import Thank from '../Components/Thank'

const Home = () => {
  return (
    <div className='bg-primary'>
        <Navbar />
        {/* <Header /> */}
        <About />
        <Experience />
        <Projects/>
        <Cv />
        <Thank />
        <Footer/>
    </div>
  )
}

export default Home