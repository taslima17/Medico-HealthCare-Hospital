import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className=" bg-dark text-white p-2 mt-5"> <div className="d-flex flex-lg-nowrap flex-wrap " style={{ textAlign: "left" }}>
            <div className="about p-5">
                <h6>A LITTLE SOMETHING ABOUT US</h6>
                <p>Mayo Clinic is a nonprofit organization and proceeds from Web advertising help support our mission. Mayo Clinic does not endorse any of the third party products and services advertised.</p>
                <button>Learn More</button>
            </div>
            <div className="navigation p-5">
                <h6>NAVIGATION</h6>

                <Link to="/home" style={{ textDecoration: "none", color: "white" }}>Home</Link><br />
                <Link to="/teams" style={{ textDecoration: "none", color: "white" }}>Our Teams</Link><br />

                <Link to="/Apointment" style={{ textDecoration: "none", color: "white" }}> Apointment</Link><br />
                <Link to="/faq" style={{ textDecoration: "none", color: "white" }}> Faq</Link>

            </div>

            <div className="buy p-5">
                <h6>BUY NOW</h6>
                <p>If you come all the way down here, you probably really like our MentalPress theme. To save you all the troubles finding where to buy this theme, we have a solution for that too. Just click the button below.</p>
                <button>Buy now for $100</button>

            </div>

        </div>
            <p>Copy right 2021 Taslima Rumky</p>
        </div>
    );
};

export default Footer;