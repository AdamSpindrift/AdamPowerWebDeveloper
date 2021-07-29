import React, { useEffect } from "react";
import Nav from "./generic/Nav";

function ContactThanks () {

    useEffect(() => {
        const thanks = true;
    });
    

    return (
        <div id="contact-thanks" className="contact">
            <Nav />
            <div className="contact__container">
                
                <div className="absCenter">
                    <h5 className="contact__thanks">Thanks for your message</h5>
                    <h5 className="contact__thanks margin-top-small">We will be in touch shortly</h5>
                </div>

            </div>
        </div>
    )
};

export default ContactThanks;