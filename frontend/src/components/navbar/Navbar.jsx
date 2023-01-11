import React, { useState } from 'react';
import './Navbar.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
//import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  }
  return (
    <div className={scroll ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <AiOutlineSearch className='icon' />
            <span>KID</span>
            <IoNotificationsSharp className='icon' />
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="profile">
                <IoMdArrowDropdown className='icon' />
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
