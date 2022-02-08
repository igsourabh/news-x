import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (<>
  <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">News </span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-white" to="/">Home</Link> 
      
       <Link className="mr-5 hover:text-white" to="/contact">Contact Us</Link>
   
    </nav>
  
  </div>
</header>
  </>)
};

export default Navbar
