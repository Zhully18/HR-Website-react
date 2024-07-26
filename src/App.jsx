import React from 'react'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Step'
import Services from './Components/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Services />
      <About />
    </div>
  )
}

export default App