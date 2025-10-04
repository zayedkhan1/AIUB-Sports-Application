import React from 'react';
import { motion } from 'framer-motion';
import { FaFutbol, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowRight } from 'react-icons/fa';
import footerLogo from '../assets/images/aiubsportslogo.jpg';
import { footer } from 'motion/react-client';
import { Link } from 'react-router-dom';
const PreFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-100 to-purple-100 text-slate-800 pt-16  px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-200 rounded-full opacity-30"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-200 rounded-full opacity-30"></div>
      
      <div className="container mx-auto relative ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-2">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
          
            <div className="flex items-center mb-6">
              <div className="h-12 w-12  rounded-xl flex items-center justify-center mr-3 ">
                {/* <FaFutbol className="text-white text-xl" /> */}
                <img className='rounded-full' src={footerLogo} alt="" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SportConnect</h2>
            </div>
          
            <p className="text-slate-600 mb-6 leading-relaxed">
              Connecting athletes with opportunities. Find your perfect team or player with our advanced matching platform.
            </p>
            <div className="flex space-x-3">
              {[FaTwitter, FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="h-10 w-10 bg-white border border-emerald-100 shadow-sm hover:shadow-md rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="text-blue-600 group-hover:text-purple-700 text-lg transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:ml-8"
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-800 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Explore
            </h3>
            <ul className="space-y-3">
              {['Find Players', 'Find Teams', 'Tournaments', 'Training Sessions', 'Sports News', 'Community Events'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }}
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="text-purple-400 mr-3 text-xs transition-all group-hover:mr-4" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-800 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Support
            </h3>
            <ul className="space-y-3">
              {['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Contact Support', 'Community Guidelines'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }}
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="text-purple-400 mr-3 text-xs transition-all group-hover:mr-4" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-slate-800 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Stay Connected
            </h3>
            
            {/* Contact Information */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-purple-200 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="text-blue-600 text-sm" />
                </div>
                <span className="text-slate-600 text-sm">123 Sports Avenue, Athlete City, AC 12345</span>
              </li>
              <li className="flex items-center">
                <div className="bg-purple-200 p-2 rounded-lg mr-3">
                  <FaPhone className="text-blue-600 text-sm" />
                </div>
                <span className="text-slate-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="bg-purple-200 p-2 rounded-lg mr-3">
                  <FaEnvelope className="text-blue-600 text-sm" />
                </div>
                <span className="text-slate-600 text-sm">info@sportconnect.com</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-slate-700">Join our newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white border border-emerald-100 text-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full shadow-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-100 my-8"></div>

        {/* Bottom Footer */}
        
      </div>

     
    </footer>
  );
};

export default PreFooter;