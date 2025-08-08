import React from 'react';
import { Bell, User, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="bg-gradient-to-r from-[--topbar-start] to-[--topbar-end] text-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white border-none rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>
        <User />
      </div>
    </header>
  );
};

export default Topbar;
