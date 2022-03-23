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
        <li className='nav-item'>
          <a href="#about">Services</a>
        </li>
        <li className='nav-item'>
          <a href="#contact">News</a>
        </li>
        <li className='nav-item'>
          <a href="#about">About</a>
        </li>
        <li className='nav-item'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
      </div>
      </nav>  
     
      
    </div>

    </>
  )
}
export default Nav