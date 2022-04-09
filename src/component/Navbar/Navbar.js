import React from "react";
import './style.css'
import Gaanalogo from "./Image/Gaanalogo.jpg"
const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="threeDot">
                    <div className="Dot"></div>
                    <div className="Dot"></div>
                    <div className="Dot"></div>
                </div>

                <div>
                    <img className="logo" src={Gaanalogo} alt="no image" />
                </div>

                <input className="input" placeholder="Search Artists, Songs,Albums" />
                <div className="Premium">
                    <div className="PremiumBtn One">Go Add Free</div>
                    <div className="PremiumBtn Two">Get Ganna Plus</div>
                </div>

                <div id="moon"></div>

                <div className="login">
                    Login in/Sign up
                </div>
            </div>
        </>
    )
}

export default Navbar;