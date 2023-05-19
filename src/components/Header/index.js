import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contactus'
  }
 
]

const Header = () => {
  return (
    <header className="body-font shadow-lg" style={{backgroundImage:"linear-gradient(90deg, rgba(247,246,254,1) 0%, rgba(43,42,48,1) 0%, rgba(39,39,41,1) 5%, rgba(28,28,29,1) 19%)",color:"#fff",fontWeight:700,fontSize:"1rem"}}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>

          <span className="mx-3 text-xl" style={{backgroundImage:"linear-gradient(90deg, rgba(247,246,254,1) 0%, rgba(231,230,240,1) 0%, rgba(71,71,198,1) 24%, rgba(50,50,236,1) 96%)",webkitBackgroundClip:"text",webkitTextFillColor:"transparent"}}>Tailblocks e-commerce</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </Link>
        <nav className="md:ml-auto md:mr-12 flex flex-wrap items-center text-base justify-center" >
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 forHover">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Go to Cart
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header