import Navbar from '../components/Navbar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/Sidebar';
import { navMenuItems } from '../menus/navbar';
import { sidebarMenuItems } from '../menus/sidebar';

function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar menuItems={navMenuItems}></Navbar>
      <div className="flex flex-grow overflow-hidden">
        <LeftSidebar menuItems={sidebarMenuItems} />
        <div className="flex-1 overflow-auto bg-gray-100 p-4">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
