import React from 'react';
import Faq from '../Faq/Faq';

const About = () => {
    return (
        <div className="container">
            <h1 className="my-5 w-25 mx-auto pb-3" style={{ borderBottom: "5px solid blue" }}>Who we Are?</h1>
            <div className="d-flex flex-lg-nowrap flex-wrap">
                <img src="http://kamleshyadav.com/healthcare/images/about/about1.jpg" className="img-fluid" alt="" />
                <p className="px-5 fs-5">
                    Mayo Clinic is a nonprofit organization committed to clinical practice, education and research, providing expert, whole-person care to everyone who needs healing.
                    The Mayo Clinic Health System has dozens of locations in several states. Thousands of patients from around the world travel to Mayo Clinic locations, and Mayo Clinic's International Patient Offices help ensure that distance and language are not obstacles to receiving world-class care.
                    Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you've been in search of that answer for a while. We can help you get there.
                    If you're not a Mayo Clinic patient, check your public health department's website for the most complete information.
                </p>


            </div>
            <button style={{ background: "blue", color: "white", fontWeight: "600", borderRadius: "20px", padding: " 15px", border: "0", marginTop: "40px" }}>Choose Mayo Clinic For Health Care</button>
        </div>
    );
};

export default About;