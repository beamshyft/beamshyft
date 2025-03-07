'use client'
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { BeamshyftHeader } from "@/components/beamshyft-header"
import { BeamshyftFooter } from "@/components/beamshyft-footer";

import Home from "./home/page"
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <BeamshyftHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BeamshyftFooter />
      </div>
    </Router>
  )
}
