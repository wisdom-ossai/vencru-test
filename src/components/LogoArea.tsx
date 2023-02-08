import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const LogoArea = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={Logo} alt="" />
      <span className="text-2xl font-semibold text-gray-900">Untitled UI</span>
    </Link>
  );
};

export default LogoArea;
