import React, { useEffect } from "react";
import Nav from "./generic/Nav";

function ContactThanks () {

    useEffect(() => {
        const thanks = true;
    });
    

    return (
        <div id="contact-thanks" className="contact">
            <Nav />
            <div className="contact__thanks-container">
                
                <h5 className="contact__thanks">Thanks for your message</h5>
                <h5 className="contact__thanks">We will be in touch shortly</h5>

                <a href="/" class="contact__home">
                  <button className="btn btn__secondary">Home</button>
                </a>    

            </div>
            
        </div>
    )
};

export default ContactThanks;