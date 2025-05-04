import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
import { Search, Home, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Home */}
        <div className="flex items-center space-x-3">
          <Home size={24} />
          <Link to="/" className="text-2xl font-semibold hover:text-blue-400 transition">Spendtech</Link>
        </div>


        {/* Right: User */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition shadow-md">
            <UserCircle className="mr-2" size={20} />
            <span>Onkar Hol</span>
          </button>

          <Link
            to="/addProduct"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition shadow-md"
          >
            Add Product
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
