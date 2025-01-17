import React, { useState, useEffect } from 'react';
import { Calendar, Tag, Sparkles, Bug, Zap, Shield, Filter, Search } from 'lucide-react';

interface ChangelogEntry {
  version: string;
  date: string;
  timestamp: number;
  title: string;
  description: string;
  type: 'feature' | 'improvement' | 'bugfix' | 'security';
  details: string[];
}

const changelogData: ChangelogEntry[] = [
  {
    version: "1.2.0",
    date: "2024-01-15",
    timestamp: 1705276800000,
    title: "AI Model Improvements",
    description: "Major improvements to our AI models and transaction analysis capabilities",
    type: "feature",
    details: [
      "Introduced new AI models for pattern recognition",
      "Enhanced transaction analysis speed by 50%",
      "Added support for custom pattern detection",
      "Improved accuracy of wallet profiling"
    ]
  },
  {
    version: "1.1.2",
    date: "2024-01-10",
    timestamp: 1704844800000,
    title: "Performance Optimization",
    description: "Significant performance improvements across the platform",
    type: "improvement",
    details: [
      "Optimized database queries for faster results",
      "Reduced API response time by 40%",
      "Improved caching mechanisms",
      "Enhanced real-time data processing"
    ]
  },
  {
    version: "1.1.1",
    date: "2024-01-05",
    timestamp: 1704412800000,
    title: "Bug Fixes and Security Updates",
    description: "Critical bug fixes and security enhancements",
    type: "bugfix",
    details: [
      "Fixed memory leak in transaction processing",
      "Resolved WebSocket connection issues",
      "Fixed data pagination bugs",
      "Addressed minor UI inconsistencies"
    ]
  },
  {
    version: "1.1.0",
    date: "2024-01-01",
    timestamp: 1704067200000,
    title: "Security Enhancements",
    description: "Major security updates and improvements",
    type: "security",
    details: [
      "Implemented enhanced encryption protocols",
      "Added two-factor authentication",
      "Improved API key security",
      "Enhanced audit logging"
    ]
  }
];

const typeIcons = {
  feature: <Sparkles className="w-5 h-5" />,
  improvement: <Zap className="w-5 h-5" />,
  bugfix: <Bug className="w-5 h-5" />,
  security: <Shield className="w-5 h-5" />
};

const typeColors = {
  feature: "from-blue-500 to-purple-500",
  improvement: "from-green-500 to-emerald-500",
  bugfix: "from-orange-500 to-red-500",
  security: "from-indigo-500 to-blue-500"
};

const ChangelogCard = ({ entry }: { entry: ChangelogEntry }) => {
  return (
    <div className="relative group animate-fadeIn">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl">
        {/* Version badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-white">
              v{entry.version}
            </span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              {entry.date}
            </span>
          </div>
          <div className={`p-2 rounded-lg bg-gradient-to-r ${typeColors[entry.type]} opacity-80`}>
            {typeIcons[entry.type]}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
          {entry.title}
        </h3>
        <p className="text-gray-400 mb-4">{entry.description}</p>

        {/* Details */}
        <ul className="space-y-2">
          {entry.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Changelog = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChangelog, setFilteredChangelog] = useState(changelogData);

  useEffect(() => {
    let filtered = changelogData;

    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter(entry => entry.type === filter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(entry =>
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.details.some(detail => 
          detail.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    setFilteredChangelog(filtered);
  }, [filter, searchQuery]);

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
              Changelog
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 via-green-500 to-gray-500 blur-xl opacity-20" />
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Stay up to date with the latest features, improvements, and fixes
          </p>
        </div>

        {/* Filters and search */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Type filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                  filter === 'all'
                    ? 'border-green-500 text-green-500 bg-green-500/10'
                    : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
              >
                All
              </button>
              {Object.keys(typeIcons).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2 ${
                    filter === type
                      ? 'border-green-500 text-green-500 bg-green-500/10'
                      : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {typeIcons[type as keyof typeof typeIcons]}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search changes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Changelog entries */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredChangelog.map((entry, index) => (
            <ChangelogCard key={index} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;