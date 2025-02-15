import React, { useState } from 'react'
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import home from "./home.css"
const Home = () => {


    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    const variant1 = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
    };






    return (
    <div className='home_container'>

        <div className='home_photo'>
                <img className='home_photo2' src={require("../../images/home_photo2.jpg")} alt=''/>
        </div>
    
        <div className='home_background'>
            <div>
            <h1>We've amazing Skills for Teaching</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ut ullamcorper sit
            adipiscing sagittis mi nisl risus. Eget ultrices risus magna
            hendrerit tortor.</p>


            <div className='home_background_btns'>
                <button className="home_background_btn1">
                    Explore Courses
                </button>

                <button className='home_background_btn2'>
                    Read More
                </button>
            </div>
            </div>

        </div>



<div className='choose_and_flexible'>

<div className='why_choose_us'>
    <div>
<h1>Why Choose Us</h1>
<p>High-quality, affordable education accessible to 
    all learners seeking excellence without financial 
    burden, ensuring accessibility and excellence.</p>
    </div>

    <div>
        <img src={require("../../images/list_4472515.png")} alt=''/>
    </div>
</div>

<div className='flexible'>
<img src={require("../../images/time-management.png")} alt=''/>
<h1>Flexible Learning</h1>
<p>Explore any interest or trending topic. 
    Take prerequisite courses to build a foundation, 
    then advance your skills with specialized training and projects.</p>
</div>

<div className='flexible'>
<img src={require("../../images/brainstorming.png")} alt=''/>
<h1>Learn Anything</h1>
<p>Explore any interest or trending topic. 
    Take prerequisite courses to build a foundation, 
    then advance your skills with specialized training and projects.</p>
</div>

<div className='flexible'>
<img src={require("../../images/dollar.png")} alt=''/>
<h1>Affordable Pricing</h1>
<p>Explore any interest or trending topic. 
    Take prerequisite courses to build a foundation, 
    then advance your skills with specialized training and projects.</p>
</div>

<div className='flexible'>
<img src={require("../../images/certification.png")} alt=''/>
<h1>Certification</h1>
<p>Explore any interest or trending topic. 
    Take prerequisite courses to build a foundation, 
    then advance your skills with specialized training and projects.</p>
</div>
</div>
        

        <div className='home_courses'>


    <h1>Our Latest Course</h1>
    <div className='home_courses_div'>
        <ul className='courses_ul'>
            <li>All Courses</li>
            <li>Project Manager</li>
            <li>UX/UI Design</li>
            <li>Digital Market</li>
            <li>Data Scientist</li>
            <li>Front-End Development</li>
        </ul>
    <button>
        Explore All Courses
    </button>
</div>

        </div>


        <div className='home_teacher'>
            <h1>
            Our Experienced Teacher
            </h1>
            <div className='home_teacher_div'>
                <p>Our Experienced Teachers: Leaders in Education Bringing
                Knowledge to Life.</p>
                <button>See All Teacher</button>
            </div>


<div className='teachers'>

<div className="card" style={{width: '18rem'}}>
<motion.div
initial="hidden"
animate={inView1 ? 'visible' : 'hidden'}
variants={variant1}
transition={{ duration: 0.6 }}>
<div ref={ref1}  className="teacher_social">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li>
        </div>
        </motion.div>
    <img style={{marginLeft:"50px"}} src={require("../../images/teacher1-Photoroom.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h2 className="card-title">Victoria Bennett</h2>
    <h4 className="card-text">Professor</h4>
    </div>
</div>

<div className="card" style={{width: '18rem'}}>
<motion.div
initial="hidden"
animate={inView1 ? 'visible' : 'hidden'}
variants={variant1}
transition={{ duration: 0.6 }}>
<div ref={ref1}  className="teacher_social">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li>
        </div>
        </motion.div>
    <img style={{width:"250px",marginLeft:"20px"}} src={require("../../images/teacher_-Photoroom.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h2 className="card-title">Victoria Bennett</h2>
    <h4 className="card-text">Professor</h4>
    </div>
</div>

<div className="card" style={{width: '18rem'}}>
<motion.div
initial="hidden"
animate={inView1 ? 'visible' : 'hidden'}
variants={variant1}
transition={{ duration: 0.6 }}>
<div ref={ref1}  className="teacher_social">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li>
        </div>
        </motion.div>
    <img style={{width:"455px",marginLeft:"-80px"}} src={require("../../images/teacher_2-Photoroom.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h2 className="card-title">Victoria Bennett</h2>
    <h4 className="card-text">Professor</h4>
    </div>
</div>

<div className="card" style={{width: '18rem'}}>
<motion.div
initial="hidden"
animate={inView1 ? 'visible' : 'hidden'}
variants={variant1}
transition={{ duration: 0.6 }}>
<div ref={ref1}  className="teacher_social">
            <li><i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-linkedin-in"></i></li>
            <li><i class="fa-brands fa-x-twitter"></i></li>
        </div>
        </motion.div>
    <img style={{width:"305px",marginLeft:"-10px"}} src={require("../../images/teacher_15-Photoroom.png")} className="card-img-top" alt="..." />
    <div className="card-body">
    <h2 className="card-title">Victoria Bennett</h2>
    <h4 className="card-text">Professor</h4>
    </div>
</div>


</div>
        </div>


<div className='student_say'>
<h1>What Our Students Say</h1>
<p>Insights from Our Students: Hear Their Experiences and
Success Stories.</p>
</div>


<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">

<img style={{width:"400px",margin:"auto 20px" ,height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student1.png")} alt=''/>
<img style={{width:"400px",margin:"auto 20px", height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student2.png")} alt=''/>
<img style={{width:"400px",margin:"auto 20px" ,height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student3.png")} alt=''/>
        </div>
        
        <div class="carousel-item">
        <img style={{width:"400px",margin:"auto 20px", height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student1.png")} alt=''/>
        <img style={{width:"400px",margin:"auto 20px" ,height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student2.png")} alt=''/>
        <img style={{width:"400px",margin:"auto 20px", height:"300px",border:"1px solid darkgray",borderRadius:"20px"}} src={require("../../images/student3.png")} alt=''/>
        </div>
        
        
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span style={{position:"relative",marginRight:"-2300px",marginTop:"-420px",backgroundColor:"rgb(7, 53, 99)"}} class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
    </button>



    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span style={{marginTop:"-420px",backgroundColor:"rgb(7, 53, 99)"}}  class="carousel-control-next-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>


<div className='home_blog'>
<h1>Insights and Articles</h1>
<div className='home_blog_div'>
<p>Our Experienced Teachers: Leaders in Education Bringing
Knowledge to Life.</p>
<button>See All Teacher</button>
</div>

<div className='home_blog_container'>

<div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>

</div>


    </div>
    )
}

export default Home




