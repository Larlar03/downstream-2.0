import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='home_container'>
            <main className='home_main dark-gradient'>
                <h1 className='home_heading'>
                    <span className='heading_white'>down</span>
                    <span className='heading_blue'>Stream</span>
                </h1>
                {/* Links */}
                <div className='home_nav'>
                    <Link to='/signup' className='home_nav_link'>
                        Sign up
                    </Link>
                    <Link to='/search' className='home_nav_link'>
                        <span className='mx-5 my-0 h1'>
                            <i className='bi bi-play-circle'></i>
                        </span>
                    </Link>
                    <Link to='/login' className='home_nav_link'>
                        Log In
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
