import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">BSNSI</h2>
          <p className="mt-2 text-gray-400">
            Your Trusted Business Solutions Partner
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF size={26} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={26} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p>Contact us at:</p>
          <p className="text-blue-400">info@business.com</p>
          <p className="text-blue-400">+91 234 567 8900</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        <p>&copy; 2024 BSNSI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
