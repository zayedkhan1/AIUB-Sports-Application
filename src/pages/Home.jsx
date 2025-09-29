import PreFooter from '../components/PreFooter';
import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import sportspic from '../assets/images/aiubsportspic.png'
import {
  FaFutbol, FaSearch,
  FaUserFriends, FaTrophy, FaBell, FaUserCircle,
  FaArrowRight, FaPlay, FaStar, FaRegCompass,
  FaMapMarkedAlt,
  FaTableTennis,
  FaSwimmer,
  FaChess,
  FaFootballBall,
  FaClock,
  FaUser
} from 'react-icons/fa';
import { IoIosTennisball } from "react-icons/io";
import { FaBaseball, FaBasketball, FaVolleyball } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';

const Home = () => {
  const [activeSport, setActiveSport] = useState('all'); // default: show all
  const [scrolled, setScrolled] = useState(false);
  const [positions, setPositions] = useState([]);
const [filteredPositions, setFilteredPositions] = useState([]);

useEffect(() => {
  const fetchPositions = async () => {
    try {
      const res = await fetch("http://localhost:5000/sports"); // replace with your backend URL
      const data = await res.json();

      // Sort by newest first (optional)
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Keep all positions in state
     
      setPositions(sortedData);


      // Show first 9 as featured
      setFilteredPositions(sortedData.slice(0, 9));
       
    } catch (err) {
      console.error("Failed to fetch positions:", err);
    }
 
  };

  fetchPositions();
  
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sports = [
    { id: 'all', name: 'All', icon: <FaStar /> }, // Added All option
    { id: 'football', name: 'Football', icon: <FaFutbol /> },
    { id: 'basketball', name: 'Basketball', icon: <FaBasketball /> },
    { id: 'volleyball', name: 'Volleyball', icon: <FaVolleyball /> },
    { id: 'cricket', name: 'Cricket', icon: <FaTrophy /> },
    { id: 'badminton', name: 'Badminton', icon: <FaRegCompass /> },
    { id: 'chess', name: 'Chess', icon: <FaChess /> },
    { id: 'pool', name: 'Pool', icon: <FaUserFriends /> },
    { id: 'tableTennis', name: 'Table Tennis', icon: <FaTableTennis /> },
    { id: 'swimming', name: 'Swimming', icon: <FaSwimmer /> },
    { id: 'carromboard', name: 'Carromboard', icon: <FaUserFriends /> },
    { id: 'handball', name: 'Handball', icon: <FaFootballBall /> },
    { id: 'Tennis', name: 'Tennis', icon: < IoIosTennisball /> }
  ];
function formatTime(timeString) {
  // Combine with today's date
  const today = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);

  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  const diffDays = Math.floor(diff / 86400);

  if (diffDays === 0) {
    // Today → show 12-hour format
    let h = date.getHours();
    const m = date.getMinutes().toString().padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${m} ${ampm}`;
  } else if (diffDays === 1) {
    return '1 day ago';
  } else {
    return `${diffDays} days ago`;
  }
}

  // const featuredPositions = [
  //   {
  //     id: 1,
  //     title: 'Striker Needed',
  //     sport: 'football',
  //     team: 'City FC',
  //     location: 'New York',
  //     level: 'Intermediate',
  //     posted: '2 hours ago'
  //   },
   
  // ];

  // Filtering logic
  // const filteredPositions = activeSport === 'all'
  //   ? featuredPositions
  //   : featuredPositions.filter(pos => pos.sport === activeSport);
  
// Filtering based on active sport
const displayedPositions = activeSport === 'all'
  ? filteredPositions
  : positions.filter(pos => pos.sport === activeSport);



  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800">

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Find Your Perfect <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sports Team</span>
              </h1>
              <p className="text-slate-600 text-lg mb-8">
                Connect with players and teams that match your skills and ambitions. Whether you're looking to join a team or find players, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl px-8 py-4 shadow-md hover:shadow-lg transition-all"
                >
                  Find a Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-800 border border-slate-200 font-medium rounded-xl px-8 py-4 shadow-sm hover:shadow-md transition-all"
                >
                  Post a Position
                </motion.button>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-xl p-2 border border-slate-100">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={sportspic}
                    alt="Team sports"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-13 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FaUserFriends className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold">200+</p>
                    <p className="text-sm text-slate-500">Active Teams</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <FaTrophy className="text-purple-500" />
                  </div>
                  <div>
                    <p className="font-semibold">30+</p>
                    <p className="text-sm text-slate-500">Tournaments</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sports Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Sports Categories</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Find opportunities in your favorite sports. We support a wide range of sports activities.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {sports.map((sport) => (
                <motion.div
                  key={sport.id}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${activeSport === sport.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  onClick={() => setActiveSport(sport.id)}
                >
                  <div className="text-3xl mb-3 flex justify-center">{sport.icon}</div>
                  <p className="text-center font-medium">{sport.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Positions</h2>
                <p className="text-slate-600">Latest opportunities waiting for you</p>
              </motion.div>
              <motion.button
                whileHover={{ x: 5 }}
                className="hidden md:flex items-center text-blue-500 font-medium"
              >
                View all <FaArrowRight className="ml-2" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedPositions.map((position) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        {/* <h3 className="font-bold text-lg text-slate-800">{position.title}</h3> */}
                        <div className="flex items-center mb-2">
                                 <FaUser className="mr-2 text-gray-400" />
                                <h3 className="font-bold text-lg text-slate-800">{position.title}</h3>
                                  </div>
                        <p className="text-slate-500">{position.team}</p>
                      </div>
                      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {position.sport}
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600 mb-4">
                      <FaMapMarkedAlt className="mr-2 text-slate-400" />
                      <span>{position.location}</span>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm ">
                        {position.level}
                      </span>
                      {/* <span className="text-slate-400 text-sm">  {formatTime(position.time)}</span> */}
                      <div className="flex items-center text-slate-400 text-sm">
                      <FaClock className="mr-2 text-indigo-500" />
                      <span>{formatTime(position.time)}</span>
                        </div>
                    </div>

                      <Link  to={`/apply/${position._id}`}>
                       <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                      Apply Now
                    </button>
                      </Link>
                   
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Positions */}

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
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Team?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-10">Join thousands of players who have found their perfect sports match through our platform.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-medium rounded-xl px-8 py-4 shadow-md hover:shadow-lg transition-all"
                >
                  Sign Up Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white font-medium rounded-xl px-8 py-4 hover:bg-white hover:text-blue-600 transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>


      </div>

      <PreFooter />
    </div>
  );
};

export default Home;