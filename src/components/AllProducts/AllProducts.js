import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://obscure-reaches-95115.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="mt-5" style={{ color: 'rgb(255, 71, 26)' }}>Our Sunscreen Collections</h1>
            <div className="container mt-4 mb-5 mt-5">
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className='col-sm-6 mb-5'>
                            <div className="card border-white p-5">
                                <img className='img-fluid rounded-top' src={product.image} style={{ height: '450px', objectFit: 'cover' }} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title fs-4 fw-bold">{product.title}</h5>
                                    <p className="card-text">{product.description.slice(0, 120)}...</p>
                                    <Link to={`/purchase/${product._id}`}><button className='btn btn-dark'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;