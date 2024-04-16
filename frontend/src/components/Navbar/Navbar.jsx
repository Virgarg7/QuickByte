/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {

    const [menu,setMenu] = useState("Home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className='navbar-menu'>
                <li onClick={()=>setMenu("Home")} className = {menu==="Home"?"active":""} >Home</li>
                <li onClick={()=>setMenu("Menu")} className = {menu==="Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("Mobile-app")} className = {menu==="Mobile-app"?"active":""}>Mobile-App</li>
                <li onClick={()=>setMenu("Contact-us")} className = {menu==="Contact-us"?"active":""}>Contact us</li>
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
