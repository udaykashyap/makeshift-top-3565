import React from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          
            <Dropdown/>
          
        </li>
        <li className="nav-item">
          <a href="/cart" className="nav-link">
            Cart
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-link">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar