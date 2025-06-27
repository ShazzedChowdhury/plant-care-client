import React, { use } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../Contexts/Firebase/AuthProvider";
import "./DashboardLayout.css";
const DashboardLayout = () => {
  const { user } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="dashboard">Overview</NavLink>
      </li>
      <li>
        <NavLink to="dashboard/all-plants">All Plants</NavLink>
      </li>
      <li>
        <NavLink to="dashboard/add-plants">Add Plants</NavLink>
      </li>
      <li>
        <NavLink to={`dashboard/my-plants/${user?.email}`}>My Plants</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-5">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul id="dashboard-menu" className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
