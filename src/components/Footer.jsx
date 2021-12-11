import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import facebookIcon from "../images/facebook-icon.svg";
import twitterIcon from "../images/twitter.svg";
import linkedInIcon from "../images/linkedin.svg";
import redditIcon from "../images/reddit.svg";

const Footer = () => {

    return (
        <>
            <footer class="footer_main">
 
                <div class="footer-left">

                <h3>The world of React</h3>

                <p class="footer-links">
                <NavLink to="/">Home</NavLink>
                &gt;
                <NavLink to="/about">About</NavLink>
                &gt;
                <NavLink to="/contact">Contact</NavLink>
                </p>

                
                </div>

                <div class="footer-center">

                <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Barishal Sadar</span> Barishal, BD</p>
                </div>

                <div>
                <i class="fa fa-phone"></i>
                <p>01703836627</p>
                </div>

                <div>
                <i class="fa fa-envelope"></i>
                <p><NavLink to="#">abdullahturky.com</NavLink></p>
                </div>

                </div>

                <div class="footer-right">

                <p class="footer-company-about">
                <span>Social Links</span>
                Welcome, Ipsum is simply dummy text of the printing 
                </p>

                <div class="footer-icons">

                <NavLink to="#" className="mx-2">
                    <img src={facebookIcon} className="img-fluid" alt="facebook"/>    
                </NavLink>
                <NavLink to="#" className="mx-2">
                    <img src={twitterIcon} className="img-fluid" alt="facebook"/>    
                </NavLink>
                <NavLink to="#" className="mx-2">
                    <img src={linkedInIcon} className="img-fluid" alt="facebook"/>    
                </NavLink>
                <NavLink to="#" className="mx-2">
                    <img src={redditIcon} className="img-fluid" alt="facebook"/>    
                </NavLink>
                

                </div>

                </div>

                </footer>  
        </>
        )

}

export default Footer;