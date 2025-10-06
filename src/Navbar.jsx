import React from 'react'

function Navbar() {
  return (
    <>
  
        <nav className="absolute top-0 left-0 right-0 bg-transparent text-white text-2xl font-bold z-50">

        <div className="flex items-center justify-between px-10 h-[60px]">
          <div className="flex-shrink-0 font-dmserif pt-4">
    <a href="App.jsx">           <p>Brew&Co.</p> </a>
          </div>
          <div className="flex-1 flex justify-center pt-4">
            <ul className="flex space-x-8">
            <li><a  href="#home"  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px]
             after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
              <li> <a href="#menu"   className="relative after:content-[''] after:absolute after:w-0 after:h-[2px]
             after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Menu</a></li>
     <li><a href="#about"   className="relative after:content-[''] after:absolute after:w-0 after:h-[2px]
             after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">About</a></li>
              <li> <a href="#contact"   className="relative after:content-[''] after:absolute after:w-0 after:h-[2px]
             after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
