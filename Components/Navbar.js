import React from 'react';
import './style.css';
import {Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='main'>

<div className='navbar' style={{backgroundColor:'Black', color:'white'}}>
    <ul>
      <li> 

      <Link to="/" className='nav-link'>Home</Link>
      </li>
      <li>   <Link to="/about" className='nav-link'>About Us</Link></li>

      <li className='search-bar'><input type="text" placeholder="Search..." style={{backgroundColor:'White', color:'Black'}}/>
            <button type="submit">Search</button> </li>
      <li className='cart'>   <Link to="/cart" className='nav-link'>Cart</Link></li>


    
          

      </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
