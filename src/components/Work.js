import React from 'react'

import './workcardstyle.scss'

import WorkCard from './WorkCard'
import WorkData from './WorkData'

const Work = () => {
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    {WorkData.map((data, i) => {
                        return (
                            <WorkCard
                                key={i}
                                imgsrc={data.imgsrc}
                                title={data.title}
                                text={data.text}
                                view={data.view}
                            />
                        )
                    })}
                </div>
            </div>
        </>)
}

export default Work