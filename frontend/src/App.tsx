import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes as BrowserRoutes
} from 'react-router-dom';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Search from './pages/Search/Search';

function App() {
    return (
        <Router>
            <BrowserRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/search' element={<Search />} />
            </BrowserRoutes>
        </Router>
    );
}

export default App;
