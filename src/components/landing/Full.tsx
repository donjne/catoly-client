"use client"
import DemoSection from "./Demo";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TestimonialsSection from "./Testimonials";

export default function Full() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-50">
        <Navbar />
      </div>
      
      <div className="relative z-0">
        <Hero />
        <Features />
        <DemoSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}