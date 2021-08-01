import React from "react";
import {navigate, A} from "hookrouter";
 
 
 
function Nav() {

    const navHome = () => {
        navigate("/");
    };

    const unCheck= () => {
        var x = document.getElementById("navi-toggle");
        x.checked=false;
        console.log("Un-Checked");
        
    };


    return (
        <nav className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="/#features" onClick={unCheck} className="navigation__link">
							Features
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/#process" onClick={unCheck} className="navigation__link">
							Process
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/#work" onClick={unCheck} className="navigation__link">
							Work
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/#tech" onClick={unCheck} className="navigation__link">
							Tech
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/#contact" onClick={unCheck} className="navigation__link">
							Contact
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/" onClick={unCheck} className="navigation__link">
							Home
						</a>
                    </li>
                </ul>
            </nav>
        </nav>
        
    );
};

export default Nav;