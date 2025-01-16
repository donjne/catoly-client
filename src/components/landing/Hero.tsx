import React, { useEffect, useRef, useState } from 'react';

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Particle class
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

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      ));
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => particle.update());
      
      // Draw connections
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

    // Clean up
    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

const AnimatedSphere = () => {
  return (
    <div className="relative w-96 h-96 max-w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-ping" />
      <div className="absolute inset-4 bg-black rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80" 
             style={{
               clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)',
               animation: 'rotate 8s linear infinite'
             }}
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl">
        <ParticleField />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <div className={`space-y-6 text-center transform transition-all duration-700 ${
          scrollY > 100 ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
        }`}>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next Generation
            </span>
            <br />
            <span className="text-white">AI Assistant</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            Experience the future of AI with our advanced assistant that helps you accomplish more
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-white/20 border border-white/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Animated Sphere */}
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

// Add rotation keyframes
const styles = `
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

// Add style tag
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Hero;