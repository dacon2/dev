import React from 'react'
import heroImg from '../../assets/heroImg.jpg'
import '../../index.css'
import { Link } from 'react-router-dom'

const Hero = () => {

  const scrollFunc = () =>{
    window.screen.width < 800 ?  window.scrollTo(0,2300) :  window.scrollTo(0,1500)
  }


  return (
    <section className="text-600 body-font mt-20" style={{backgroundImage:"linear-gradient(180deg, rgba(50,50,236,1) 19%, rgba(117,117,231,1) 52%, rgba(231,230,240,1) 99%)"}}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900" style={{color:'#fff'}}>Get the product now before
            <br className="hidden lg:inline-block"/>they get sold
          </h1>
          <p className="mb-8 leading-relaxed" style={{color:'#fff'}}>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">

      
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>scrollFunc()}>Show All Products</button>
       

      <Link to='/contactus'>
            <button className="ml-4 inline-flex text-gray-100 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Contact Us</button>
      </Link>
     
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded rounded-full" alt="hero" src={heroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero