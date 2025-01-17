"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "DeFi Developer",
    company: "SolanaLabs",
    avatar: "/api/placeholder/100/100",
    content: "Toly AI has revolutionized how we analyze on-chain data. The insights we get are incredible, and the AI suggestions have helped us optimize our protocols significantly.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Portfolio Manager",
    company: "Alameda Research",
    avatar: "/api/placeholder/100/100",
    content: "The real-time analytics and predictive insights have given us a competitive edge in the market. The UI is intuitive and the AI responses are incredibly accurate.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Reeves",
    role: "Blockchain Analyst",
    company: "Jump Trading",
    avatar: "/api/placeholder/100/100",
    content: "We've integrated Toly AI into our daily operations and it's been a game-changer. The pattern recognition capabilities are unmatched in the space.",
    rating: 5
  }
];

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  update: (width: number, height: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

class ParticleClass implements Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.dx = (Math.random() - 0.5) * 0.5;
    this.dy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2;
  }

  update(width: number, height: number) {
    if (this.x < 0 || this.x > width) this.dx *= -1;
    if (this.y < 0 || this.y > height) this.dy *= -1;
    this.x += this.dx;
    this.y += this.dy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recreate particles on resize
      particles = Array.from({ length: 50 }, () => new ParticleClass(canvas.width, canvas.height));
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) => {
  return (
    <div
      className={`relative group transition-all duration-700 ${
        isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-40 scale-95 blur-sm'
      }`}
    >
      <div className="relative p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-green-500/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quote icon */}
        <div className="absolute -top-4 -right-4 text-green-500/20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
          <Quote size={80} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Avatar and info */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500/30 transform group-hover:scale-110 transition-transform duration-500">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 transform group-hover:scale-110 transition-transform duration-500">
                <Star size={12} className="text-black" fill="currentColor" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonial.role}
              </p>
              <p className="text-sm text-gray-500">
                {testimonial.company}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex space-x-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-green-500"
                fill="currentColor"
              />
            ))}
          </div>

          {/* Testimonial content */}
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
            "{testimonial.content}"
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <ParticleBackground />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-gray-400 via-green-500 to-gray-500 bg-clip-text text-transparent">
              What Our Users Say
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 blur-xl opacity-20" />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Join thousands of satisfied users who trust Toly AI for their Solana analytics needs
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative px-12">
            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-full"
            >
              <ArrowRight size={24} />
            </button>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => {
                const distance = Math.abs(index - activeIndex);
                const isActive = distance === 0;
                return (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    isActive={isActive}
                  />
                );
              })}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-green-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// import React, { useState, useEffect, useRef } from 'react';
// import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   avatar: string;
//   content: string;
//   rating: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Alex Thompson",
//     role: "DeFi Developer",
//     company: "SolanaLabs",
//     avatar: "/api/placeholder/100/100",
//     content: "Toly AI has revolutionized how we analyze on-chain data. The insights we get are incredible, and the AI suggestions have helped us optimize our protocols significantly.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Sarah Chen",
//     role: "Portfolio Manager",
//     company: "Alameda Research",
//     avatar: "/api/placeholder/100/100",
//     content: "The real-time analytics and predictive insights have given us a competitive edge in the market. The UI is intuitive and the AI responses are incredibly accurate.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Michael Reeves",
//     role: "Blockchain Analyst",
//     company: "Jump Trading",
//     avatar: "/api/placeholder/100/100",
//     content: "We've integrated Toly AI into our daily operations and it's been a game-changer. The pattern recognition capabilities are unmatched in the space.",
//     rating: 5
//   }
// ];

// interface Particle {
//   x: number;
//   y: number;
//   dx: number;
//   dy: number;
//   size: number;
//   update: (width: number, height: number) => void;
//   draw: (ctx: CanvasRenderingContext2D) => void;
// }

// class ParticleClass implements Particle {
//   x: number;
//   y: number;
//   dx: number;
//   dy: number;
//   size: number;

//   constructor(width: number, height: number) {
//     this.x = Math.random() * width;
//     this.y = Math.random() * height;
//     this.dx = (Math.random() - 0.5) * 0.5;
//     this.dy = (Math.random() - 0.5) * 0.5;
//     this.size = Math.random() * 2;
//   }

//   update(width: number, height: number) {
//     if (this.x < 0 || this.x > width) this.dx *= -1;
//     if (this.y < 0 || this.y > height) this.dy *= -1;
//     this.x += this.dx;
//     this.y += this.dy;
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
//     ctx.fill();
//   }
// }

// const ParticleBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
//     let particles: Particle[] = [];

//     const resizeCanvas = () => {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       // Recreate particles on resize
//       particles = Array.from({ length: 50 }, () => new ParticleClass(canvas.width, canvas.height));
//     };

//     const animate = () => {
//       if (!canvas || !ctx) return;
      
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.update(canvas.width, canvas.height);
//         particle.draw(ctx);
//       });

//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach(p2 => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     // Initialize
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-none"
//     />
//   );
// };

// const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) => {
//   return (
//     <div
//       className={`relative group transition-all duration-700 ${
//         isActive 
//           ? 'opacity-100 scale-100' 
//           : 'opacity-40 scale-95 blur-sm'
//       }`}
//     >
//       <div className="relative p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-green-500/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
//         {/* Quote icon */}
//         <div className="absolute -top-4 -right-4 text-green-500/20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
//           <Quote size={80} />
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Avatar and info */}
//           <div className="flex items-start space-x-4 mb-6">
//             <div className="relative">
//               <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500/30 transform group-hover:scale-110 transition-transform duration-500">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1 transform group-hover:scale-110 transition-transform duration-500">
//                 <Star size={12} className="text-black" fill="currentColor" />
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
//                 {testimonial.name}
//               </h4>
//               <p className="text-sm text-gray-400">
//                 {testimonial.role}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {testimonial.company}
//               </p>
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="flex space-x-1 mb-4">
//             {Array.from({ length: testimonial.rating }).map((_, i) => (
//               <Star
//                 key={i}
//                 size={16}
//                 className="text-green-500"
//                 fill="currentColor"
//               />
//             ))}
//           </div>

//           {/* Testimonial content */}
//           <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
//             "{testimonial.content}"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

