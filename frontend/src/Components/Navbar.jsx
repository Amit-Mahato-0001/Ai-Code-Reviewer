import { Link } from "react-router-dom"
import groq from "../assets/groq-logo.webp"

function Navbar() {

  return (

    <div
      className="w-full h-20 flex items-center justify-between px-8 
      bg-opacity-20 backdrop-blur-xl absolute top-0 left-0 z-50"
    >
      {/* Logo */}
        <img
          src={groq}
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
    </div>

  )
  
}

export default Navbar