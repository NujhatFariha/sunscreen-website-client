import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://obscure-reaches-95115.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    }, [])

    return (
        <div className="mt-2 pt-5">
            <h2 className="fw-bold mt-5 pt-5 pb-3">Our Top Selling Sunscreens</h2>
            <div className="container mt-4 mb-5 mt-5">
                <div className="row ms-1">
                    {  
                        products.map(product => <div key={product._id} className='col-sm-4 mb-5 pb-3'>
                            <div className="card border-white p-1">
                                <img className='img-fluid rounded-top' src={product.image} style={{height:'370px', objectFit:'cover'}} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title text-decoration-none fw-bold">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <h5 className='mb-3 fs-5 fw-bold'>Price: ${product.price}</h5>
                                    <Link to={`/purchase/${product._id}`}><button className='btn btn-secondary'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};


export default Products;