"use client"
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Full() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation stays on top with higher z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Main content */}
      <div className="relative z-0">
        <Hero />
        <Features />
      </div>
    </div>
  );
}