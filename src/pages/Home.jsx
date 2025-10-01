import PreFooter from '../components/PreFooter';
import React, { useState, useEffect } from 'react';
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
  FaUser,
  FaUsers

} from 'react-icons/fa';

import { IoIosTennisball } from "react-icons/io";
import { FaBaseball, FaBasketball, FaVolleyball } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';

import {

  FaQuoteLeft, FaGlobe,
  FaLightbulb, FaHandshake,
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import {FaSearch } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
//player details
import zayed from '../assets/players/zayed.jpg'

const Home = () => {
  const [activeSport, setActiveSport] = useState('all'); // default: show all
  const [scrolled, setScrolled] = useState(false);
  const [positions, setPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  // new things
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Mock data - 20 players with team names
  const playerData = [
    { id: 1, name: 'zayed khan', team: ' CS Mokingbard', image: zayed },
    { id: 2, name: 'Marcus Chen', team: 'Dragon Warriors', image: '/api/placeholder/150/150' },
    { id: 3, name: 'Sarah Williams', team: 'Phoenix United', image: '/api/placeholder/150/150' },
    { id: 4, name: 'James Rodriguez', team: 'Eagle FC', image: '/api/placeholder/150/150' },
    { id: 5, name: 'Lisa Thompson', team: 'Tiger FC', image: '/api/placeholder/150/150' },
    { id: 6, name: 'Mike Peterson', team: 'Lion Hearts', image: '/api/placeholder/150/150' },
    { id: 7, name: 'Emma Davis', team: 'Shark FC', image: '/api/placeholder/150/150' },
    { id: 8, name: 'David Wilson', team: 'Bear United', image: '/api/placeholder/150/150' },
    { id: 9, name: 'Sophia Martinez', team: 'Wolf Pack', image: '/api/placeholder/150/150' },
    { id: 10, name: 'Ryan Kim', team: 'Hawk FC', image: '/api/placeholder/150/150' },
    { id: 11, name: 'Olivia Brown', team: 'Panther FC', image: '/api/placeholder/150/150' },
    { id: 12, name: 'Kevin Taylor', team: 'Falcon United', image: '/api/placeholder/150/150' },
    { id: 13, name: 'Natalie Lee', team: 'Cobra FC', image: '/api/placeholder/150/150' },
    { id: 14, name: 'Chris Evans', team: 'Rhino FC', image: '/api/placeholder/150/150' },
    { id: 15, name: 'Amanda Scott', team: 'Jaguar United', image: '/api/placeholder/150/150' },
    { id: 16, name: 'Daniel White', team: 'Scorpion FC', image: '/api/placeholder/150/150' },
    { id: 17, name: 'Jessica Hall', team: 'Viper United', image: '/api/placeholder/150/150' },
    { id: 18, name: 'Brian Clark', team: 'Puma FC', image: '/api/placeholder/150/150' },
    { id: 19, name: 'Michelle Adams', team: 'Leopard United', image: '/api/placeholder/150/150' },
    { id: 20, name: 'Jason Miller', team: 'Cheetah FC', image: '/api/placeholder/150/150' }
  ];
  useEffect(() => {
    // Shuffle players randomly
    const shuffledPlayers = [...playerData].sort(() => Math.random() - 0.5);
    setPlayers(shuffledPlayers);
    setFilteredPlayers(shuffledPlayers);
  }, []);

  useEffect(() => {
    const filtered = players.filter(player =>
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  }, [searchTerm, players]);


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
        duration: 0.5
      }
    }
  };


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

                    <div className=" flex justify-between items-center mb-6">
                      <span className=" bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-100 px-3 py-1 rounded-full text-sm ">
                        {position.depertment}
                      </span>
                      {/* <span className="text-slate-400 text-sm">  {formatTime(position.time)}</span> */}
                      <div className="flex items-center text-slate-400 text-sm">
                        <FaClock className="mr-2 text-indigo-500" />
                        <span>{formatTime(position.time)}</span>
                      </div>
                    </div>

                    <Link to={`/apply/${position._id}`}>
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
        {/* Player who find team */}
        <section className=" bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400  py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500 rounded-full">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Players Who Found Teams
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Discover inspiring stories of athletes who found their perfect teams through our platform
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FaTrophy className="text-yellow-400 text-2xl" />
                    <div>
                      <div className="text-3xl font-bold text-white">500+</div>
                      <div className="text-gray-300">Successful Matches</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FaUsers className="text-green-400 text-2xl" />
                    <div>
                      <div className="text-3xl font-bold text-white">150+</div>
                      <div className="text-gray-300">Active Teams</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FaStar className="text-blue-400 text-2xl" />
                    <div>
                      <div className="text-3xl font-bold text-white">4.9/5</div>
                      <div className="text-gray-300">Success Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search players or teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-14"
                />
                <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-300 text-xl" />
              </div>
            </motion.div>

            {/* Swiper Carousel */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
              >
                {filteredPlayers.map((player) => (
                  <SwiperSlide key={player.id} className="max-w-xs">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-white">
                            <FaUsers className="text-white text-sm" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {player.name}
                        </h3>
                        <div className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                          <p className="text-blue-300 font-semibold text-sm">
                            {player.team}
                          </p>
                        </div>
                        <div className="mt-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-sm" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Scrolling Players Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Recent Success Stories
              </h3>

              <div className="flex space-x-8 animate-scroll">
                {[...players, ...players].map((player, index) => (
                  <motion.div
                    key={`${player.id}-${index}`}
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 flex flex-col items-center text-center min-w-[120px]"
                  >
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 mb-2"
                    />
                    <p className="text-white text-sm font-medium truncate w-full">
                      {player.name}
                    </p>
                    <p className="text-blue-300 text-xs truncate w-full">
                      {player.team}
                    </p>
                  </motion.div>
                ))}
              </div>

              <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-120px * 10)); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Find Your Team?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of players who have found their perfect match through our platform
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>

      </div>

      <PreFooter />
    </div>
  );
};

export default Home;