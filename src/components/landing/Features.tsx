"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Command, Wand2, Bot, GitMerge, Zap, Code, Shield } from 'lucide-react';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const features: FeatureCard[] = [
  {
    title: 'Smart Automations',
    description: 'Set up custom workflows and automate your tasks with AI precision',
    icon: <Command className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-600',
    glowColor: 'rgba(99, 102, 241, 0.3)'
  },
  {
    title: 'AI Powered',
    description: 'Advanced AI models working together to assist your needs',
    icon: <Bot className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    glowColor: 'rgba(168, 85, 247, 0.3)'
  },
  {
    title: 'Quick Integration',
    description: 'Seamlessly connect with your favorite tools and platforms',
    icon: <GitMerge className="w-6 h-6" />,
    color: 'from-pink-500 to-red-600',
    glowColor: 'rgba(236, 72, 153, 0.3)'
  },
  {
    title: 'Custom Actions',
    description: 'Create and customize your own AI-powered actions',
    icon: <Wand2 className="w-6 h-6" />,
    color: 'from-red-500 to-orange-600',
    glowColor: 'rgba(239, 68, 68, 0.3)'
  },
  {
    title: 'Real-time Processing',
    description: 'Lightning-fast responses and real-time data processing',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-orange-500 to-yellow-600',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security with end-to-end encryption',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  }
];

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();

        // Connect particles
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

const FeatureCard = ({ title, description, icon, color, glowColor }: FeatureCard) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.boxShadow = `0 0 30px ${glowColor}`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glowColor]);

  return (
    <div
      ref={cardRef}
      className="relative group bg-black/50 backdrop-blur-xl rounded-xl p-6 pt-12 transition-all duration-500 ease-out border border-white/10 hover:border-white/20"
      style={{ transformStyle: 'preserve-3d' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${glowColor}, transparent, ${glowColor})`,
          backgroundSize: '200% 100%',
          animation: isHovered ? 'shimmer 2s infinite' : 'none',
          zIndex: -1
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} p-3 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 transform transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 transform transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>
        <button className="flex items-center text-white/70 hover:text-white transition-all duration-300 group-hover:translate-x-2">
          Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <ParticleCanvas />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Animated section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Experience the next generation of AI assistance with our powerful suite of features
          </p>
        </div>

        {/* Features grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Enhanced call-to-action */}
        <div className="mt-20 text-center">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            <span className="relative">
              Explore All Features
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
            <ExternalLink className="w-4 h-4 ml-2 transform group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Add keyframes for animations
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out;
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Features;