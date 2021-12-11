import React from "react";
import Header from "./Header";
import asset from "../images/smile.svg";
import Card from "./Card";

const About = () => {
    return (
        <>
            <Header name="Let's Explore The About Page" imgsrc={asset} visit="/contact" buttonName="Contact Me"/>
            
            <Card/>
            
        </>
        )
}

export default About;