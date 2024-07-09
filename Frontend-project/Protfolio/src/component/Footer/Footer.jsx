import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold">Yeasin Miah</h2>
            <p>Web Developer | Designer</p>
          </div>
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a
              href="https://www.facebook.com/ysm.yasin.5"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-200 hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="text-center lg:text-right">
            <p className="mb-2">Contact me:</p>
            <p>Email: yeasinmiah1272001@gmail.com</p>
            <p>Phone: 01910-255376</p>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
