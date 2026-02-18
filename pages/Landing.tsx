
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { MOVIES } from '../constants';

const Landing: React.FC = () => {
  const trendingMovies = MOVIES.filter(m => m.category === 'Trending');
  const topRatedMovies = MOVIES.filter(m => m.category === 'Top Rated');

  return (
    <div className="relative">
      <Hero movie={MOVIES[0]} />

      <div className="mt-[-100px] relative z-20 space-y-12">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        
        {/* Value Props Section */}
        <section className="px-6 md:px-12 py-16 bg-gradient-to-b from-transparent to-[#1a0b2e]/50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Experience Entertainment Like Never Before</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Join millions of viewers worldwide and dive into an infinite library of cinematic masterpieces in stunning 4K.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 glass rounded-3xl text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4Z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cancel Anytime</h3>
              <p className="text-gray-400">No commitments. You can cancel your subscription with a single click at any time.</p>
            </div>
            <div className="p-8 glass rounded-3xl text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7-3 5 3 5"/><path d="m19 7 3 5-3 5"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Device Support</h3>
              <p className="text-gray-400">Watch on your TV, laptop, tablet, or phone. Sync your progress effortlessly across all screens.</p>
            </div>
            <div className="p-8 glass rounded-3xl text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive Content</h3>
              <p className="text-gray-400">Enjoy original productions that you won't find anywhere else. Only on NovaFlix.</p>
            </div>
          </div>
        </section>

        <MovieRow title="Critics' Choice" movies={topRatedMovies} />

        {/* Call to action */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 text-center purple-glow border-purple-500/20">
            <h2 className="text-4xl font-extrabold mb-6">Ready to start your journey?</h2>
            <p className="text-xl text-gray-300 mb-10">Enter your email to create or restart your membership.</p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full md:w-96 px-6 py-4 rounded-full bg-white/5 border border-white/20 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <Link 
                to="/signup" 
                className="w-full md:w-auto px-10 py-4 bg-purple-600 rounded-full font-bold text-lg hover:bg-purple-700 transition-all whitespace-nowrap"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
