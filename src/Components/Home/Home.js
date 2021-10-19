import React from 'react';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Faq></Faq>
        </div>
    );
};

export default Home;