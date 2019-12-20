import React from 'react'
import house1 from "../../img/house1.jpeg"

const ProjectSummary = ({ project }) => {
    return (
        <div className="col">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={house1} alt="A house" />
                </div>
                <div className="card-stacked">
                    <h5 className="blue-text price">R6 950 000</h5>
                    <div className="card-content">
                        <p className="type">3 Bedroom House</p>
                        <p className="area">Constantia</p>
                        <p className="blue-text">14 Townsend Way</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur, nemo natus, dignissimos qui incidunt molestias saepe facilis sequi, optio error. Unde minus sequi nam, quasi illo enim nemo molestias?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary