import React, { useEffect } from "react";
import Nav from "./generic/Nav";

function Error () {


    return (
        <div id="contact-thanks" className="contact">
            <Nav />
            <div className="contact__thanks-container">
                
                <h5 className="contact__thanks">Something went wrong your message wasn't sent</h5>
                <h5 className="contact__thanks">please contact adam@adampower.io</h5>

                <a href="/" class="contact__home">
                  <button className="btn btn__secondary">Home</button>
                </a>    

            </div>
            
        </div>
    )
};

export default Error;