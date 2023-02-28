import React from 'react'
import { Link } from 'react-router-dom'
import react1 from '../assets/react1.jpg'
import youtube from '../assets/youtube.jpg'

import './aboutcontentstyle.scss'

const AboutContent = () => {
    return (
        <>
        <div className="about">
            <div className="left">
                <h2>Who am I</h2>
                <p>I am a professional web developer with proven track record of exellence</p>
                <Link to="/contact"><button className='btn-bg'>CONTACT ME</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={youtube} alt="Pc keyboard" className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react1} alt="Pc keyboard" className='img' />
                    </div>
                </div>
            </div>
        </div>
        </>)
}

export default AboutContent