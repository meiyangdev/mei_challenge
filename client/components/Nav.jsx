import React from 'react'

function Nav() {
  return (
    <>
    <div className='navbar'>
      <nav className='navhome'>
      <a href="#home">Home</a>
      </nav>
     
      <nav className='menu'>
      <ul>
        <li><a href="#about">Services</a></li>
        <li><a href="#contact">News</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>  
     
      
    </div>

    </>
  )
}
export default Nav