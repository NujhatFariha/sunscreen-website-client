import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const { user } = useAuth()


    useEffect(() => {
        fetch('https://obscure-reaches-95115.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setMyOrders(data.filter(order => order.userName === user.displayName)))
    }, [user.displayName])

    const handleOrderDelete = (id) => {
        const confirm = window.confirm('Do you want to cancel your order?')
        if (confirm) {
            fetch(`https://obscure-reaches-95115.herokuapp.com/myorders/deleteorder/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your Order is Canceled')
                        const remainOrder = myOrders.filter(myorder => myorder._id !== id)
                        setMyOrders(remainOrder)
                    }
                })
        }
    }



    return (
        <div>
            <DashBoard></DashBoard>
            <div className="mb-5 mt-5 pt-1">
                <h4>View Your Orders here</h4>
            <div className="px-5">

                <table className="table table-hover text-start mt-5" style={{backgroundColor: 'rgb(209, 179, 255)'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myorder, i) => <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><img style={{ width: '45px', height: '40px', borderRadius: '50%' }} src={myorder.image} alt="" /></td>
                                <td>{myorder.name} {
                                    myorder.quantity > 1 ? <span className='ps-4 fs-5'>{myorder.quantity}</span> : ''
                                }</td>
                                <td>{myorder.price} $</td>
                                <td>{myorder.userEmail}</td>
                                <td>{myorder.status}</td>
                                <td><button onClick={() => handleOrderDelete(myorder._id)} className='btn btn-success btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            </div>
           
        </div>
    );
};

export default MyOrders;