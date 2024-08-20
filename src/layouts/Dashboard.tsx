import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex h-screen overflow-hidden">
        <Sidebar></Sidebar>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Dashboard;
