
import React from 'react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Featured</span>
          <span className="text-purple-400 font-bold uppercase tracking-widest text-xs">{movie.genre}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter drop-shadow-lg leading-tight">
          {movie.title}
        </h1>
        
        <p className="text-gray-300 text-sm md:text-lg mb-8 line-clamp-3 md:line-clamp-none max-w-xl">
          {movie.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
            Watch Now
          </button>
          
          <button className="flex items-center gap-2 px-8 py-3 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
