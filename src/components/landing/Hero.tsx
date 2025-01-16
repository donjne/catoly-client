"use client"
import React, { useEffect, useRef, useState } from 'react';
import AnimatedSphere from './AnimatedSphere';

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3;
        this.color = `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 255, ${0.3 + Math.random() * 0.4})`;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        const mouseDistance = Math.hypot(this.x - mousePosition.x, this.y - mousePosition.y);
        if (mouseDistance < 100) {
          const angle = Math.atan2(this.y - mousePosition.y, this.x - mousePosition.x);
          this.dx = Math.cos(angle) * 2;
          this.dy = Math.sin(angle) * 2;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > window.innerWidth) this.dx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.dy *= -1;

        this.draw();
      }
    }

    const particles: Particle[] = Array.from({ length: 50 }, () => 
      new Particle(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
    );

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => particle.update());
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Rotating lights */}
//           <div className="absolute inset-0 z-10">
//             {/* Yin (B&W) side light */}
//             <div 
//               className="absolute inset-0 bg-white/30 blur-2xl"
//               style={{
//                 clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
//                 animation: 'yinRotate 8s linear infinite'
//               }}
//             />
//             {/* Yang (Color) side light */}
//             <div 
//               className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30"
//               style={{
//                 clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
//                 animation: 'yangRotate 8s linear infinite'
//               }}
//             />
//           </div>
  
//           {/* Main yin-yang container */}
//           <div 
//             className="absolute inset-0 z-20"
//             style={{ animation: 'mainRotate 8s linear infinite' }}
//           >
//             {/* Base image */}
//             <img 
//               src="/sideguy.png" 
//               alt="Sphere" 
//               className="w-full h-full object-cover"
//             />
  
//             {/* Yin (B&W) overlay */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 background: 'linear-gradient(90deg, rgba(0,0,0,0.9), rgba(255,255,255,0.1))',
//                 mixBlendMode: 'saturation',
//                 clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
//               }}
//             />
  
//             {/* Yin-yang curve */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 background: `
//                   radial-gradient(circle at 50% 25%, #fff 0%, #fff 25%, transparent 26%),
//                   radial-gradient(circle at 50% 75%, #000 0%, #000 25%, transparent 26%)
//                 `,
//                 mask: 'linear-gradient(90deg, #000 49.5%, transparent 50.5%)'
//               }}
//             />
  
//             {/* Dots */}
//             <div className="absolute left-1/2 top-1/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full">
//               <div className="absolute inset-1 rounded-full bg-white" />
//             </div>
//             <div className="absolute left-1/2 top-3/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
//               <div className="absolute inset-1 rounded-full bg-black" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         {/* Static base container */}
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Static base image */}
//           <img 
//             src="/sideguy.png" 
//             alt="Sphere" 
//             className="w-full h-full object-cover"
//           />
  
//           {/* Black and white filter for yin part (left side) */}
//           <div 
//             className="absolute inset-0"
//             style={{
//               background: 'linear-gradient(90deg, rgba(0,0,0,0.9), rgba(255,255,255,0.1))',
//               mixBlendMode: 'saturation',
//               clipPath: 'path("M48,0 A48,48 0 0,1 48,96 A24,24 0 0,1 48,48 A24,24 0 0,0 48,0")',
//               transform: 'scale(1.05)'  // Slight scale to avoid edge artifacts
//             }}
//           />
  
//           {/* Rotating gradient overlays */}
//           <div 
//             className="absolute inset-0"
//             style={{ animation: 'rotateGradients 8s linear infinite' }}
//           >
//             {/* Yin side gradient (purples) */}
//             <div 
//               className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-40"
//               style={{
//                 clipPath: 'path("M48,0 A48,48 0 0,1 48,96 A24,24 0 0,1 48,48 A24,24 0 0,0 48,0")',
//                 mixBlendMode: 'overlay'
//               }}
//             />
            
//             {/* Yang side gradient (blues) */}
//             <div 
//               className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40"
//               style={{
//                 clipPath: 'path("M48,96 A48,48 0 0,1 48,0 A24,24 0 0,0 48,48 A24,24 0 0,1 48,96")',
//                 mixBlendMode: 'overlay'
//               }}
//             />
//           </div>
  
//           {/* Static dots */}
//           <div className="absolute left-1/2 top-1/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black">
//             <div className="absolute inset-1 rounded-full bg-white" />
//           </div>
//           <div className="absolute left-1/2 top-3/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
//             <div className="absolute inset-1 rounded-full bg-black" />
//           </div>
//         </div>
//       </div>
//     );
//   };
  

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 h-screen flex flex-col items-center justify-center">
        <div className={`space-y-6 text-center transform transition-all duration-700 ${
          scrollY > 100 ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              The Next Generation
            </span>
            <br />
            <span className="text-white">Toly AI</span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            Toly is here to help with insights on transactions, tokens, wallets and all activities on the Solana Blockchain
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-white/20 border border-white/20">
              Learn More
            </button>
          </div>
        </div>

        <div className={`mt-12 transform transition-all duration-700 ${
          scrollY > 100 ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          <AnimatedSphere />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-1 h-12 mt-2 bg-white/20 rounded-full">
          <div className="w-full h-1/2 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

// Animation keyframes
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       @keyframes rotateGradients {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = `
//     @keyframes mainRotate {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//     @keyframes yinRotate {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(-360deg); }
//     }
//     @keyframes yangRotate {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//   `;
//   document.head.appendChild(styleSheet);
// }

export default Hero;