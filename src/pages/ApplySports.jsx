import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaUsers, 
  FaClipboardList,
  FaTrophy,
  FaPaperPlane,
  FaCheckCircle,
  FaIdCard
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApplySports = () => {
    const navigate=useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    watch 
  } = useForm();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
   
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormData(data);
      setShowSuccess(true);

      reset();
      
      setTimeout(() => {
        setShowSuccess(false);
        setFormData(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
    const applicationData = {
        name: data.name,
        email: data.email,
        team: data.teamId,
        sportId: sportId,   // <-- pass the sport ID here

    
    }
      axios.post('http://localhost:5000/applications', applicationData)
      .then(response => {
        console.log('Application submitted successfully:', response.data);
        navigate('/myapplications');
    })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4 py-8">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md">
              <FaCheckCircle className="text-2xl flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Application Submitted!</h3>
                <p className="text-green-100 text-sm mt-1">
                  Thank you for applying. We'll review your application shortly.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sports Application
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Join our sports tournament and showcase your talent. Fill out the form below to apply.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Application Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <motion.div variants={itemVariants} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg z-10" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", { 
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                      errors.name 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-blue-500 group-hover:border-blue-300"
                    } focus:ring-4 focus:ring-blue-200 focus:outline-none`}
                  />
                </div>
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-sm flex items-center gap-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Team ID */}
              <motion.div variants={itemVariants} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  Team ID *
                </label>
                <div className="relative">
                  <FaIdCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 text-lg z-10" />
                  <input
                    type="text"
                    placeholder="Enter your team ID"
                    {...register("teamId", { 
                      required: "Team ID is required",
                      pattern: {
                        value: /^[A-Za-z0-9-_]+$/,
                        message: "Team ID can only contain letters, numbers, hyphens, and underscores"
                      }
                    })}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                      errors.teamId 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-purple-500 group-hover:border-purple-300"
                    } focus:ring-4 focus:ring-purple-200 focus:outline-none`}
                  />
                </div>
                {errors.teamId && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-sm flex items-center gap-1"
                  >
                    {errors.teamId.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Email and Mobile Number Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 text-lg z-10" />
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                        errors.email 
                          ? "border-red-400 focus:border-red-500" 
                          : "border-gray-200 focus:border-green-500 group-hover:border-green-300"
                      } focus:ring-4 focus:ring-green-200 focus:outline-none`}
                    />
                  </div>
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Mobile Number */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 text-lg z-10" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...register("mobile", { 
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[\+]?[1-9][\d]{0,15}$/,
                          message: "Please enter a valid mobile number"
                        }
                      })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
                        errors.mobile 
                          ? "border-red-400 focus:border-red-500" 
                          : "border-gray-200 focus:border-orange-500 group-hover:border-orange-300"
                      } focus:ring-4 focus:ring-orange-200 focus:outline-none`}
                    />
                  </div>
                  {errors.mobile && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.mobile.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Player Experience */}
              <motion.div variants={itemVariants} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  Tournament Experience *
                </label>
                <div className="relative">
                  <FaUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-lg z-10" />
                  <select
                    {...register("experience", { required: "Please select your experience level" })}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none ${
                      errors.experience 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-indigo-500 group-hover:border-indigo-300"
                    } focus:ring-4 focus:ring-indigo-200 focus:outline-none`}
                  >
                    <option value="">Select your experience</option>
                    <option value="new">New Player - First time in tournament</option>
                    <option value="experienced">Experienced - Played before in this tournament</option>
                    <option value="veteran">Veteran - Multiple tournament experiences</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    ▼
                  </div>
                </div>
                {errors.experience && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-sm flex items-center gap-1"
                  >
                    {errors.experience.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  Additional Information *
                </label>
                <div className="relative">
                  <FaClipboardList className="absolute left-4 top-4 text-cyan-500 text-lg z-10" />
                  <textarea
                    placeholder="Tell us about your sports background, achievements, why you want to join, and any other relevant information..."
                    {...register("description", { 
                      required: "Description is required",
                      minLength: {
                        value: 50,
                        message: "Description must be at least 50 characters"
                      },
                      maxLength: {
                        value: 1000,
                        message: "Description must not exceed 1000 characters"
                      }
                    })}
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none ${
                      errors.description 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-cyan-500 group-hover:border-cyan-300"
                    } focus:ring-4 focus:ring-cyan-200 focus:outline-none`}
                    rows={5}
                  />
                </div>
                {errors.description && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-sm flex items-center gap-1"
                  >
                    {errors.description.message}
                  </motion.p>
                )}
                <div className="text-right text-sm text-gray-500 mt-1">
                  {watch('description')?.length || 0}/1000 characters
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl hover:from-blue-700 hover:to-purple-700'
                  } relative overflow-hidden group`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Submit Application
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 mt-6 text-sm"
        >
          We'll contact you within 48 hours regarding your application status
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ApplySports;