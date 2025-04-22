"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import SBD from "./sbd"
import DMJ from "./dmj"
import OS from "./os"

export default function App() {
  const [isInverted, setIsInverted] = useState(false)

  useEffect(() => {
    if (isInverted) {
      document.body.classList.add("inverted")
    } else {
      document.body.classList.remove("inverted")
    }
  }, [isInverted])

  const toggleInversion = () => {
    setIsInverted(!isInverted)
  }

  return (
    <div className={`min-h-screen ${isInverted ? "inverted" : ""}`}>
      <Navbar isInverted={isInverted} toggleInversion={toggleInversion} />

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isInverted ? "text-black" : "text-white"}`}>Homepage</h1>
          <p className={`text-xl max-w-3xl mx-auto ${isInverted ? "text-black" : "text-white"}`}>
            Ada 3 sahabat, namanya SkiBiDi (SBD), DripMyJeans (DMJ), dan OhShiii (OS).
          </p>
        </div>

        {/* Course cards in a single row */}
        <div className="flex flex-col md:flex-row gap-4">
          <SBD isInverted={isInverted} />
          <DMJ isInverted={isInverted} />
          <OS isInverted={isInverted} />
        </div>

        {/* Course details section */}
        <div className="mt-16 grid grid-cols-1 gap-12">
          {/* SBD Section */}
          <div id="sbd-detail" className="bg-card rounded-lg overflow-hidden backdrop-blur-sm">
            <div className={`bg-sbd ${isInverted ? "inverted-bg-sbd" : ""} py-3 px-6`}>
              <h2 className={`text-2xl font-bold ${isInverted ? "text-black" : "text-white"}`}>SkiBiDi (SBD)</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className={`${isInverted ? "bg-black bg-opacity-20" : "bg-sbd bg-opacity-20"} p-4 rounded-full`}>
                    <img src="/assets/SBDLogo.svg" alt="SBD Logo" className="h-32 w-32" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className={`${isInverted ? "text-black" : "text-white"} mb-4`}>Lorem Ipsum.</p>
                  <p className={`${isInverted ? "text-gray-800" : "text-gray-300"}`}>Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DMJ Section */}
          <div id="dmj-detail" className="bg-card rounded-lg overflow-hidden backdrop-blur-sm">
            <div className={`bg-dmj ${isInverted ? "inverted-bg-dmj" : ""} py-3 px-6`}>
              <h2 className={`text-2xl font-bold ${isInverted ? "text-black" : "text-white"}`}>DripMyJeans (DMJ)</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className={`${isInverted ? "bg-black bg-opacity-20" : "bg-dmj bg-opacity-20"} p-4 rounded-full`}>
                    <img src="/assets/DMJLogo.svg" alt="DMJ Logo" className="h-32 w-32" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className={`${isInverted ? "text-black" : "text-white"} mb-4`}>Lorem Ipsum.</p>
                  <p className={`${isInverted ? "text-gray-800" : "text-gray-300"}`}>Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* OS Section */}
          <div id="os-detail" className="bg-card rounded-lg overflow-hidden backdrop-blur-sm">
            <div className={`bg-os ${isInverted ? "inverted-bg-os" : ""} py-3 px-6`}>
              <h2 className={`text-2xl font-bold ${isInverted ? "text-black" : "text-white"}`}>OhShiii (OS)</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className={`${isInverted ? "bg-black bg-opacity-20" : "bg-os bg-opacity-20"} p-4 rounded-full`}>
                    <img src="/assets/OSLogo.svg" alt="OS Logo" className="h-32 w-32" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className={`${isInverted ? "text-black" : "text-white"} mb-4`}>Lorem Ipsum.</p>
                  <p className={`${isInverted ? "text-gray-800" : "text-gray-300"}`}>Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
