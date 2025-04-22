"use client"

import Logo from "./assets/Logo.svg"

export default function Navbar({ isInverted, toggleInversion }) {
  return (
    <nav className={`${isInverted ? "bg-black text-white" : "bg-white text-black"} p-2 sticky top-0 z-50 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Logo || "/placeholder.svg"} alt="Logo" className="h-8 w-8" />
          <h1 className="text-xs md:text-sm font-bold">Network Laboratory</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-1 md:space-x-3 text-xs md:text-sm font-medium">
            <li className={`hover:${isInverted ? "text-gray-400" : "text-gray-600"} cursor-pointer px-1`}>
              <a href="#home">Homie</a>
            </li>
            <li className={`hover:${isInverted ? "text-sbd" : "text-sbd"} cursor-pointer px-1`}>
              <a href="#sbd-detail">SBD</a>
            </li>
            <li className={`hover:${isInverted ? "text-dmj" : "text-dmj"} cursor-pointer px-1`}>
              <a href="#dmj-detail">DMJ</a>
            </li>
            <li className={`hover:${isInverted ? "text-os" : "text-os"} cursor-pointer px-1`}>
              <a href="#os-detail">OS</a>
            </li>
            <li className={`hover:${isInverted ? "text-gray-400" : "text-gray-600"} cursor-pointer px-1`}>
              <a href="/">NETLAB</a>
            </li>
          </ul>
          <button
            onClick={toggleInversion}
            className={`ml-3 p-1 rounded-full ${
              isInverted ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            }`}
            title="Invert Colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 15a7 7 0 110-14 7 7 0 010 14z"
                clipRule="evenodd"
              />
              <path d="M10 5a5 5 0 100 10V5z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
