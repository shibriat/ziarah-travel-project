import React from 'react';
import { LayoutDashboard, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-sidebar to-sidebar-dark text-sidebar-foreground p-5">
      <h2 className="text-2xl font-bold mb-10 text-center">Admin</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-sidebar-primary hover:text-sidebar-primary-foreground">
              <LayoutDashboard className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-sidebar-primary hover:text-sidebar-primary-foreground">
              <Users className="mr-3" />
              Users
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-sidebar-primary hover:text-sidebar-primary-foreground">
              <Settings className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
