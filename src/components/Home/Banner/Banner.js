import React from 'react';
import banner from '../../../images/sunscreenimg.png'
// import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center'>
            <div>
                <h1>Have You Protected Yourself<br /> from the Sun Today?</h1>
                <h5 className='mt-3 fs-5'>Protect your Beautiful Skin from harmful UV Rays.<br /> Explore our huge Sunscreen collection and <br /> choose the best Sunscreen for you. </h5>
                <Link to='/allProducts'>
                    <button className='btn btn-outline-success mt-3'>Explore ➜ </button>
                </Link>
            </div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;