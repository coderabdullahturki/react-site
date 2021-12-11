import React from "react";
import { NavLink } from "react-router-dom";
import "./card.css";

const Card = () => {

    return (
        <>
        <div className="card_cover">
            <div className="card-container">
            <main className="page-content">
            <div className="card">
                <div className="content">
                    <h2 className="title">Html</h2>
                    <p className="copy">Tempor augue ut mollis sagittis ante mollis cursus sodales nonummy.</p><NavLink className="btn-lg btn-light" to="/contact">Book Now</NavLink>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Css</h2>
                    <p className="copy">Tempor augue ut mollis sagittis ante mollis cursus sodales nonummy.</p><NavLink className="btn-lg btn-light" to="/contact">Book Now</NavLink>
                </div>
            </div>
            <div class="card">
                <div className="content">
                    <h2 className="title">Javascript</h2>
                    <p className="copy">Tempor augue ut mollis sagittis ante mollis cursus sodales nonummy.</p><NavLink className="btn-lg btn-light" to="/contact">Book Now</NavLink>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">React</h2>
                    <p className="copy">Tempor augue ut mollis sagittis ante mollis cursus sodales nonummy.</p><NavLink className="btn-lg btn-light" to="/contact">Book Now</NavLink>
                </div>
            </div>
        </main>
    </div>
        
</div>
        
           
        </>
        )

};

export default Card;

