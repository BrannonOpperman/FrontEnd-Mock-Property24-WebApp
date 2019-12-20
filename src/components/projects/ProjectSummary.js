import React from 'react'
import house1 from "../../img/house1.jpeg"
import house2 from '../../img/house2.jpg'
import house3 from '../../img/house3.jpg'

const ProjectSummary = ({ project }) => {
    return (
        <div className="col">

            <div className="card horizontal hoverable">
                <div className="card-image">
                    <img src={house1} alt="A house" />
                </div>
                <div className="card-stacked">
                    <h5 className="blue-text price">R4 950 000</h5>
                    <div className="card-content">
                        <p className="type">2 Bedroom House</p>
                        <p className="area">Claremont</p>
                        <p className="blue-text">14 Townsend Way</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur, nemo natus, dignissimos qui incidunt molestias saepe facilis sequi, optio error. Unde minus sequi nam, quasi illo enim nemo molestias?</p>
                    </div>
                </div>
            </div>

            <div className="card horizontal hoverable">
                <div className="card-image">
                    <img src={house2} alt="A house" />
                </div>
                <div className="card-stacked">
                    <h5 className="blue-text price">R2 950 000</h5>
                    <div className="card-content">
                        <p className="type">Single Bedroom House</p>
                        <p className="area">Newlands</p>
                        <p className="blue-text">27 Down Avenue</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur, nemo natus, dignissimos qui incidunt molestias saepe facilis sequi, optio error. Unde minus sequi nam, quasi illo enim nemo molestias?</p>
                    </div>
                </div>
            </div>

            <div className="card horizontal hoverable">
                <div className="card-image">
                    <img src={house3} alt="A house" />
                </div>
                <div className="card-stacked">
                    <h5 className="blue-text price">R7 950 000</h5>
                    <div className="card-content">
                        <p className="type">3 Bedroom House</p>
                        <p className="area">Constantia</p>
                        <p className="blue-text">13 Westlink Drive</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur, nemo natus, dignissimos qui incidunt molestias saepe facilis sequi, optio error. Unde minus sequi nam, quasi illo enim nemo molestias?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectSummary