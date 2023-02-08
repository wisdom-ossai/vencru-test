import React from "react";
import { Outlet } from "react-router";
import LogoArea from "./LogoArea";
import Sidebar from "./Sidebar";
import Menu from "../assets/navMenu.svg";

const Layout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleSidebarTogle = React.useCallback(
    () => setShowSidebar((prev) => !prev),
    [showSidebar]
  );
  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-white flex justify-between md:hidden px-4">
        <LogoArea />

        <button
          onClick={handleSidebarTogle}
          className="py-4 focus:outline-none bg-transparent"
        >
          <img src={Menu} alt="" />
        </button>
      </div>
      {/* sidebar */}
      <Sidebar show={showSidebar} />

      {/* main content */}
      <main className="flex-1 bg-gray-50 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
