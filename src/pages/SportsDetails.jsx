import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaClock, 
  FaUsers, 
  FaStar,
  FaArrowRight,
  FaShare,
  FaBookmark
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import sportsImg from '../assets/images/sportsimg.jpg';
import { AuthContext } from '../context/AuthProvider';
import { set } from 'react-hook-form';

const SportsDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Simulate image loading
        const timer = setTimeout(() => setImageLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const handleApply = () => {
        // Add your apply logic here
        console.log('Applying for:', data.title);
              
        console.log('Sports data set in context:', data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 py-8 px-4">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    variants={itemVariants}
                >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Sports Opportunity
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Card */}
                <motion.div 
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
                    variants={itemVariants}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Image Section */}
                        <motion.div 
                            className="relative"
                            variants={imageVariants}
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <motion.img
                                    src={sportsImg}
                                    alt="Sports"
                                    className={`w-full h-64 lg:h-80 object-cover transition-all duration-500 ${
                                        imageLoaded ? 'blur-0 scale-100' : 'blur-md scale-105'
                                    }`}
                                    onLoad={() => setImageLoaded(true)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                                
                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        {data.level}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6">
                                <Link to={`/applysports/${data._id}`} >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleApply}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    Apply Now
                                    <FaArrowRight className="text-sm" />
                                </motion.button>
                                </Link>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                                        isBookmarked 
                                            ? 'bg-purple-100 border-purple-500 text-purple-600' 
                                            : 'bg-white border-gray-300 text-gray-600 hover:border-purple-400'
                                    }`}
                                >
                                    <FaBookmark className={isBookmarked ? 'fill-current' : ''} />
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-blue-400 transition-all duration-300"
                                >
                                    <FaShare />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Details Section */}
                        <motion.div 
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            {/* Title */}
                            <motion.div variants={itemVariants}>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    {data.title}
                                </h2>
                                <div className="flex items-center gap-2 text-lg text-gray-600">
                                    <FaUsers className="text-blue-500" />
                                    <span className="font-semibold">{data.team}</span>
                                </div>
                            </motion.div>

                            {/* Key Details Grid */}
                            <motion.div 
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                variants={itemVariants}
                            >
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <FaMapMarkerAlt className="text-blue-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Location</p>
                                        <p className="font-semibold text-gray-800">{data.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <FaStar className="text-purple-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Sport</p>
                                        <p className="font-semibold text-gray-800">{data.sport}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <FaCalendarAlt className="text-blue-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Deadline</p>
                                        <p className="font-semibold text-gray-800">{data.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <FaClock className="text-purple-600 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Posted</p>
                                        <p className="font-semibold text-gray-800">{data.time}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    Opportunity Description
                                </h3>
                                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
                                    {data.description}
                                </p>
                            </motion.div>

                           <div className='flex items-center justify-between'>
                             {/* Experience Level */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    Depertment
                                </h3>
                                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
                                    {data.depertment}
                                </div>
                            </motion.div>

                                <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    Experience Level
                                </h3>
                                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold">
                                    {data.level}
                                </div>
                            </motion.div>
                           </div>
                        </motion.div>


                        
                    </div>
                </motion.div>

                {/* Additional Info Section */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-3xl shadow-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Application Process
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Submit Application", desc: "Fill out the application form with your details" },
                            { step: "2", title: "Screening Process", desc: "Our team will review your application" },
                            { step: "3", title: "Final Selection", desc: "Successful candidates will be contacted" }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                                    {process.step}
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">{process.title}</h4>
                                <p className="text-gray-600 text-sm">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SportsDetails;