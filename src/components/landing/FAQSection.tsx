import React, { useState } from 'react';
import { ChevronDown, Bot, Shield, Zap, Code, BarChart2, Wallet } from 'lucide-react';

interface FAQ {
  icon: React.ReactNode;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    icon: <Bot className="w-5 h-5" />,
    question: "How does Toly AI analyze Solana transactions?",
    answer: "Toly AI uses advanced machine learning algorithms to analyze transactions in real-time. Our AI models process on-chain data to identify patterns, detect anomalies, and provide actionable insights about wallet behavior, token movements, and smart contract interactions.",
    category: "Technology"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Is my data secure when using Toly AI?",
    answer: "Absolutely. We prioritize security by implementing end-to-end encryption, secure API endpoints, and regular security audits. We only analyze public blockchain data and never store sensitive private keys or wallet information.",
    category: "Security"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    question: "What is the response time for analysis requests?",
    answer: "Toly AI processes requests in near real-time, with most analyses completed within milliseconds. For complex queries involving historical data, response times may extend to a few seconds while maintaining high accuracy.",
    category: "Performance"
  },
  {
    icon: <Code className="w-5 h-5" />,
    question: "Can I integrate Toly AI with my existing tools?",
    answer: "Yes! We provide comprehensive APIs and SDKs for seamless integration. Our platform supports popular development frameworks and can be easily incorporated into your existing workflow, whether you're building a DeFi protocol or analytics dashboard.",
    category: "Integration"
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    question: "What types of analytics does Toly AI provide?",
    answer: "Our platform offers comprehensive analytics including transaction patterns, wallet profiling, token movement analysis, smart contract interaction metrics, and predictive insights. We also provide custom analytics solutions tailored to your specific needs.",
    category: "Features"
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    question: "Which wallets are supported by Toly AI?",
    answer: "Toly AI supports all major Solana wallets including Phantom, Solflare, and Ledger. Our platform can analyze any wallet address on the Solana blockchain, providing insights regardless of the wallet interface used.",
    category: "Compatibility"
  }
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="group">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-start justify-between bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500/30 hover:bg-black/70"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 rounded-lg bg-gradient-to-r from-gray-500/20 to-green-500/20 group-hover:from-gray-500/30 group-hover:to-green-500/30 transition-all duration-300">
            {faq.icon}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
              {faq.question}
            </h3>
            <div
              className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const filteredFaqs = activeCategory
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  return (
    <section className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
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
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-gray-400 via-green-500 to-gray-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 blur-xl opacity-20" />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Everything you need to know about Toly AI and how it can help you analyze the Solana blockchain
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === null
                ? 'border-green-500 text-green-500 bg-green-500/10'
                : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? 'border-green-500 text-green-500 bg-green-500/10'
                  : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact support */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href='/contact' className="px-8 py-4 bg-gradient-to-r from-gray-500 to-green-600 rounded-lg text-white font-medium transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;