import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logoAndNav'>
        <img className='logo' src='.\src\assets\Images\logo.png'/>
        <NavbarItem text='Home'/>
        <NavbarItem text='About Us'/>
        <NavbarItem text='Wishlist'/>
        <NavbarItem text='Blog'/>
        <NavbarItem text='Contact Us'/>
      </div>
      <div className='LoginSignUp'>
        <button className='login'>Log in</button>
        <button className='signUp'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
