import React, { useState } from 'react';
import { UserCircle, ChevronDown, LogOut, Settings, User } from 'lucide-react';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition shadow-md focus:outline-none"
      >
        <UserCircle size={32} className="text-white mr-2" />
        <span className="text-white font-medium">John Doe</span>
        <ChevronDown className="ml-2 text-white" size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <a
            href="/profile"
            className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
          >
            <User size={18} className="mr-2" />
            Profile
          </a>
          <a
            href="/settings"
            className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
          >
            <Settings size={18} className="mr-2" />
            Settings
          </a>
          <a
            href="/logout"
            className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
