import './heroimgstyle.scss'
import thirdheroimg from '../assets/thirdheroimg.jpg'

import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='hero-img' src={thirdheroimg} alt="hero" />
            </div>
            <div className='content'>
                <p>HI I'M A FREELANCER.</p>
                <h1>REACT DEVELOPER</h1>
                <div>
                    <Link to="project"><button className='btn-bg'>PROJECTS</button></Link>&nbsp;&nbsp;
                    <Link to="contact"><button className='btn-light'>CONTACT</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg