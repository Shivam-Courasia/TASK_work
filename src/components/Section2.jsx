import React from 'react';
import { motion } from 'framer-motion';
import serviceImage1 from '../assets/service1.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import serviceImage4 from '../assets/service4.jpg'; // Additional image

const services = [
  {
    title: 'Web Development',
    description: 'Creating robust and responsive websites that adapt to your business needs, ensuring a strong online presence.',
    image: serviceImage1,
  },
  {
    title: 'Mobile App Development',
    description: 'Designing intuitive and engaging mobile apps that offer seamless user experiences across all devices.',
    image: serviceImage2,
  },
  {
    title: 'Cloud Solutions',
    description: 'Offering scalable cloud solutions to enhance your business efficiency, security, and agility.',
    image: serviceImage3,
  },
  {
    title: 'Digital Marketing',
    description: 'Driving growth with strategic digital marketing campaigns tailored to your target audience.',
    image: serviceImage4,
  },
];

const Section2 = () => {
  return (
    <section id="section2" className="py-20 bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gray-800 mb-10"
        >
          Our Business Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 mb-16"
        >
          We provide a comprehensive range of services designed to elevate your business to new heights.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center px-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
