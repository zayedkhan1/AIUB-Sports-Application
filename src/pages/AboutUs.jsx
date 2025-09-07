import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFutbol, FaUsers, FaTrophy, FaHeart, 
  FaArrowRight, FaQuoteLeft, FaGlobe, 
  FaLightbulb, FaHandshake, FaStar
} from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Former professional athlete with a passion for connecting people through sports.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Tech enthusiast with 10+ years of experience in building innovative platforms.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Sports management expert dedicated to creating inclusive sporting communities.'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning designer focused on creating seamless user experiences.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: <FaUsers /> },
    { number: '120+', label: 'Countries', icon: <FaGlobe /> },
    { number: '15,000+', label: 'Teams Formed', icon: <FaFutbol /> },
    { number: '500+', label: 'Tournaments', icon: <FaTrophy /> }
  ];

  const values = [
    {
      icon: <FaHandshake />,
      title: 'Community First',
      description: 'We believe in the power of sports to bring people together and build strong communities.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Continually pushing boundaries to create the best platform for sports enthusiasts.'
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'Driven by our love for sports and commitment to helping others enjoy them too.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SportConnect</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We're on a mission to revolutionize how athletes connect, teams form, and sports communities thrive.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl px-8 py-4 shadow-md hover:shadow-lg transition-all"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg mb-6">
                At SportConnect, we believe that everyone should have the opportunity to participate in sports, 
                regardless of their skill level, location, or background. We're building the world's most inclusive 
                sports platform to make this vision a reality.
              </p>
              <p className="text-slate-600 text-lg mb-8">
                Our platform connects athletes, teams, and organizers in a seamless ecosystem designed to 
                remove barriers and create opportunities for sports participation at all levels.
              </p>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition-all"
                >
                  Our Story
                </motion.button>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-500 font-medium"
                >
                  See Open Positions <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl overflow-hidden shadow-xl h-96">
                <img 
                  src="https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team celebrating" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <FaTrophy className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">2023</p>
                    <p className="text-slate-500">Best Sports App</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Our impact in the sports community continues to grow every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
              >
                <div className="text-4xl mb-4 flex justify-center">{stat.icon}</div>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The passionate people behind SportConnect</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-blue-500 mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Hear from athletes and teams who have found success through SportConnect</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />
                <p className="text-lg mb-6 italic">
                  "SportConnect completely transformed how our league operates. We've doubled participation and created so many new teams in just six months. The platform is intuitive and the community is incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">Alex Morgan</p>
                    <p className="text-blue-200">League Director, City Sports</p>
                  </div>
                </div>
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