import React from "react";
import { NavLink } from "react-router-dom";

// import Button from "../components/Button";

const Header = (props) => {
    return (
        <> 
            <section>
                <div id="header" className="mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 mx-auto">
                                    <div className="header-inner text-center">

                                    <div className="round-image">
                                            <img src={props.imgsrc} alt="test" className="img-fluid"/>
                                    </div>

                                        <h1 className="py-4 text-bold text-lg">{props.name}</h1>
                                        <h2 className=""><span className="bg-light p-3"> Abdullah al Turky </span> 
                                         <span className="bg-dark p-3 text-light"></span> <span className="bg-light p-3">Web Designer and Developer</span> 
                                        </h2>

                                        <p> {props.text}
                                        </p>

                                        <NavLink to={props.visit} className="btn-lg btn-dark btn-get-started">{props.buttonName}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

        </>)
}

export default Header;