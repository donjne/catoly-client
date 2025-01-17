"use client"
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import AboutUs from "./About";

export default function Full() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-50">
        <Navbar />
      </div>
      
      <div className="relative z-0">
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}