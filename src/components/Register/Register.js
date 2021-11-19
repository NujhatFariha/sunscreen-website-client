import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router';
import Footer from '../Home/Footer/Footer';


const Register = () => {

    const { signInUsingGoogle, register } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const redirect_uri = '/home'

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(history, redirect_uri)
    }

    const handleRegister = () => {
        register(name, email, password, history, redirect_uri)

        if (email && password) {
            const data = { name, email, password, userStatus: 'general' }
            fetch('https://obscure-reaches-95115.herokuapp.com/addUser', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
        }
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-25 mt-3 pt-3 pb-5 mb-5'>
                <h3 className='fs-2 pb-2 text-center' style={{ color: 'rgb(172, 57, 115)' }}>Register here</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-success">Your Name</label>
                        <input type="text" placeholder="Your Name" onChange={handleName} className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-success ">Email address</label>
                        <input type="email" placeholder="Your Email" onChange={handleEmail} className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-success">Password</label>
                        <input type="password" placeholder="Your Password" onChange={handlePassword} className="form-control" required />
                    </div>

                    <button type="button" onClick={handleRegister} className="btn btn-primary mt-2" style={{ width: '150px' }}>Submit</button>
                    <br />
                    <br />
                    <h5 className=' fs-6 fw-normal pb-3 pt-2'>Already Registered? <Link to='/login'>Please Login</Link></h5>
                    <span className='p-3'>Or</span>
                    <br />
                    <button type="button" onClick={handleGoogleLogin} className="btn btn-secondary mt-2">Google Sign In</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;