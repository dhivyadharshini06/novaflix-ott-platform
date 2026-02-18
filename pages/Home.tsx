
import React, { useState } from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { MOVIES } from '../constants';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Action', 'Sci-Fi', 'Thriller', 'Comedy', 'Drama', 'Horror'];
  
  const filteredMovies = selectedCategory === 'All' 
    ? MOVIES 
    : MOVIES.filter(m => m.genre === selectedCategory);

  const trendingMovies = MOVIES.filter(m => m.category === 'Trending');
  const actionMovies = MOVIES.filter(m => m.genre === 'Action');
  const sciFiMovies = MOVIES.filter(m => m.genre === 'Sci-Fi');
  const topRatedMovies = MOVIES.filter(m => m.category === 'Top Rated');

  return (
    <div className="relative">
      <Hero movie={MOVIES[2]} />
      
      {/* Category Filter */}
      <div className="sticky top-[72px] z-40 bg-black/50 backdrop-blur-md px-6 md:px-12 py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-purple-600 text-white purple-glow' 
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-12">
        {selectedCategory === 'All' ? (
          <>
            <div className="px-6 md:px-12">
               <h2 className="text-xl md:text-2xl font-bold mb-4 border-l-4 border-purple-600 pl-3">Continue Watching</h2>
               <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                  {[MOVIES[5], MOVIES[12], MOVIES[8]].map(movie => (
                    <div key={movie.id} className="min-w-[300px] h-48 rounded-2xl glass relative overflow-hidden group">
                       <img src={movie.imageUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                          <h4 className="font-bold">{movie.title}</h4>
                          <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                             <div className="h-full bg-purple-500 w-[60%]" />
                          </div>
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <MovieRow title="Popular on NovaFlix" movies={trendingMovies} />
            <MovieRow title="Sci-Fi Blockbusters" movies={sciFiMovies} />
            <MovieRow title="Action & Adventure" movies={actionMovies} />
            <MovieRow title="Critically Acclaimed" movies={topRatedMovies} />
          </>
        ) : (
          <div className="px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="animate-[fadeIn_0.5s_ease-out]">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden glass group cursor-pointer">
                  <img src={movie.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <h3 className="font-bold text-lg">{movie.title}</h3>
                    <p className="text-xs text-purple-400 mb-4">{movie.genre}</p>
                    <button className="w-full bg-purple-600 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
                      Play
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
