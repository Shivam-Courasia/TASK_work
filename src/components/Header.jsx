import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const texts = [
  'Business Solution',
  'Innovation Hub',
  'Growth Partner',
  'Market Leader'
];

const RippleButton = ({ children, className, ...props }) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, show: true });

    setTimeout(() => setRipple({ ...ripple, show: false }), 500);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripple.show && (
        <span
          className="absolute bg-white opacity-30 rounded-full"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'ripple-animation 0.6s linear',
          }}
        ></span>
      )}
    </button>
  );
};

const HeaderSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      id="section1"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(/images/hero.jpg)` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo and Company Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center text-white"
        >
          <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full" />
          <h1 className="text-4xl font-bold tracking-wide">BSNSI</h1>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-white font-semibold">
          <RippleButton className="text-lg hover:text-gray-300 transition-all duration-300">
            <motion.a href="#section2" whileHover={{ scale: 1.1 }}>
              SERVICE
            </motion.a>
          </RippleButton>
          <RippleButton className="text-lg hover:text-gray-300 transition-all duration-300">
            <motion.a href="#section3" whileHover={{ scale: 1.1 }}>
              DIRECTORS
            </motion.a>
          </RippleButton>
          <RippleButton className="text-lg hover:text-gray-300 transition-all duration-300">
            <motion.a href="#section4" whileHover={{ scale: 1.1 }}>
              ABOUT US
            </motion.a>
          </RippleButton>
          <RippleButton className="text-lg hover:text-gray-300 transition-all duration-300">
            <motion.a href="/signin" whileHover={{ scale: 1.1 }}>
              SIGN IN
            </motion.a>
          </RippleButton>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
          <RippleButton className="text-3xl text-white focus:outline-none">
            &#9776;
          </RippleButton>
        </motion.div>
      </div>

      {/* Hero Section with Dynamic Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-bold leading-tight"
        >
          Welcome to <span className="text-blue-300 animate-fade">{texts[textIndex]}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-2xl"
        >
          Experience the best of our services.
        </motion.p>
        <motion.a
          href="#section2"
          className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.a>
      </div>
    </header>
  );
};

export default HeaderSection;
