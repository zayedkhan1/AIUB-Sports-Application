import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFutbol, FaUsers, FaTrophy, FaHeart,
  FaArrowRight, FaQuoteLeft, FaGlobe,
  FaLightbulb, FaHandshake, FaStar,
  FaUserFriends,
  FaPlay
} from 'react-icons/fa';
import indoorgames from '../assets/images/aiubIndoorgames.png'

const AboutUs = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800">
      {/* Header Section */}

      {/* Header Section */}
      <section className=" flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 pt-20 pb-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="pattern-grid-lg pattern-blue-500 pattern-opacity-30 w-full h-full"></div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
              initial={{
                y: Math.random() * 100,
                x: Math.random() * 100
              }}
              animate={{
                y: [null, Math.random() * 100 - 50],
                x: [null, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Content - Now on Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden ">
                <img
                  src={indoorgames}
                  alt="SportConnect Community"
                  className="w-150 h-150 rounded-3xl  transform hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">🏆</div>
                    <div className="text-sm font-semibold">Champions</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">⚡</div>
                    <div className="text-sm font-semibold">Active</div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            </motion.div>

            {/* Text Content - Now on Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-white/80 text-sm font-medium">Revolutionizing Sports Connections</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  SportConnect
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              >
                We're on a mission to revolutionize how athletes connect, teams form, and sports communities thrive through cutting-edge technology and passionate community building.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Join Our Community
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>


            </motion.div>
          </div>
        </div>


      </section>
      {/* Misson seection */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 mb-6"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Our Vision & Purpose
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-700 leading-relaxed"
                >
                  At <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SportConnect</span>, we believe that <span className="font-medium text-slate-800">everyone should have the opportunity</span> to participate in sports, regardless of their skill level, location, or background.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-slate-700 leading-relaxed"
                >
                  We're building the world's most <span className="font-medium text-slate-800">inclusive sports platform</span> to connect athletes, teams, and organizers in a seamless ecosystem designed to remove barriers and create opportunities.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mt-12"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl px-8 py-4 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    Our Story
                    <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex items-center text-slate-700 font-semibold bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    See Open Positions
                  </span>
                  <FaArrowRight className="ml-3 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                {/* </div> */}
              </motion.div>

              {/* Stats Preview */}

            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-3xl transform rotate-1 scale-105 opacity-20 blur-sm"></div>

                {/* Main Image */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team celebrating"
                    className="w-full h-96 lg:h-[480px] object-cover mix-blend-luminosity opacity-95 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-purple-600/20"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Floating Award Card */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                      <FaTrophy className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        2023
                      </p>
                      <p className="text-slate-600 font-medium">Best Sports App</p>
                    </div>
                  </div>
                </motion.div>


                {/* Floating Element 2 */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-400 to-purple-500 text-white p-4 rounded-2xl shadow-2xl"
                >
                  <div className="text-center">
                    <p className="font-bold text-xl">#1</p>
                    <p className="text-sm opacity-90">Rated Platform</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Pattern */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Getting started with SportConnect is simple. Follow these steps to find your perfect match.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUserFriends />, title: 'Create Profile', desc: 'Build your sports profile with skills, experience, and preferences.' },
              { icon: <FaSearch />, title: 'Find Opportunities', desc: 'Browse teams and positions that match your criteria.' },
              { icon: <FaPlay />, title: 'Start Playing', desc: 'Connect with teams and start playing your favorite sports.' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Join Our Growing Community</h2>
            <p className="text-slate-600 text-lg mb-10">
              Whether you're looking to join a team, find players, or organize tournaments,
              SportConnect provides the tools and community to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl px-8 py-4 shadow-md hover:shadow-lg transition-all"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-slate-200 text-slate-800 font-medium rounded-xl px-8 py-4 hover:border-blue-500 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;