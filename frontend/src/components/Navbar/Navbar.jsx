/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {

    const [menu, setMenu] = useState("Home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""} >Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a>
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
                <button  onClick={()=>setShowLogin(true)}>Sign in</button>

            </div>
        </div>
    )
}

export default Navbar
