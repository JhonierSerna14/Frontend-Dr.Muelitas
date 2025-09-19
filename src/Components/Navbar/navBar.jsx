import React, { useState } from "react";
import SideBar from "../Sidebar/sidebar";
const NavBar = ({ onEndpointChange }) => {
  const [mostrarSideBar, setMostrarSideBar] = useState(false);
  const toggleSideBar = () => {
    setMostrarSideBar(!mostrarSideBar);
  };
  const closeSideBar = () => {
    setMostrarSideBar(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <button onClick={toggleSideBar}>
            <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
            </button>
            <div class="flex items-center justify-start rtl:justify-end">
              
              <a href="/#" class="flex ms-2 md:me-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2818/2818366.png"
                  class="h-8 me-3"
                  alt="Dr. Muelitas Logo"
                />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  🦷 DentalCare Pro
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {mostrarSideBar ? (
        <SideBar
          onEndpointChange={onEndpointChange}
          onCloseSideBar={closeSideBar}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default NavBar;
