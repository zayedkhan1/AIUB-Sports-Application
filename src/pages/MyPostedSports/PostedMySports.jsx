import { useContext, useEffect, useState } from "react";
import { sportsCreatedByPromise } from "../../utlities/myapplicatoinAPI";
import { AuthContext } from "../../context/AuthProvider";
import {
  FiEye,
  FiEdit2,
  FiTrash2,
  FiBriefcase,
  FiMail,
  FiUsers,
  FiChevronRight,
  FiSearch,
  FiFilter,
  FiUser
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiX, FiPhone, FiAward, } from 'react-icons/fi';
import { IoCloseCircleOutline } from "react-icons/io5"; // Close icon




const PostedMySports = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  const [selectedApplicants, setSelectedApplicants] = useState(null);



  const handleApplicants = async (application) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/applications/bySport/${application._id}`);
      const data = await res.json();
      setSelectedApplicants(data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };


  useEffect(() => {
    if (!user?.email) return;

    sportsCreatedByPromise(user.email)
      .then((data) => {
        setApplications(data);
        setFilteredApplications(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user?.email]);

  useEffect(() => {
    const filtered = applications.filter(app =>
      app.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.team?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApplications(filtered);
  }, [searchTerm, applications]);

  const handleEdit = (application) => {
    console.log("Edit application:", application);
    // Add your edit logic here
  };

  const handleDelete = (application) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      console.log("Delete application:", application);
      // Add your delete logic here
    }
  };

  const handleView = (application) => {
    console.log("View application:", application);
    // Add your view logic here
  };

  // Your existing loading component remains the same
  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg pattern-blue-500 pattern-opacity-30 w-full h-full"></div>
        </div>
      </div>

      {/* Main loading card */}
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center space-y-8">
          {/* Premium 3D spinner */}
          <div className="relative">
            {/* Outer orbit */}
            <div className="w-24 h-24 border-4 border-gray-700 rounded-full animate-spin-slow">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-400/30"></div>
            </div>

            {/* Middle orbit */}
            <div className="absolute top-3 left-3 w-18 h-18 border-3 border-purple-500/50 rounded-full animate-spin-reverse">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 shadow-lg shadow-purple-400/30"></div>
            </div>

            {/* Inner core */}
            <div className="absolute top-6 left-6 w-12 h-12">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-inner shadow-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
            </div>

            {/* Floating center dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
          </div>

          {/* Animated text */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Securing Access
            </h2>
            <p className="text-gray-300 text-sm font-light">
              Verifying your credentials...
            </p>
          </div>

          {/* Animated progress bar */}
          <div className="w-64 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress">
              <div className="w-10 h-full bg-white/20 animate-shimmer rounded-full"></div>
            </div>
          </div>

          {/* Animated dots */}
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs font-light">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Secure Connection • Encrypted</span>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Posted Applications
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track and manage all your Posted applications in one place
          </p>
        </motion.div>

        {/* Stats and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Stats Card */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="p-3 bg-blue-500 rounded-lg">
                <FiBriefcase className="text-white text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md w-full">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Applications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {filteredApplications.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiBriefcase className="text-gray-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {applications.length === 0 ? "No Applications Yet" : "No Results Found"}
              </h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                {applications.length === 0
                  ? "Start applying to jobs and track your applications here."
                  : "Try adjusting your search terms to find what you're looking for."}
              </p>
            </div>
          ) : (
            <>
              {/* Table Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 border-b border-gray-200 hidden md:grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <span className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Position</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Team</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Deadline</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Applicant Info</span>
                </div>
                <div className="col-span-3  text-center">
                  <span className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Actions</span>
                </div>
              </div>

              {/* Applications List */}
              <AnimatePresence>
                {filteredApplications.map((application, index) => (
                  <motion.div
                    key={application._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-all duration-300"
                  >
                    <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
                      {/* Position Info */}
                      <div className="md:col-span-3">
                        <div className="flex items-center gap-1">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FiBriefcase className="text-blue-600 text-lg" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">
                              {application.title || "No Title"}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">Posted recently</p>
                          </div>
                        </div>
                      </div>

                      {/* Team Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-1 text-gray-700">
                          <FiUsers className="text-gray-400" />
                          <span className="font-medium">{application.team || "No Team"}</span>
                        </div>
                      </div>

                      {/* Email Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-1 text-gray-700">
                          <MdOutlineDateRange className="text-gray-400" />
                          <span className="text-sm md:text-base truncate">{application.date}</span>
                        </div>
                      </div>

                      {/* applicant info */}
                      <div className="md:col-span-3">
                        {/* View Applicants Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleApplicants(application)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 flex items-center justify-center gap-1 rounded-lg transition-colors duration-200 group"
                          title="View Applicants"
                        >
                          <FiUsers className="text-lg group-hover:scale-110 transition-transform duration-200" /> Applicant info
                        </motion.button>
                        {selectedApplicants && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center">
                            {/* Backdrop with fade-in animation */}
                            <div
                              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                              onClick={() => setSelectedApplicants(null)}
                            />

                            {/* Modal container with slide-up animation */}
                            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-10 duration-300">

                              {/* Header */}
                              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-white/20 rounded-lg">
                                      <FiUsers className="text-2xl" />
                                    </div>
                                    <div>
                                      <h2 className="text-2xl font-bold">Applicants</h2>
                                      <p className="text-indigo-100 flex items-center space-x-1">
                                        <span>Total Applicants: {selectedApplicants.totalApplicants}</span>
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => setSelectedApplicants(null)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                                  >
                                    <FiX className="text-xl" />
                                  </button>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-6">
                                {/* Applicants List */}
                                <div className="space-y-4 max-h-96 overflow-y-auto p-4 ">
                                  {selectedApplicants.applicants.map((applicant, idx) => (
                                    <div
                                      key={idx}
                                      className="group p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all hover:scale-102 duration-300 "
                                    >
                                      <div className="flex items-start justify-between">
                                        <ul className="flex-1 min-w-0">
                                          <li className="flex items-center space-x-3 mb-2">
                                            <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                                              <FiUser className="text-indigo-600" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                              <h3 className="font-semibold text-gray-900 truncate">
                                                {applicant.name}
                                              </h3>
                                              <div className="flex flex-wrap gap-4 mt-2">
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                  <FiMail className="text-gray-400" />
                                                  <span className="truncate max-w-[150px]">{applicant.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                  <FiPhone className="text-gray-400" />
                                                  <span>{applicant.phone}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                  <FiAward className="text-gray-400" />
                                                  <span>Teams ID: {applicant.teams_id}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="flex items-center space-x-2 ml-4">
                                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                            {applicant.team}
                                          </span>
                                          <FiChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                  <button
                                    onClick={() => setSelectedApplicants(null)}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Actions */}
                      <div className="md:col-span-1">
                        <div className="flex items-center justify-end gap-1">
                          {/* View Button */}
                          <Link to={`/apply/${application._id}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleView(application)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
                              title="View Details"
                            >
                              <FiEye className="text-lg group-hover:scale-110 transition-transform duration-200" />
                            </motion.button>
                          </Link>


                          {/* Edit Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleEdit(application)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 group"
                            title="Edit Application"
                          >
                            <FiEdit2 className="text-lg group-hover:scale-110 transition-transform duration-200" />
                          </motion.button>

                          {/* Delete Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDelete(application)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
                            title="Delete Application"
                          >
                            <FiTrash2 className="text-lg group-hover:scale-110 transition-transform duration-200" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Mobile View Arrow */}
                      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
                        <FiChevronRight className="text-gray-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </>
          )}
        </motion.div>

        {/* Footer Stats */}
        {filteredApplications.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-600 text-sm">
              Showing <span className="font-semibold">{filteredApplications.length}</span> of{" "}
              <span className="font-semibold">{applications.length}</span> applications
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PostedMySports;



