import React from "react";
import { NavLink } from "react-router-dom";
import './contact.css';


const Contact = (props) => {
    return (
        <div>
            <div class="container">  
  <form id="contact">
    <h3>Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" class="submit" type="submit" id="contact-submit">Send</button>
    </fieldset>
    <p class="copyright"> <NavLink to="/" className="btn-dark btn-sm">Go Back</NavLink></p>
  </form>
</div>  
        </div>)
}



export default Contact;