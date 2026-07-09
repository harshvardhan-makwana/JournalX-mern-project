import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex text-white bg-blue-500 h-[10] gap-10 list-none text-[20px]">
      <Link to='/'><li className="ms-3">Home</li></Link>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/dashboard"><li>Dashboard</li></Link>
    </div>
  );
}
