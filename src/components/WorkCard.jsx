import React from 'react'

import './workcardstyle.scss'

import { Link } from 'react-router-dom'


const WorkCard = ({ imgsrc, title, text, view }) => {
    return (
        <>
            <div className="project-card">
                <img src={imgsrc} alt="Projects img" />
                <h2 className="project-title">
                    {title}
                </h2>
                <div className="project-detail">
                    <p>{text}</p>
                    <div className="pro-btn">
                        <button className='btn-bg'>
                            <Link to={view}>View</Link>
                        </button>
                        <button className='btn-bg'>
                            <Link to="/">Source</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>)
}

export default WorkCard