import React, { useState } from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeMenuIcon from "../assets/icon-close-menu.svg";
import logo from "../assets/logo.svg";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-10">
      {/* Logo */}
      <div className="flex items-center space-x-8">
        <img src={logo} alt="Logo" className="h-8" />

        {/* Desktop Navigation bar */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Features => Dropdown */}
          <div className="relative">
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex items-center space-x-2 hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
            >
              Features
              <img src={featuresOpen ? arrowUp : arrowDown} alt="Arrow" />
            </button>
            {featuresOpen && (
              <ul className="absolute left-0 mt-2 bg-white p-4 rounded-lg shadow-lg space-y-2 w-36">
                <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                   <img src="/src/assets/icon-todo.svg" alt="Todo" />
                   <span>Todo List</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                    <img src="/src/assets/icon-calendar.svg" alt="Calendar" />
                    <span>Calendar</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                    <img src="/src/assets/icon-reminders.svg" alt="Reminders" />
                    <span>Reminders</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                    <img src="/src/assets/icon-planning.svg" alt="Planning" />
                    <span>Planning</span>
                </li>
              </ul>
            )}

          </div>

          {/* Company => Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center space-x-2 hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
            >
              Company
              <img src={companyOpen ? arrowUp : arrowDown} alt="Arrow" />
            </button>
            {companyOpen && (
              <ul className="absolute left-0 mt-2 bg-white p-4 rounded-lg shadow-lg space-y-2">
                <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                  History
                </li>
                <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                  Our Team
                </li>
                <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                  Blog
                </li>
              </ul>
            )}
          </div>

          {/* Other Options */}
          <a
            href="#careers"
            className="hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
          >
            Careers
          </a>
          <a
            href="#about"
            className="hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
          >
            About
          </a>
        </nav>
      </div>

      {/* Login & Signup Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="w-full px-4 py-2 rounded hover:bg-mediumGray hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition">
            Login
        </button>
        <button className="border-2 border-black px-4 py-2 rounded-xl hover:bg-mediumGray hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition">
          Register
        </button>
      </div>




      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? closeMenuIcon : menuIcon} alt="Menu" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Semi-Transparent Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>

          {/* Menu Content */}
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white p-6 z-50 shadow-lg">
            <button
              className="mb-6"
              onClick={() => setMenuOpen(false)}
            >
              <img src={closeMenuIcon} alt="Close" />
            </button>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center space-x-2 hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
                >
                  Features
                  <img src={featuresOpen ? arrowUp : arrowDown} alt="Arrow" />
                </button>
                {featuresOpen && (
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      <img src="/src/assets/icon-todo.svg" alt="Todo" />
                      <span>Todo List</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      <img src="/src/assets/icon-calendar.svg" alt="Calendar" />
                      <span>Calendar</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      <img src="/src/assets/icon-reminders.svg" alt="Reminders" />
                      <span>Reminders</span>
                    </li>
                    <li className="flex items-center space-x-2 hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      <img src="/src/assets/icon-planning.svg" alt="Planning" />
                      <span>Planning</span>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="flex items-center space-x-2 hover:text-mediumGray focus:outline-none focus:ring-2 focus:ring-almostBlack"
                >
                  Company
                  <img src={companyOpen ? arrowUp : arrowDown} alt="Arrow" />
                </button>
                {companyOpen && (
                  <ul className="mt-2 space-y-2">
                    <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      History
                    </li>
                    <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      Our Team
                    </li>
                    <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                      Blog
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                Careers
              </li>
              <li className="hover:bg-mediumGray focus:outline-none focus:ring-2 focus:ring-black">
                About
              </li>
            </ul>
            <div className="mt-4 space-y-4">
            <button className="w-full px-4 py-2 rounded-full hover:bg-mediumGray hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition">
                Login
            </button>
              <button className="w-full border-2 border-mediumGray px-4 py-2 rounded-full hover:bg-mediumGray hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition">
                Register
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default NavigationBar;

