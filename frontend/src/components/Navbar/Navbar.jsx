/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className='navbar-menu'>
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-App</li>
                <li>Contact us</li>
            </ul>
            <div className="navbar-right">
                {/* 1. */}
                <img src={assets.search_icon} alt="" />
                {/* 2. */}
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>

                {/* 3. */}
                <button>Sign in</button>

            </div>
        </div>
    )
}

export default Navbar
