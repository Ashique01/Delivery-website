import React from 'react';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Workers from '../Workers/Workers';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Description></Description>
            <Services></Services>
            <Workers></Workers>

        </div>
    );
};

export default Home;