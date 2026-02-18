
import React from 'react';
import { PLANS } from '../constants';

const Plans: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Choose the plan that's right for you. Upgrade or downgrade at any time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative glass rounded-[2.5rem] p-10 flex flex-col border border-white/10 transition-all duration-500 hover:scale-[1.02] ${
                plan.id === 'premium' ? 'ring-2 ring-purple-500 bg-purple-600/5 purple-glow scale-105 z-10' : ''
              }`}
            >
              {plan.id === 'premium' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-1 rounded-full text-sm font-bold tracking-tighter shadow-lg">Most Popular</div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`mt-10 w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                plan.id === 'premium' ? 'bg-purple-600 hover:bg-purple-700' : 'glass hover:bg-white/10'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Desktop */}
        <div className="hidden md:block glass rounded-3xl overflow-hidden border-white/5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-8 text-xl font-bold">Comparison</th>
                {PLANS.map(p => <th key={p.id} className="p-8 text-center font-bold text-lg">{p.name}</th>)}
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8 font-medium">Monthly Price</td>
                {PLANS.map(p => <td key={p.id} className="p-8 text-center text-white">{p.price}</td>)}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8 font-medium">Video Quality</td>
                {PLANS.map(p => <td key={p.id} className="p-8 text-center text-white">{p.quality}</td>)}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8 font-medium">Resolution</td>
                {PLANS.map(p => <td key={p.id} className="p-8 text-center text-white">{p.resolution}</td>)}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8 font-medium">Simultaneous Screens</td>
                {PLANS.map(p => <td key={p.id} className="p-8 text-center text-white">{p.devices}</td>)}
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8 font-medium">Watch on any device</td>
                {PLANS.map(p => (
                  <td key={p.id} className="p-8 text-center text-purple-500">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;
