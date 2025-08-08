import React from 'react';
import { Bell, User, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="bg-background text-foreground shadow-md p-4 flex justify-between items-center border-b">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-input text-foreground border-none rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="relative text-muted-foreground">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>
        <User className="text-muted-foreground" />
      </div>
    </header>
  );
};

export default Topbar;
