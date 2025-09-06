import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFutbol, FaUserPlus, FaLeaf, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 flex flex-col ">
      
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
          {/* Left Column - Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="w-80 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <FaFutbol className="text-white text-4xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Find Your Perfect Team</h2>
                    <p className="text-slate-600 mb-6">Connect with players and teams that match your skills and ambitions</p>
                    <div className="flex justify-center space-x-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h2>
                <p className="text-slate-500">Sign in to your SportConnect account</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4"
                    placeholder="Email address"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 pr-12 p-4"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-slate-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-500 hover:text-blue-600">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Login
                  </motion.button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-slate-500 text-sm">
                  Don't have an account?{' '}
                  <Link to='/register' className="text-blue-500 font-medium hover:text-blue-600">
                    Create one now
                  </Link>
                </p>
              </div>

              {/* Premium badge */}
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200"
              >
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <FaCrown className="text-amber-500" />
                </div>
                <p className="text-sm text-amber-700">
                  <span className="font-semibold">Premium Feature:</span> Advanced team matching
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Floating elements for visual interest */}
      <div className="hidden lg:block fixed bottom-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden lg:block fixed top-20 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Footer */}
      {/* <footer className="container mx-auto px-4 py-6 text-center text-slate-500 text-sm">
        <p>© 2023 SportConnect. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-500">Terms</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Help</a>
        </div>
      </footer> */}
    </div>
  );
};

export default Login;