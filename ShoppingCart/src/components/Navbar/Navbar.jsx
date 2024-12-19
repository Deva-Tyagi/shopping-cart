import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ addCart }) => {
  const cartQuantity = addCart.length; 

  return (
    <div className="navbar">
      <div className="links">
        <Link className='shopping' to="/">Shopping</Link>
        <Link className='shopping' to="/cart">
          <FaCartShopping />
          {cartQuantity > 0 && <span className="cartQuantity">{cartQuantity}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
