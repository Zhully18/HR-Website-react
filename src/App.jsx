import React from 'react'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Step'
import Services from './Components/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Feedback from './Components/Feedback/Feedback'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Services />
      <About />
      <Team />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}

export default App