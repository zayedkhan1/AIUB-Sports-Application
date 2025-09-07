import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFutbol, FaUser, FaUserPlus, FaCrown, FaLeaf, FaIdCard, FaVenusMars,FaCodepen, FaCode } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
  const { createAccount } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'player',
    gender: '',
    birthDate: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering with:', formData.email, formData.password);
    createAccount(formData.email, formData.password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate('/login');
    })
    .catch(error=>{
      console.log(error.message);
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 flex flex-col">
   
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
          {/* Left Column - Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="w-80 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <FaUserPlus className="text-white text-4xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Join Our Sports Community</h2>
                    <p className="text-slate-600 mb-6">Create an account to connect with teams and players who share your passion</p>
                    <div className="flex justify-center space-x-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Registration Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h2>
                <p className="text-slate-500">Join our sports community today</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-slate-400 text-sm" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4 text-sm"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-4 text-sm"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4"
                    placeholder="Email address"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="text-slate-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
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
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="text-slate-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 pr-12 p-4"
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaIdCard className="text-slate-400" />
                    </div>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4 appearance-none"
                      required
                    >
                      <option value="player">Player</option>
                      <option value="coach">Coach</option>
                      <option value="team_manager">Team Manager</option>
                      <option value="scout">Scout</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaCodepen className="text-slate-400" />
                    </div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-4 appearance-none"
                    >
                      <option value="">Select Department</option>
                      <option value="male">CSE</option>
                      <option value="female">EEE</option>
                      <option value="other">BBA</option>
                      <option value="other">LLB</option>
                      <option value="other">English</option>
                      <option value="other">IPE</option>
                      <option value="other">Pharmacy</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="id"
                    name="University_ID"
                    value={formData.University_ID}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                    placeholder="University ID"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-600 border-slate-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
                    I agree to the <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
                  </label>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Create Account
                  </motion.button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <Link to='/login' className="text-slate-500 text-sm">
                  Already have an account?{' '}
                  <p href="#" className="text-blue-500 font-medium hover:text-blue-600">
                    Sign in
                  </p>
                </Link>
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
                  <span className="font-semibold">Premium Feature:</span> Advanced player statistics
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Floating elements for visual interest */}
      <div className="hidden lg:block fixed bottom-10 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden lg:block fixed top-20 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>
      <div className="hidden lg:block fixed top-1/3 left-1/4 w-12 h-12 bg-green-100 rounded-full opacity-40 animate-ping"></div>
      
      {/* Footer */}
      {/* <footer className="container mx-auto px-4 py-6 text-center text-slate-500 text-sm mt-8">
        <p>© 2023 SportConnect. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-500">Terms</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Help</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </footer> */}
    </div>
  );
};

export default Register;