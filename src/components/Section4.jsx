import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'John Doe', position: 'CEO', image: 'public/rayul-_M6gy9oHgII-unsplash.jpg' },
  { name: 'Jane Smith', position: 'CTO', image: 'public/steve-ding-T42j_xLOqw0-unsplash.jpg' },
  { name: 'Mike Johnson', position: 'COO', image: 'public/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg' },
];

const achievements = [
  'Awarded Best Startup 2023',
  'Expanded to 10 Countries',
  'Reached 1 Million Users',
];

const statistics = [
  { label: 'Clients', value: '500+' },
  { label: 'Projects', value: '300+' },
  { label: 'Countries', value: '10+' },
];

const testimonials = [
  {
    text: "This company has transformed our business. Their solutions are top-notch!",
    author: "Anna Brown",
  },
  {
    text: "The team is incredibly supportive and innovative.",
    author: "Mark Wilson",
  },
];

const Section4 = () => {
  return (
    <section id="section4" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            We are dedicated to delivering the best business solutions to help your company thrive.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission & Vision</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to empower businesses with innovative solutions that drive success. We envision a world where technology is the cornerstone of growth and efficiency.
          </p>
        </motion.div>

        {/* Team Members Section with Border Shine and Hover Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-md group">
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-800 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Achievements</h3>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index} className="mb-2">{achievement}</li>
            ))}
          </ul>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
          <div className="flex justify-around">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-100 p-8 rounded-lg shadow-md mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">What Our Clients Say</h3>
          <div className="swiper-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-gray-700">
                <p className="italic mb-2">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Section4;
