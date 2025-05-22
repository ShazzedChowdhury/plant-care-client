import React, { use } from "react";
import "./Navbar.css";
import userProfile from "../../assets/user-profile.png";
import { AuthContext } from "../../Contexts/Firebase/AuthProvider";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const { user, logOutUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    //log out user
    logOutUser()
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  console.log(user);
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
        <NavLink to={`/my-plants/${user?.email}`}>My Plants</NavLink>
      </li>
      <div className="block lg:hidden">
        {user ? (
          <li>
            <button id="log-out" onClick={handleLogOut}>
              Log out
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/auth/log-in-form">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/auth/register-form">Register</NavLink>
            </li>
          </>
        )}
      </div>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm px-5 md:px-30 lg:px-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 pr-3 lg:hidden"
          >
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
        {user && (
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img src={user ? user.photoURL : userProfile} />
            </div>
          </div>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-primary text-white hidden md:block font-semibold"
          >
            Log out
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/auth/log-in-form")}
              className="btn border-2 border-primary hover:bg-primary hover:text-white hidden md:block"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/auth/register-form")}
              className="btn border-2 border-primary hover:bg-primary hover:text-white hidden md:block"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
