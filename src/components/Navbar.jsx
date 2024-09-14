import React from 'react'
import logo from "../assets/AKLogo.png"
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { FaSquareXTwitter} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    // <nav className=" mb-20 flex items-center justify- between py-6">
    //     <div className="flex flex-shrink-0 items-center">
    //       <img className="mx-2 w-10" src={logo} alt="logo" />
    //     </div>
    //     <div className='m-8 flex items-center justify-cenrer gap-4 text-2xl'>
    //       <FaGithub/>
    //       <FaInstagram/>
    //       <FaLinkedin/>
    //     </div>
    // </nav>
    // <nav className="mb-20 flex items-center justify-between py-6">
    //   <div className="flex flex-shrink-0 items-center">
    //     <img
    //       className="mx-2 w-10 filter brightness-125 saturate-150 drop-shadow-lg"
    //       src={logo}
    //       alt="logo"
    //     />
    //   </div>
    //   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    //     <FaGithub />
    //     <FaInstagram />
    //     <FaLinkedin />
    //   </div>
    // </nav>
    // <nav className="mb-20 flex items-center justify-between py-6">
    //   <div className="flex flex-shrink-0 items-center">
    //     <img
    //       className="mx-2 w-20 filter drop-shadow-xl brightness-150 contrast-125"
    //       src={logo} // Replace this with the correct path to your logo
    //       alt="logo"
    //     />
    //   </div>
    //   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    //     <FaGithub />
    //     <FaInstagram />
    //     <FaLinkedin />
    //   </div>
    // </nav>
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20 filter drop-shadow-xl brightness-150 contrast-125"
          src={logo} // Replace this with the correct path to your uploaded AK logo
          alt="AK logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </nav>



  )
}

export default Navbar