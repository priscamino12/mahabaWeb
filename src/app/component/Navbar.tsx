"use client";
import React from "react";
import { FaHome, FaHeart, FaBell, FaCog, FaEnvelope, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-pink-700 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo gauche */}
          <div className="flex-shrink-0 flex items-center text-white font-bold text-xl">
            Mahaba
          </div>

          {/* Menu centre */}
          <div className="hidden md:flex space-x-6 text-white text-lg font-semibold">
            <button className="hover:bg-pink-600 px-3 py-2 rounded-md flex items-center space-x-1">
              <FaHome />
            </button>
            <button className="hover:bg-pink-600 px-3 py-2 rounded-md flex items-center space-x-1">
              <FaHeart />
            </button>
            <button className="hover:bg-pink-600 px-3 py-2 rounded-md flex items-center space-x-1">
              <FaBell />
            </button>
          </div>

          {/* Menu droite */}
          <div className="flex items-center space-x-4">
            <button className="hover:bg-pink-600 p-2 rounded-full text-white">
              <FaCog />
            </button>
            <button className="hover:bg-pink-600 p-2 rounded-full text-white">
              <FaEnvelope />
            </button>
            <button className="hover:bg-pink-600 p-2 rounded-full text-white">
              <FaUser />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
