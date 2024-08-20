import { useState } from "react";
import classNames from "classnames";
import { HamburgerIcon, HomeIcon } from "./Icons";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="mx-0 max-w-full px-0">
        <div className="flex justify-between">
          {/* Desktop Menu */}
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center px-2 py-5 text-gray-700">
                <HomeIcon class="text-blue-400"></HomeIcon>
                <span className="font-bold">Home</span>
              </a>
            </div>
            <div className="hidden items-center space-x-1 md:flex">
              <a
                href="#"
                className="px-3 py-5 text-gray-700 hover:text-gray-900"
              >
                Docs
              </a>
              <a
                href="#"
                className="px-3 py-5 text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="hidden items-center space-x-1 md:flex">
            <a href="#" className="px-3 py-5">
              Login
            </a>
          </div>

          {/* mobile menu */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <HamburgerIcon class=""></HamburgerIcon>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
          Docs
        </a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
          Dashboard
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
