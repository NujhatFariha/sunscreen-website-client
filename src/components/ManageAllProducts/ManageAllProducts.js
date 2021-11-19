import React, { useEffect, useState } from 'react';
import DashBoardNav from '../DashBoard/DashBoardNav/DashBoardNav';
import Footer from '../Home/Footer/Footer';

const ManageAllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://obscure-reaches-95115.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('You want to delete it?')

        if (proceed) {
            fetch(`https://obscure-reaches-95115.herokuapp.com/product/delete/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "apllication/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    return (
        <div>
            <DashBoardNav/>
            <div className=" mt-4 mb-5">
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className='col-sm-4'>
                            <div className="card border-white p-5">
                                <img className='img-fluid rounded-top' src={product.image} style={{ height: '450px' }} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><u>{product.name}</u></h5>
                                    <p className="card-text">{product.description}</p>
                                    <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-secondary'>Delete</button>
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

export default ManageAllProducts;