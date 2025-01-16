import React, { useState, useEffect, useRef } from 'react';
import { Send, ExternalLink, Menu, X, Home, BarChart2, History, Settings } from 'lucide-react';

interface Integration {
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface Suggestion {
  title: string;
  description: string;
}

const ParticleField = () => {
  // Reusing the same particle animation from Features section
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

    const particles = Array.from({ length: 50 }, () => 
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

const integrations: Integration[] = [
  {
    name: "DeFi Swap",
    description: "Swap tokens & manage liquidity",
    icon: "🔄",
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "NFT Market",
    description: "Browse and trade NFTs",
    icon: "🎨",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Token Launch",
    description: "Launch new tokens easily",
    icon: "🚀",
    color: "from-pink-500 to-red-600"
  },
  {
    name: "Analytics",
    description: "Track performance metrics",
    icon: "📊",
    color: "from-red-500 to-orange-600"
  }
];

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Home' },
  { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics' },
  { icon: <History className="w-5 h-5" />, label: 'History' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings' }
];

const suggestions: Suggestion[] = [
  {
    title: "Check latest market trends",
    description: "analyze recent trading patterns"
  },
  {
    title: "Monitor gas prices",
    description: "get real-time gas fee updates"
  },
  {
    title: "Track portfolio performance",
    description: "view your asset statistics"
  },
  {
    title: "Set up price alerts",
    description: "create custom price notifications"
  }
];

const DemoSection = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fullText = "How can I assist you today?";

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setIsTyping(false);
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [text, isTyping]);

  return (
    <section className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Try It Yourself
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-20" />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Experience the power of AI-assisted trading and analytics
          </p>
        </div>

        {/* Demo interface */}
        <div className="max-w-5xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Demo header */}
            <div className="flex items-center p-4 border-b border-white/10 bg-black/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-white/50 text-sm">demo.toly.ai</span>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex min-h-[600px]">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden absolute top-20 left-4 z-50 text-white/70 hover:text-white p-2"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Sidebar */}
              <div className={`fixed lg:static inset-y-0 left-0 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:translate-x-0 transition-transform duration-300 ease-in-out
                lg:w-64 bg-black/50 backdrop-blur-xl border-r border-white/10 z-40`}>
                <div className="p-4 space-y-4">
                  <div className="text-white/50 text-sm font-medium">Navigation</div>
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                      >
                        <span className="transform group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main chat area */}
              <div className="flex-1 p-6 space-y-6">
                {/* Chat header */}
                <div className="text-3xl font-semibold text-white mb-8">
                  {text}
                  {isTyping && <span className="animate-pulse">|</span>}
                </div>

                {/* Input area */}
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Start a new conversation..."
                    className="w-full bg-black/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all duration-200 transform group-hover:scale-110">
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {/* Suggestions */}
                <div className="space-y-4">
                  <h3 className="text-white/50 text-sm font-medium">Suggestions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 text-left group transform hover:scale-105"
                      >
                        <div className="text-white font-medium mb-1 group-hover:text-blue-400">
                          {suggestion.title}
                        </div>
                        <div className="text-gray-400 text-sm">{suggestion.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="space-y-4">
                  <h3 className="text-white/50 text-sm font-medium">Integrations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {integrations.map((integration, index) => (
                      <div
                        key={index}
                        className="group flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer transform hover:scale-105"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${integration.color} flex items-center justify-center text-xl mr-4 transform group-hover:rotate-12 transition-transform duration-200`}>
                          {integration.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200">
                            {integration.name}
                          </div>
                          <div className="text-gray-400 text-sm">{integration.description}</div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-200 transform group-hover:rotate-45" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;