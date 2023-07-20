import React from 'react';
import '../styles/Header.css'
import { Link } from "react-router-dom";
import Search from './Search';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='header-main'>
            <div className="flex flex-col">
                <div className="md:border-b py-2">
                    <div className="lg:container mx-auto px-4 lg:px-0">
                        <div className="flex justify-between gap-2">
                            <Link to="/" className='logo'><img className="ml-2" src={logo} alt="Logo" style={{height: "40px"}}/></Link>
                            <Search/>
                            <nav className='hidden md:flex justify-end'>
                                <ul className="flex justify-between items-center">
                                    <li className="w-auto"><Link to="/">Log In / Sign Up</Link></li>
                                    <li className="w-full"><Link to="/contact" className='descarga_la_app'>Download the app</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header