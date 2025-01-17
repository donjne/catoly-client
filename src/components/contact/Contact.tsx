import React, { useState } from 'react';
import { MapPin, Mail, PhoneCall, MessageSquare, Send, Twitter, Globe } from 'lucide-react';

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: string;
  link?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Our team typically responds within 2 hours",
    action: "hello@tolyai.com",
    link: "mailto:hello@tolyai.com"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    title: "Twitter",
    description: "Real-time support and updates",
    action: "@tolyai",
    link: "https://twitter.com/tolyai"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Documentation",
    description: "Read our detailed documentation",
    action: "docs.tolyai.com",
    link: "https://docs.tolyai.com"
  }
];

const ContactCard = ({ method }: { method: ContactMethod }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl transform transition-all duration-300 hover:scale-105">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-gray-500/20 to-green-500/20 rounded-lg">
            {method.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{method.description}</p>
            {method.action && (
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center group"
              >
                {method.action}
                <Send className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingInput = ({ 
  label, 
  type = "text",
  value,
  onChange,
  required = false,
  multiline = false
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  multiline?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="relative">
      <InputComponent
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 
          text-white placeholder-transparent focus:outline-none focus:border-green-500
          transition-all duration-200
          ${multiline ? 'h-32 resize-none' : ''}
        `}
        placeholder={label}
      />
      <label
        className={`
          absolute left-4 transition-all duration-200 pointer-events-none
          ${isFocused || value ? 'text-xs top-1 text-green-400' : 'text-base text-gray-400 top-3'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
        {/* Header section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-gray-400 via-green-500 to-gray-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 blur-xl opacity-20" />
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} method={method} />
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  label="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <FloatingInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <FloatingInput
                label="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              
              <FloatingInput
                label="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                multiline
              />

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-gray-500 to-green-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;