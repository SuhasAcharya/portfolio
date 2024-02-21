"use client";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full my-6 flex flex-wrap justify-between items-center px-4 md:px-10">
      <div className="flex justify-start w-full md:w-[30%]">
        <span className="text-lg md:text-xl font-bold text-green-500">
          Suhas Acharya
        </span>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        className={`w-full md:w-[60%]  mt-4 md:mt-0 ${
          isMenuOpen ? "" : "hidden"
        } md:flex justify-around`}
      >
        <ul className="flex flex-col md:w-full md:flex-row justify-around flex-wrap md:items-center">
          <li className="mx-2 text-sm md:text-base">Home</li>
          <li className="mx-2 text-sm md:text-base">About Me</li>
          <li className="mx-2 text-sm md:text-base">Technologies</li>
          <li className="mx-2 text-sm md:text-base">Projects</li>
          <li className="mx-2 text-sm md:text-base">Contact Me</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
