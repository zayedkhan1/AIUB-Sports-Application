// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//     const {user,loading}=useContext(AuthContext);
//     const location=useLocation();
//     console.log(location);

//     if(loading){
//         return <div>Loading...</div>
//     }
//     if(user){
//         return children;
//     }else{
//         return <Navigate to="/login" state={location.pathname}></Navigate>
//     }
    
// };

// export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
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
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" state={location.pathname}></Navigate>;
    }
};

export default PrivateRoute;