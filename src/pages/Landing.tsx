import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, BarChart3, Users } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-dark-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-300/0" />
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-6">
              Trade Crypto with Confidence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience secure, lightning-fast cryptocurrency trading with advanced features and professional tools.
            </p>
            <Link
              to="/exchange"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
            >
              Start Trading <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Grade Security',
                description: 'Advanced encryption and secure storage for your assets',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Execute trades in milliseconds with our advanced matching engine',
              },
              {
                icon: BarChart3,
                title: 'Professional Tools',
                description: 'Advanced charting and analysis tools for traders',
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Round-the-clock customer support for all your needs',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-dark-300 border border-primary-900/20 hover:border-primary-600/40 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Trading Volume', value: '$2.4B+' },
              { label: 'Active Traders', value: '100K+' },
              { label: 'Countries Supported', value: '150+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;