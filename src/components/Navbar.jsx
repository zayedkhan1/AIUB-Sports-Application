import React, { useContext, useState } from 'react';
import { FaHome, FaUser, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import navLogo from '../assets/images/aiubsportslogo.jpg'
import { AuthContext } from '../context/AuthProvider';
const Navbar = () => {
  const {userSingOut,user}=useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut=()=>{
    userSingOut()
    .then(()=>{
      alert('LogOut Successful');
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and name */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-2">
               <img className='rounded-full' src={navLogo} alt="AIUB Sports Logo" />
              </div>
              <span className="text-white font-bold text-xl">AIUB SPORTS</span>
            </div>
          </div>

          {/* Right side: Navigation items (desktop) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300"
              >
                <FaHome className="mr-1" />
                Home
              </a>
              {
                user?
                <button
                onClick={handleLogOut}
              
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300"
              >
                <FaUser className="mr-1" />
                LogOut
              </button>
                :
                <>
                 <a
                href="/login"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300"
              >
                <FaUser className="mr-1" />
                Login
              </a>
              <a
                href="/register"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300"
              >
                <FaUserPlus className="mr-1" />
                Register
              </a>
                </>
              }


             
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="block h-6 w-6" />
              ) : (
                <FaTimes className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700">
          <a
            href="#home"
            className="text-white hover:bg-indigo-600  px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </a>
          {
            user?  <button
            onClick={handleLogOut}
            className="text-white hover:bg-indigo-600  px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaUser className="mr-2" />
            Logout
          </button>
          :
         <>
             <a
            href="#login"
            className="text-white hover:bg-indigo-600  px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaUser className="mr-2" />
            Login
          </a>
          <a
            href="#register"
            className="text-white bg-indigo-800 hover:bg-indigo-600  px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <FaUserPlus className="mr-2" />
            Register
          </a>
         </>
          }
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;