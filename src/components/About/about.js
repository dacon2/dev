import './about.css'

import React from 'react'

const About = () => {
  return (
    <div className='main-Cont'>
        <h1 className='specific'>About Us</h1>
        <div className="mini-Container">
            <p>
            Welcome to our React project! We are a team of developers who are passionate about creating intuitive and efficient web applications using cutting-edge technologies. Our team is composed of individuals with diverse backgrounds and experiences, but we all share the same goal of delivering high-quality software that meets our clients' needs.
            </p>
        </div>
        <div className="mini-Container">
            <p>
            Our development process is highly collaborative, and we believe that communication is key to delivering successful projects. We work closely with our clients to understand their requirements and ensure that we are meeting their expectations every step of the way. We are committed to delivering projects on time and within budget, without compromising on quality.
            </p>
        </div>
        <div className="mini-Container">
            <p>
            At our core, we believe that technology can be used to make the world a better place. That's why we are constantly exploring new ways to apply our skills to solve complex problems and create innovative solutions. We are always learning and growing, and we are excited to be a part of the vibrant React community.
            </p>
        </div>

        <div className='last-text-div'>
            we are here to serve you 😀 👍
        </div>

    <div className="map">

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14024.645830202722!2d77.297967!3d28.50478965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684144446175!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}

export default About