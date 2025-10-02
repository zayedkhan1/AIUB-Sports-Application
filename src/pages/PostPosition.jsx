
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser, FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt, FaClock,
  FaVolleyballBall, FaFootballBall, FaBasketballBall, FaFutbol, FaChess,
  FaTrophy, FaUsers, FaRunning, FaSwimmer, FaTableTennis
} from "react-icons/fa";
import { FaVolleyball, FaCircleCheck } from "react-icons/fa6";

const PostPosition = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/sports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);

        reset();
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Failed to post position.");
      }
    } catch (error) {
      console.error("Error posting position:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sportsOptions = [
    { value: "football", label: "Football", icon: FaFutbol, color: "text-green-500" },
    { value: "basketball", label: "Basketball", icon: FaBasketballBall, color: "text-orange-500" },
    { value: "volleyball", label: "Volleyball", icon: FaVolleyball, color: "text-blue-500" },
    { value: "chess", label: "Chess", icon: FaChess, color: "text-purple-500" },
    { value: "swimming", label: "Swimming", icon: FaSwimmer, color: "text-cyan-500" },
    { value: "pool", label: "Pool", icon: FaTableTennis, color: "text-red-500" },
    { value: "running", label: "Running", icon: FaRunning, color: "text-emerald-500" },
    { value: "other", label: "Other Sports", icon: FaTrophy, color: "text-yellow-500" }
  ];

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4 py-8">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <FaCircleCheck className="text-xl" />
              <span className="font-semibold">Position Posted Successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Create Sports Opportunity
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill in the details below to post a new sports position and find the perfect talent for your team
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

              {/* Grid Layout for Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Position Title */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Position Title *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg z-10" />
                    <input
                      type="text"
                      placeholder="e.g., Team Captain, Coach, Player"
                      {...register("title", { required: "Position title is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.title
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500 group-hover:border-blue-300"
                        } focus:ring-4 focus:ring-blue-200 focus:outline-none`}
                    />
                  </div>
                  {errors.title && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.title.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Team Name */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Team/Organization *
                  </label>
                  <div className="relative">
                    <FaUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 text-lg z-10" />
                    <input
                      type="text"
                      placeholder="Enter team or organization name"
                      {...register("team", { required: "Team name is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.team
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500 group-hover:border-purple-300"
                        } focus:ring-4 focus:ring-purple-200 focus:outline-none`}
                    />
                  </div>
                  {errors.team && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.team.message}
                    </motion.p>
                  )}
                </motion.div>
                {/* Reqruter email */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Team/Organization *
                  </label>
                  <div className="relative">
                    <FaUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500 text-lg z-10" />
                    <input
                      type="email"
                      placeholder="Enter team or requter email"
                      {...register("reqruter", { required: "Team or reqruter email is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.reqruter
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-purple-500 group-hover:border-purple-300"
                        } focus:ring-4 focus:ring-purple-200 focus:outline-none`}
                    />
                  </div>
                  {errors.reqruter && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.reqruter.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Sport Selection */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Sport Type *
                  </label>
                  <div className="relative">
                    <FaTrophy className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-lg z-10" />
                    <select
                      {...register("sport", { required: "Please select a sport" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none ${errors.sport
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500 group-hover:border-blue-300"
                        } focus:ring-4 focus:ring-blue-200 focus:outline-none`}
                    >
                      <option value="">Select a Sport</option>
                      {sportsOptions.map((sport) => (
                        <option key={sport.value} value={sport.value}>
                          {sport.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </div>
                  </div>
                  {errors.sport && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.sport.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Location *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 text-lg z-10" />
                    <input
                      type="text"
                      placeholder="City, State or Venue"
                      {...register("location", { required: "Location is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.location
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500 group-hover:border-green-300"
                        } focus:ring-4 focus:ring-green-200 focus:outline-none`}
                    />
                  </div>
                  {errors.location && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.location.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Depertment */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Depertment*
                  </label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg z-10" />
                    <select
                      {...register("depertment", { required: "Please select a depertment" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none ${errors.depertment
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-yellow-500 group-hover:border-yellow-300"
                        } focus:ring-4 focus:ring-yellow-200 focus:outline-none`}
                    >
                      <option value="">Select Depertment</option>
                      <option value="CSE">CSE 🟢</option>
                      <option value="EEE">EEE 🟡</option>
                      <option value="LLB">LLB 🔴</option>
                      <option value="English">English🔴</option>
                      <option value="Social Science">Social science 🟢</option>
                      <option value="Social Science">All</option>

                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </div>
                  </div>
                  {errors.depertment && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.depertment.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Date & Time Row */}
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Application Deadline *
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 text-lg z-10" />
                    <input
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.date
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-pink-500 group-hover:border-pink-300"
                        } focus:ring-4 focus:ring-pink-200 focus:outline-none`}
                    />
                  </div>
                  {errors.date && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.date.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Time *
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-lg z-10" />
                    <input
                      type="time"
                      {...register("time", { required: "Time is required" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 ${errors.time
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-indigo-500 group-hover:border-indigo-300"
                        } focus:ring-4 focus:ring-indigo-200 focus:outline-none`}
                    />
                  </div>
                  {errors.time && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.time.message}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={itemVariants} className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    Skill Level *
                  </label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg z-10" />
                    <select
                      {...register("level", { required: "Please select a skill level" })}
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 appearance-none ${errors.level
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-yellow-500 group-hover:border-yellow-300"
                        } focus:ring-4 focus:ring-yellow-200 focus:outline-none`}
                    >
                      <option value="">Select Experience Level</option>
                      <option value="Beginner">Beginner 🟢</option>
                      <option value="Intermediate">Intermediate 🟡</option>
                      <option value="Advanced">Advanced 🔴</option>
                      <option value="Professional">Professional ⭐</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </div>
                  </div>
                  {errors.level && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 mt-2 text-sm flex items-center gap-1"
                    >
                      {errors.level.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Description - Full Width */}
              <motion.div variants={itemVariants} className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  Position Description *
                </label>
                <textarea
                  placeholder="Describe the position, requirements, responsibilities, and what you're looking for in a candidate..."
                  {...register("description", { required: "Description is required" })}
                  className={`w-full px-4 py-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none ${errors.description
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-blue-500 group-hover:border-blue-300"
                    } focus:ring-4 focus:ring-blue-200 focus:outline-none`}
                  rows={5}
                />
                {errors.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 mt-2 text-sm flex items-center gap-1"
                  >
                    {errors.description.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl hover:from-blue-700 hover:to-purple-700'
                    } relative overflow-hidden group`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Posting Position...
                      </>
                    ) : (
                      <>
                        <FaTrophy className="text-lg" />
                        Post Position
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
          Your position will be reviewed and visible to athletes within 24 hours
        </motion.p>
      </motion.div>
    </div>
  );
};

export default PostPosition;