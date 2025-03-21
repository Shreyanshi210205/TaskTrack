import React from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-violet-900 text-white justify-between p-4">
      <div className="logo">
        <span className="mx-8 text-xl font-bold">TaskTrack</span>
      </div>
      <ul className="flex gap-8 mx-9 text-lg">
      <li >
        <NavLink to="" className={({isActive})=>`${isActive?"text-white ":"text-black"}cursor-pointer hover:font-bold transition-all disabled:text-black`}>
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({isActive})=>`${isActive?"text-white":"text-black"}cursor-pointer hover:font-bold transition-all`}>
            Your tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
