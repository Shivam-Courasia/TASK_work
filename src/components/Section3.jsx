import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Static Data for Director Cards
const directorCards = [
  { image: 'public/director1.jpg', name: 'John Doe', position: 'CEO', text: 'Lorem ipsum dolor sit amet.' },
  { image: 'public/director2.jpg', name: 'Jane Smith', position: 'CTO', text: 'Consectetur adipiscing elit.' },
  { image: 'public/director3.jpg', name: 'Emily Johnson', position: 'CFO', text: 'Sed do eiusmod tempor incididunt.' },
  { image: 'public/director4.jpg', name: 'Michael Brown', position: 'COO', text: 'Ut enim ad minim veniam.' },
  { image: 'public/director5.jpg', name: 'Sarah Davis', position: 'CMO', text: 'Quis nostrud exercitation ullamco laboris.' },

];
const Card = ({ image, name, position, text }) => (
  <div className="relative bg-white rounded-lg shadow-lg p-4 w-64 flex-shrink-0 border border-gray-300 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
    <div className="absolute inset-0 rounded-lg border-4 border-transparent bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"></div>
    <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-lg" />
    <div className="relative mt-4">
      <h3 className="text-lg font-extrabold text-gray-900">{name}</h3>
      <p className="text-gray-600">{position}</p>
      <p className="mt-2 text-gray-800">{text}</p>
    </div>
  </div>
);

// Main Section3 Component
const Section3 = () => {
  const [reportIndex, setReportIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Start animation for sliding effect
    controls.start({
      x: [-1000, 0],
      transition: { duration: 20, repeat: Infinity, repeatType: 'loop' }
    });

    // Change report every 3 seconds
    const intervalId = setInterval(() => {
      setReportIndex((prevIndex) => (prevIndex + 1) % directorCards.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <section id="section3" className="p-8 bg-gray-100 text-center relative overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 shadow-md mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        Meet Our Directors
      </motion.h2>

      <motion.div
        className="relative flex space-x-4 mt-8 overflow-hidden"
        animate={controls}
      >
        {directorCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            position={card.position}
            text={card.text}
          />
        ))}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="relative w-full">
          <div className="progress-bar-background">
            <div className="progress-bar-running"></div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Director's Report</h3>
        <p className="mt-2 text-gray-700 font-semibold">{directorCards[reportIndex]?.text || 'Loading...'}</p>
      </div>
    </section>
  );
};

export default Section3;
