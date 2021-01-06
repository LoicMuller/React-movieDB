import React, { useState, useContext } from 'react'
import { FirebaseContext } from './Firebase'
import { NavLink } from 'react-router-dom'

const ForgotPass = props => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Check your ${email} email adress to change your password`);
            setEmail('');

            setTimeout(() => {
                props.history.push('/login')
            }, 5000)
        })
        .catch(error => {
            setError(error);
            setEmail('');
        })
    }

    const disabled = email === '';

    return (
        <div className="container pt-5">
            <div className="pt-5 box">

                {
                    success && <span style={{
                        border: '1px solid green',
                        background: 'green',
                        color: '#ffffff'
                    }}
                    >
                        {success}
                    </span>
                }

                {error && <span>{error.message}</span>}

                <h2>Forgot Password ?</h2>
                <form onSubmit={handleSubmit}>

                    <div className="inputBox">
                        <input onChange={e => setEmail(e.target.value)} 
                        value={email} type="email" required autoComplete="off"/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <button disabled={disabled} type="submit" className="subbtn">Recover</button>
                </form>
                <div className="mt-3 text">
                <p className="toLogin">Already have an account? <NavLink to="/login">Login here.</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
