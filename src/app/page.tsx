'use client'
import React from "react";
import dynamic from "next/dynamic";
import { Route, Routes } from "react-router-dom";
const Router = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), { ssr: false });

import { BeamshyftHeader } from "@/components/beamshyft-header";
import { BeamshyftFooter } from "@/components/beamshyft-footer";

import Home from "./home/_page";
import Catalog from "./catalog/_page";
import About from "./about/_page";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <BeamshyftHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <BeamshyftFooter />
      </div>
    </Router>
  )
}
