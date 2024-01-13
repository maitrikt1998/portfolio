import React from "react";
import logo from '../logo.svg';

const Skills = () => {
    return (
        <div className="container mt-4" id="Skills">
            <h3 className="text-start">Skills</h3>
            <hr />
            <div className="row">
                <div className="col-md-3 mb-3">
                    <img src="/img/Laravel.png" alt="Laravel Logo" className="img-fluid rounded skillsimage" />
                </div>
                <div className="col-md-3 mb-3">
                    <img src={logo} alt="React Logo" className="img-fluid rounded skillsimage" />
                </div>
                <div className="col-md-3 mb-3">
                    <img src="/img/PHP.png" alt="PHP Logo" className="img-fluid rounded skillsimage" />
                </div>
                <div className="col-md-3 mb-3">
                    <img src="/img/wordpress1.png" alt="WordPress Logo" className="img-fluid rounded skillsimage" />
                </div>
            </div>
        </div>
    )
}

export default Skills;