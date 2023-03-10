import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='home_container'>
            <main className='home gradient--dark'>
                <h1 className='home__heading'>
                    <span className='home__heading--wt'>down</span>
                    <span className='home__heading--bt'>Stream</span>
                </h1>
                {/* Links */}
                <div className='home__nav'>
                    <Link to='/signup' className='home__nav--link'>
                        Sign Up
                    </Link>
                    <Link to='/search' className='home__nav--link'>
                        <span className='mx-5 my-0 h1'>
                            <i className='bi bi-play-circle'></i>
                        </span>
                    </Link>
                    <Link to='/login' className='home__nav--link'>
                        Log In
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
