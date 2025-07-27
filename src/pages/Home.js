import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Projects from '../Components/Projects'
import Cv from '../Components/Cv'
import Footer from '../Components/Footer'
import Thank from '../Components/Thank'
import GoToTop from '../Components/GoToTop'
import Projects2 from '../Components/Projects2'

const Home = () => {

  return (
    <div className='bg-primary snap-y snap-mandatory h-screen overflow-y-scroll'>
      <section className="snap-start scroll-smooth h-screen">
        <Navbar />
      </section>
      <section className="snap-start scroll-smooth">
        <About />
      </section>
      
      <section className="snap-start ">
        {/* <Experience /> */}
      </section>
      <section className="snap-start ">
        <Projects />
      </section>
      <section className="snap-start">
        <Cv />
      </section>
      
      <section className="snap-start ">
        {/* <Projects2 /> */}
      </section>

      <section className="snap-start">
        <Thank />
      </section>
      
      <Footer />
      <GoToTop />
    </div>
  )
}

export default Home