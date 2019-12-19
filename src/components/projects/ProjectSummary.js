import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-2 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Title</span>
                <p>Posted by Brannon Opperman</p>
                <p className="grey-text">3rd March, 4am</p>
            </div>
        </div>
    )
}

export default ProjectSummary