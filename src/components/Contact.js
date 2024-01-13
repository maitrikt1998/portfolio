import React from "react";

const Contact = () => {
    return (
        <div className="container-fluid bg-light py-3" id="contact">
            <div className="row">
                <div className="col-12 text-center">
                    <p>
                        <a href="https://www.linkedin.com/in/maitrik-thakkar-157720201" target="_blank" className="social-link" rel="noopener noreferrer"><i className="fab fa-linkedin mx-3 fa-2x"></i></a>
                        <a href="https://github.com/maitrikt1998" target="_blank" className="social-link" rel="noopener noreferrer"><i className="fab fa-github mx-3 fa-2x"></i></a>
                        <a href="https://medium.com/@maitrikt1998" target="_blank" className="social-link" rel="noopener noreferrer"><i className="fab fa-medium mx-3 fa-2x"></i></a>
                    </p>
                    <p className="text-muted">Copyright © 2024. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;