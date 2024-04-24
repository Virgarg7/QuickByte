/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <a href='/'>
        <img className='logo' src={assets.logo} alt="" />
      </a>
      <ul className="navbar-menu">
        <a href="/" onClick={() => setMenu("home")} className={`${menu==="home"?"active":""}`}>home</a>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu==="menu"?"active":""}`}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu==="contact"?"active":""}`}>contact us</a>
        {/* Dynamically add the "AI Recipe Bot" link */}
        <a href='/ai-chatbot' onClick={() => setMenu("ai-chatbot")} className={`${menu==="ai-chatbot"?"active":""}`}>AI Recipe Bot</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <a href='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </a>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
