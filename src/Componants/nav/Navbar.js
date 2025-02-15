import React from 'react'
import nav from "./nav.css"
const Navbar = () => {
    return (
    <div className='nav_container'>

<div className='school_name'>
<h1>MA</h1>
<p>School</p>
</div>

<div className='nav_ul'>
<ul>
    <li>HOME</li>
    <li>ABOUT</li>
    <li>COURSES</li>
    <li>BLOG</li>
    <li>TEACHERS</li>
    <li>CONTACT</li>
</ul>
</div>

<div className='nav_register'>
    <button className='btn1'>Login</button>
    <button className='btn2'>Signup</button>
</div>

    </div>
    )
}

export default Navbar