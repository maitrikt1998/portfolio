import React from "react";

const About = () => {
    return (
        <div className="container-fluid shadow p-3 mb-5 bg-white rounded" id="about">
    <div className="row">
        <div className="col-md-6 mt-5">
            <img src="/img/myimg.jpg" alt="" className="img-fluid img-thumbnail rounded" style={{ width: '35%' }} />
        </div>
        <div className="col-md-6">
            <div className="p-4 text-start">
                <p className="lead">
                    I am Maitrik Thakkar, a professional software engineer from Gujarat, India. I specialize in PHP, WordPress, HTML, Laravel, and various web applications.
                </p>
                <p className="text-start">
                    <b>MCA (Software Engineering)</b> - Gujarat Technological University
                </p>
                <p className="lead">
                    I am a dedicated PHP Developer with over 2.5 years of hands-on experience, specializing in PHP, WordPress, React, and Laravel. I hold a Master of Computer Applications (MCA) degree, emphasizing my commitment to continuous learning and development in the ever-evolving field of software engineering.
                </p>
                <p  className="lead">
                    I specialize in crafting responsive web applications with a keen focus on delivering exceptional user experiences. My goal is to ensure client satisfaction through the seamless integration of functionality and design in every project.
                </p>
            </div>
        </div>
    </div>
</div>

    )
}

export default About;