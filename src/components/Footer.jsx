import React from 'react';
import { motion } from 'framer-motion';
import { FaFutbol, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-100 to-purple-100 text-slate-800 p-4  px-4 relative overflow-hidden">
      <div className="container mx-auto relative ">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0 flex items-center">
            © {new Date().getFullYear()} SportConnect. Made with <FaHeart className="text-rose-500 mx-1" /> for the sports community.
          </p>
          
         
        </motion.div>
      </div>
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-purple-300 opacity-40 rounded-full"></div>
      <div className="absolute top-1/4 right-16 w-4 h-4 bg-purple-300 opacity-40 rounded-full"></div>
    </footer>
  );
};

export default Footer;