import React from "react";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import menu from "../assets/menu.svg";

const Nav = () => {
  return (
    <>
      <nav
        className="bg-black flex justify-end pr-12 pt-12 absolute w-full"
        id="navbar"
      >
        <ul className="flex space-x-6">
          <li>
            <span className="material-symbols-outlined text-white">
              light_mode
            </span>
          </li>
          <li>
            {/* <span className="material-symbols-outlined text-white">dark_mode</span> */}
          </li>
          <li>
            {/* <span className="material-symbols-outlined text-white">menu</span> */}
          </li>
          <li>
            <div className="relative inline-block text-left">
              <div>
                <button type="button"id="menu-button" aria-expanded="true" aria-haspopup="true"
                  className="text-white"
                ><span className="material-symbols-outlined">menu</span> </button>
              </div>
              <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex= {-1}
                className="absolute right-0 z-10  w-56 origin-top-righ border border-white"
              >
              <div className="py-1" role="none">
                <a href="#" className="text-white block px-4 text-base font-semibold" role="menuitem" tabIndex= {-1}     id="menu-item-0"> 
                Account settings </a>
              </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
