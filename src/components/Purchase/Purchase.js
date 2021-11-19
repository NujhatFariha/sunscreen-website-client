import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const { purchaseId } = useParams()
    const { user } = useAuth()
    const [specificProduct, setSpecificProduct] = useState({})
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [quantity, setQuantity] = useState('')


    useEffect(() => {
        fetch(`https://obscure-reaches-95115.herokuapp.com/purchase/${purchaseId}`)
            .then(result => result.json())
            .then(data => setSpecificProduct(data))
    }, [purchaseId])



    const handleAddress = e => {
        setAddress(e.target.value)
    }

    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }

    const handleQuantity = e => {
        setQuantity(e.target.value)
    }

    const handlePlaceOrder = (e) => {
        const userName = user.displayName
        const userEmail = user.email
        const orderStatus = 'Pending'

        const { name, image, price, description } = specificProduct

        const data = { userName, userEmail, address, phoneNumber, name, image, price, description, quantity, status: orderStatus }

        fetch('https://obscure-reaches-95115.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order Added.")
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className='container'>
                <div className="row m-5 g-5">
                    <div className="col-sm-6 border w-50">
                        <div className="card border-white p-2">
                            <div className="card-body">
                                <h4 className="card-title mb-4"><u>{specificProduct.name}</u></h4>
                                <img className='img-fluid rounded mb-3 p-5' src={specificProduct.image} alt="" />
                                <h3 className='mb-3 fw-bold'>Price: ${specificProduct.price}</h3>
                                <p className="card-text fs-5">{specificProduct.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card border-white">
                            <div className="card-body mt-4">
                                <h3>Place Your Order Here</h3>
                            </div>

                            <div className="rounded-3">
                                <h6 className='text-start'>Name:</h6>
                                <input type="text" readOnly value={user.displayName} className='form-control mb-4' />

                                <h6 className='text-start'>Email:</h6>
                                <input type="email" readOnly value={user.email} className='form-control mb-4' />

                                <h6 id='hello' className='text-start'>address:</h6>
                                <input onChange={handleAddress} type="text" className='form-control mb-4' />

                                <h6 className='text-start'>Phone Number:</h6>
                                <input onChange={handlePhoneNumber} type="number" className='form-control mb-4' />

                                <h6 className='text-start'>Quantity:</h6>
                                <input onChange={handleQuantity} type="number" className='form-control mb-4' />

                                <button onClick={handlePlaceOrder} className='btn btn-dark'>Place Order</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;