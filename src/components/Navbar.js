import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="fixed-top"> 
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <div className="container">
                        <div><a href="/" className="navbar-brand"><i className="fas fa-film"></i></a></div>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarText">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div id="navbarText" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
