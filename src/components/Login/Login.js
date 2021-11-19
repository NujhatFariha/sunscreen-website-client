import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import Footer from '../Home/Footer/Footer';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, signInUsingGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'


    const userEmail = e => {
        setEmail(e.target.value)
    }

    const userPassword = e => {
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        login(email, password, history, redirect_uri)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(history, redirect_uri)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-25 mt-5 pt-3 pb-5 mb-5'>
                <h3 className='pb-3 text-center fw-bold' style={{ color: 'rgb(173, 102, 255)' }}>Please Login here</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-success">Email address</label>
                        <input type="email" placeholder="Enter Email" onChange={userEmail} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-success">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={userPassword} className="form-control" />
                    </div>

                    <button type="button" onClick={handleLogin} className="btn btn-secondary mt-2" style={{ width: '150px' }}>Submit</button>

                    <h5 className='fw-normal pb-3 pt-4'>Are you New Here? You have to <Link to='/register' className="fw-bold"> Register </Link> First if you want to Login</h5>

                    <span className='p-3'>Or</span>
                    <br />
                    <h5 className="fs-4" style={{ color: 'rgb(57, 115, 172)' }}>Sign in with Google</h5>

                    <button type="button" onClick={handleGoogleLogin} className="btn btn-success mt-2">Google Sign In</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;