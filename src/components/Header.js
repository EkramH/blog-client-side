import React from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <nav className="bg-beauBlue px-2 sm:px-4 py-2.5 shadow-xl">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={1} className="btn btn-ghost lg:hidden">
                <FiMenu className="h-5 w-5" />
              </label>
              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About</p>
                </li>
              </ul>
            </div>
            <a href="ee" className="btn btn-ghost normal-case text-4xl">
              Blog
            </a>
          </div>
          <div className="navbar-center text-blackCoral hidden md:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About</p>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2  menu menu-compact dropdown-content bg-blueYonder text-ghostWhite rounded-box w-52"
              >
                <li>
                  <a href="ee" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <p>Settings</p>
                </li>
                <li>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
