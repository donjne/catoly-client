import React, { useState, useEffect } from 'react';
import { Twitter, Github, Linkedin, ArrowRight, Users, Code, Globe, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former Solana core developer with expertise in AI and blockchain technology.",
    avatar: "/api/placeholder/200/200",
    social: {
      twitter: "https://twitter.com/alexchen",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen"
    }
  },
  {
    name: "Sarah Park",
    role: "Head of AI",
    bio: "PhD in Machine Learning, specialized in natural language processing and blockchain analytics.",
    avatar: "/api/placeholder/200/200",
    social: {
      twitter: "https://twitter.com/sarahpark",
      github: "https://github.com/sarahpark",
      linkedin: "https://linkedin.com/in/sarahpark"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Engineer",
    bio: "Blockchain architect with experience building high-performance DeFi protocols.",
    avatar: "/api/placeholder/200/200",
    social: {
      twitter: "https://twitter.com/mrodriguez",
      github: "https://github.com/mrodriguez",
      linkedin: "https://linkedin.com/in/mrodriguez"
    }
  }
];

const stats: Stat[] = [
  {
    label: "Users",
    value: "50K+",
    icon: <Users className="w-6 h-6" />,
    description: "Active users analyzing Solana data"
  },
  {
    label: "Transactions",
    value: "1B+",
    icon: <Code className="w-6 h-6" />,
    description: "Transactions analyzed daily"
  },
  {
    label: "Countries",
    value: "150+",
    icon: <Globe className="w-6 h-6" />,
    description: "Countries with active users"
  },
  {
    label: "Awards",
    value: "20+",
    icon: <Award className="w-6 h-6" />,
    description: "Industry recognitions"
  }
];

const StatCard = ({ stat }: { stat: Stat }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-gray-500/20 to-green-500/20 rounded-lg">
            {stat.icon}
          </div>
          <div>
            <div className={`text-3xl font-bold text-white mb-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              {stat.value}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        </div>
        <p className="mt-4 text-gray-400">{stat.description}</p>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500/30">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Award size={14} className="text-black" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-green-400">{member.role}</p>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6">{member.bio}</p>
          
          <div className="flex gap-4">
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
              >
                <Twitter size={18} />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
              >
                <Github size={18} />
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        
        {/* Animated orbs */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
            style={{
              background: 'linear-gradient(to right, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.1))',
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-gray-400 via-green-500 to-gray-500 bg-clip-text text-transparent">
              About Toly AI
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 blur-xl opacity-20" />
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Building the future of blockchain analytics with advanced AI technology
          </p>
        </div>

        {/* Mission section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="relative p-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-green-500/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Toly AI, we're committed to democratizing blockchain analytics through artificial intelligence. 
                Our mission is to provide developers, traders, and researchers with powerful tools to understand 
                and leverage blockchain data for better decision-making.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We believe in the power of combining AI with blockchain technology to create more transparent, 
                efficient, and accessible financial systems. Our team of experts works tirelessly to push the 
                boundaries of what's possible in blockchain analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Team section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Join us CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for blockchain and AI technology.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-green-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 group"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;