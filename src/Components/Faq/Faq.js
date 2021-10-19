import React from 'react';


import Questions from './Questions';


const Faq = () => {


    return (
        <div className="p-5">
            <div>
                <h1 className="w-50 pb-3 mx-auto" style={{ borderBottom: "5px solid blue" }}>Frequently Asked Questions</h1>
                <p className="px-lg-5 py-3 my-3 mx-lg-5 fs-5">There are many ways you can support Mayo Clinic, and gifts of all sizes make a difference. Your tax-deductible gift will help us continue to inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research. You may make a gift or pledge to any area of Mayo Clinic.</p>
            </div>
            <Questions></Questions>
        </div>
    );
};

export default Faq;