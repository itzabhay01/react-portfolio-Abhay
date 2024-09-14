import React from 'react'
import logo from "../assets/AKLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { FaSquareXTwitter} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20 filter drop-shadow-xl brightness-150 contrast-125"
          src={logo} // Replace this with the correct path to your uploaded AK logo
          alt="AK logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* GitHub */}
        <a href="https://github.com/itzabhay01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/abhay7199" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/abhay-rana-278203211" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

    </nav>



  )
}

export default Navbar