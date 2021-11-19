import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <ExtraSection></ExtraSection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;