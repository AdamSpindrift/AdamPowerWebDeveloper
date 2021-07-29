import React from "react";
import {navigate, A} from "hookrouter";
 
 
 
function Nav() {

    const navDesign = () => {
        navigate("/design");
    };

    const navEquipmentHire = () => {
        navigate("/equipmenthire");
    };

    const navContact = () => {
        navigate("/contact");
    };

    const navHome = () => {
        navigate("/");
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
                        <form onSubmit={navDesign}>
                            <button className="navigation__link" type ="submit">Lighting Director</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navEquipmentHire}>
                            <button className="navigation__link navigation__link-left1" type ="submit">Console Operator</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navEquipmentHire}>
                            <button className="navigation__link navigation__link-right1" type ="submit">System Design</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navEquipmentHire}>
                            <button className="navigation__link navigation__link-left2" type ="submit">Equipment Hire</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <a href="/#sebwilliams" className="navigation__link navigation__link-right2">
							Seb Williams
						</a>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navContact}>
                            <button className="navigation__link navigation__link-left3" type ="submit">Get In Touch</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <a href="https://www.studioscan.co.uk" className="navigation__link navigation__link-right3">
							Studio Scan
						</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/#blog" className="navigation__link navigation__link-left4">
							Thoughts
						</a>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navEquipmentHire}>
                            <button className="navigation__link navigation__link-right4" type ="submit">History</button>
                        </form>
                    </li>
                    <li className="navigation__item">
                        <form onSubmit={navHome}>
                            <button className="navigation__link navigation__link-left5" type ="submit">Home</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </nav>
        
    );
};

export default Nav;