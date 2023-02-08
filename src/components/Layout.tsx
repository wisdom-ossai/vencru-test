import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex">
      {/* sidebar */}
      <Sidebar />

      {/* main content */}
      <main className="flex-1 bg-gray-50 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
