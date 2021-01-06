import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FirebaseContext } from './Firebase'

const RegisterAcc = props => {

    const firebase = useContext(FirebaseContext);

    const data = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        firebase.signupUser(email, password)
        .then(user => {
            setLoginData({...data});
            props.history.push('/login');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { username, email, password, confirmPassword } = loginData;

    const btn = username === '' || email === '' || password === '' || password !== confirmPassword
    ? <button className="subbtn" disabled>Sign Up</button> : <button className="subbtn">Sign Up</button>

    const errorMsg = error !== '' && <span>{error.message}</span>

    return (
        <div className="container pt-5">
            <div className="pt-5 box">

                {errorMsg}

                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox form-group">
                        <input onChange={handleChange} type="text" value={username} id="username" required autoComplete="off"/>
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="inputBox form-group">
                        <input onChange={handleChange} type="email" value={email} id="email" required autoComplete="off"/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="inputBox form-group">
                        <input onChange={handleChange} type="password" value={password} id="password" required autoComplete="off"/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="inputBox form-group">
                        <input onChange={handleChange} type="password" value={confirmPassword} id="confirmPassword" required autoComplete="off"/>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>

                    {btn}

                    <p className="toLogin">Already have an account? <NavLink to="/login">Login here.</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterAcc
