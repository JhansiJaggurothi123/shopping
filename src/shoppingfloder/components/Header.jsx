import React from 'react'
const Header = () => {
  return (
    <div className='Header-section'>
      <div className='left'>
        <div className="title"><h2>ShoppingMall</h2></div>
      </div>
      <div className='center'>
      <ul>
        <li>Women</li>
        <li>Men</li>
        <li>Children</li>
        <li>Beauty</li>
      </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='Search...'/>
      </div>
      <div className='right'>
        <div className="sign-in">
        Sign In/Sign Up
        </div>
        <div className="cart">Cart</div>
      </div>
    </div>
  )
}

export default Header
