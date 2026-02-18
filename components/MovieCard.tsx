
import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative min-w-[200px] md:min-w-[240px] aspect-[2/3] rounded-xl overflow-hidden glass cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 purple-glow">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1 bg-purple-600/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold">
             ⭐ {movie.rating}
          </div>
          <div className="text-[10px] font-medium text-gray-300">{movie.year}</div>
        </div>
        
        <h3 className="font-bold text-lg leading-tight mb-1 truncate">{movie.title}</h3>
        <p className="text-xs text-purple-400 font-semibold mb-3">{movie.genre}</p>
        
        <div className="flex items-center gap-2">
          <button className="flex-1 bg-white text-black py-2 rounded-lg text-xs font-bold hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
            Play
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg glass text-white hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
