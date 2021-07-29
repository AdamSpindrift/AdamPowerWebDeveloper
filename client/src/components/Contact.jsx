import React, { useState } from "react";
import { navigate } from "hookrouter";
import Nav from "./generic/Nav";
require("dotenv").config()

function Contact () {

    

    


    

    return (
        <section id="contact" className="contact">
            <Nav />
            <div className="contact__container">
                
                <h1 className="contact__heading-primary">Say Hello</h1>

                
            </div>

            
        </section>
    )
};

export default Contact;