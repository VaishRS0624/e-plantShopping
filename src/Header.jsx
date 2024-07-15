import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total number of items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header">
      <div className="brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Paradise Nursery</h3>
          <p>Where Green Meets Serenity</p>
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="24" width="24">
            <rect width="156" height="156" fill="none"></rect>
            <circle cx="80" cy="216" r="12"></circle>
            <circle cx="184" cy="216" r="12"></circle>
            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
          </svg>
          <span className="cart-item-count">{totalItems}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
