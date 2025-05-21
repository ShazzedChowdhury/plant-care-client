import React from "react";
import { Link, NavLink } from "react-router";
import './Navbar.css'
import userProfile from '../../assets/user-profile.png'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-plants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="/add-plant-form">Add Plant</NavLink>
      </li>
      <li>
        <NavLink to="/my-plants">My plants</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 shadow-sm sticky z-10 top-0 left-0 px-5 md:px-30 lg:px-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost p-0 pr-3 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* logo */}
        <div className="flex items-end gap-1">
          <img
            className="w-10"
            src="https://i.postimg.cc/T1pXyz7n/logo.png"
            alt=""
          />
          <h1 className="text-lg font-semibold">
            plant<span className="text-[#70b023] text-xl">Care</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src={userProfile} />
          </div>
        </div>
        <button className="hidden md:block">Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;
