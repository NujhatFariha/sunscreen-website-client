import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import Navbar from '../../Home/Navbar/Navbar';

const DashBoardNav = () => {
    const { admin } = useAuth()



    return (
        <div className="mt-3">
            {
                admin ?

                    <div>
                        <Navbar />
                        <div className='d-flex justify-content-between p-2 mt-3' style={{ backgroundColor: 'rgb(134, 45, 134)' }}>
                            <div className='d-flex flex-wrap mx-auto'>
                                <Link className="text-white text-decoration-none" to='/manageallProducts'>
                                    <h5 className='ms-3 me-3 fs-5' style={{ cursor: 'pointer' }}>Manage All Products</h5>
                                </Link>
                                <Link className="text-white text-decoration-none" to='/addproduct'>
                                    <h5 className='ms-3 me-3 fs-5 ' style={{ cursor: 'pointer' }}>Add Product</h5>
                                </Link>
                                <Link className="text-white text-decoration-none" to='/manageorders'>
                                    <h5 className='ms-3 me-3 fs-5 ' style={{ cursor: 'pointer' }}>Manage Orders</h5>
                                </Link>
                                <Link className="text-white text-decoration-none" to='/makeadmin'>
                                    <h5 className='ms-3 me-3 fs-5 ' style={{ cursor: 'pointer' }}>Make Admin</h5>
                                </Link>
                            </div>
                        </div>
                    </div>


                    :

                    <div className='d-flex justify-content-between p-2' style={{ backgroundColor: 'rgb(134, 45, 134)' }}>
                        <div className='d-flex flex-wrap mx-auto'>
                            <Link className="text-white text-decoration-none" to='/pay'>
                                <h5 className='ms-3 me-3 fs-5' style={{ cursor: 'pointer' }}>Pay</h5>
                            </Link>
                            <Link className="text-white text-decoration-none" to='/myOrders'>
                                <h5 className='ms-3 me-3 fs-5 ' style={{ cursor: 'pointer' }}>My Orders</h5>
                            </Link>
                            <Link className="text-white text-decoration-none" to='/review'>
                                <h5 className='ms-3 me-3 fs-5 ' style={{ cursor: 'pointer' }}>Review</h5>
                            </Link>

                        </div>
                    </div>



            }



        </div>
    );
};

export default DashBoardNav;