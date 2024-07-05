
import React from 'react'
import NavBar from './components/navbar/navbar'
import Landing from './components/home/landing'
import Skills from './components/about/skills'
import MyWork from './components/portfolio/work'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import"./index.css"
const App = () => {
  return (
    <div className='App'> 
      <NavBar/>
      <Landing/>
      <Skills/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
