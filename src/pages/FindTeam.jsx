import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaMapMarkedAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FindTeam = () => {
      const [activeSport, setActiveSport] = useState('all'); // default: show all
    
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
  const displayedPositions = activeSport === 'all'
    ? filteredPositions
    : positions.filter(pos => pos.sport === activeSport);

    return (
        <div>
             <div className="container mx-auto">
            {/* <div className="flex justify-center items-center text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Find your desired Team</h2>
                <p className="text-slate-600">Latest opportunities waiting for you</p>
              </motion.div>
           
            </div> */}
            <div className="flex justify-center items-center mb-10">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <h2 className="text-3xl font-bold mb-2">
      <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
        Find your Team
      </span>
    </h2>
    {/* Gradient border under the text */}
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"></div>
    <p className="text-gray-600 mt-1">Latest opportunities waiting for you</p>
  </motion.div>
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
        </div>
    );
};

export default FindTeam;