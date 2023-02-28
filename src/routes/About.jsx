import React from 'react'
import AboutContent from '../components/AboutContent'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar />
    <Heroimg2 heading="About." text="Some facts about me." />
    <AboutContent />
    </>
  )
}

export default About