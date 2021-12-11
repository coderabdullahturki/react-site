import React from "react";
// import { NavLink } from "react-router-dom";
import asset from "../images/smile.svg";
// import Button from "../src/components/Button";
import Header from "./Header";

const Home = () => {
    return (
        <> 
           
           <Header name="Welcome to The Home Page" imgsrc={asset} visit="/about" text="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." buttonName="Explore Me"/>

        </>)
}

export default Home;