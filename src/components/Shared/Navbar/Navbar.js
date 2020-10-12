import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/login">{loggedInUser.name}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" style={{ color: 'darkgrey', fontSize: '16px', fontWeight: '500' }}>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-secondary" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-secondary" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-secondary" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link mr-5 ${window.location.pathname === "/appointment" ? "text-secondary" : "text-white"}`} href="/dashboard">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link mr-5 ${window.location.pathname === "/appointment" ? "text-secondary" : "text-white"}`} href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link mr-5 ${window.location.pathname === "/appointment" ? "text-secondary" : "text-white"}`} href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;