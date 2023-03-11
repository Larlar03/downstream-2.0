import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

function Header() {
    const hamburgerNavIcon = <i className='bi bi-list'></i>;

    return (
        <header className='sticky-top'>
            <nav className='navbar  navbar-light bg-light'>
                <a className='navbar-brand' href='/'>
                    <span className='text-purple'>down</span>
                    Stream
                </a>

                <NavDropdown title={hamburgerNavIcon} id='nav-dropdown'>
                    <Link to='/' className='dropdown-link'>
                        Home
                    </Link>
                    <Link to='/profile' className='dropdown-link'>
                        Profile
                    </Link>
                    <Link to='/search' className='dropdown-link'>
                        Search
                    </Link>
                    <Link to='/login' className='dropdown-link'>
                        Log In
                    </Link>
                    <Link to='/signup' className='dropdown-link'>
                        Sign Up
                    </Link>
                </NavDropdown>
            </nav>
        </header>
    );
}

export default Header;
