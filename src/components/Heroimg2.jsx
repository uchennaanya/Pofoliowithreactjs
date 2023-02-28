import React from 'react'
import './heroimg2style.scss'
import secheroimg from '../assets/secheroimg.jpg'


const Heroimg2 = ({heading, text}) => {
  return (
    <div className='hero-img2'>
        <div className='heading'>
            <img className='heroImg' src={secheroimg} alt="Second Hero img" />
        </div>
        <div className="content">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Heroimg2