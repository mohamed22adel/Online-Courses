import React from 'react'
import footer from "./footer.css"
const Footer = () => {
    return (
    <div className='footer_container'>

<div className='footer_div_container'>

<div className='footer_web_name'>

<h1>MA SCHOOL</h1>
<p>Lorem ipsum dolor sit amet consectetur. 
    Velit interdum tellus elit diam amet eleifend suspendisse.</p>
<h4>Follow Us!</h4>
<div className='footer_social'>
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li></div>
</div>

<div className='Popular_Courses'>
<h2>Popular Courses</h2>
<p>Web Development</p>
<p>Data Science</p>
<p>Digital Marketing</p>
<p>Business Management</p>
<p>Graphic Design</p>
<p>Human Resources</p>
</div>

<div className='Quick_Links'>
<h2>Quick Links</h2>
<p>Home Page</p>
<p>About Us</p>
<p>Courses</p>
<p>Signup</p>
<p>Login</p>
<p>Contact</p>
</div>

<div className='footer_contact'>
    <h2>Contact Us</h2>
<h4><i class="fa-solid fa-phone"></i> <span>+001 153 656 989</span></h4>
<h4><i class="fa-solid fa-envelope"></i> <span>ma.school@gmail.com</span></h4>
<p>Subscribe to Our News latter</p>
<div className='footer_email'>
    <form>
<input type='email' placeholder='Enter Your Email'/>
<button type='submit'><i class="fa-solid fa-paper-plane"></i></button>
</form>
</div>
</div>

</div>

<hr style={{width:"80%",position:"relative",left:"50%",transform:"translateX(-50%)",color:"aliceblue"}}/>

<div className='footer_copyright'>
<p>&copy; 2025 All Rights reserved for MAschool</p>
</div>

    </div>
    )
}

export default Footer