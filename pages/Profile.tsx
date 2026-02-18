
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOVIES } from '../constants';

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  
  const history = [MOVIES[0], MOVIES[3], MOVIES[7], MOVIES[15]];

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 glass rounded-[3rem]">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full border-4 border-purple-600 overflow-hidden">
               <img src="https://picsum.photos/seed/user123/400" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-2 right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
            </button>
          </div>
          
          <div className="text-center md:text-left flex-grow">
             <h1 className="text-4xl font-extrabold mb-2">Alex Thompson</h1>
             <p className="text-purple-400 font-bold mb-6">Premium Member since 2022</p>
             <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="px-6 py-2 glass rounded-full text-sm">242 Movies Watched</div>
                <div className="px-6 py-2 glass rounded-full text-sm">48h Watch Time</div>
             </div>
          </div>

          <div className="flex flex-col gap-3">
             <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all">Edit Profile</button>
             <button onClick={handleLogout} className="px-8 py-3 glass text-red-400 font-bold rounded-xl hover:bg-red-500/10 transition-all">Logout</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/><path d="M12 8v4l3 3"/></svg>
                   Recently Watched
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {history.map(movie => (
                    <div key={movie.id} className="glass rounded-2xl overflow-hidden flex gap-4 group cursor-pointer hover:bg-white/5 transition-all">
                       <img src={movie.imageUrl} className="w-24 h-32 object-cover" />
                       <div className="py-4 pr-4">
                          <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">{movie.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{movie.year} • {movie.genre}</p>
                          <div className="w-24 h-1 bg-white/10 rounded-full mt-auto">
                             <div className="h-full bg-purple-500 w-[85%]" />
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                   My Watchlist
                </h3>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                   {[MOVIES[10], MOVIES[11], MOVIES[18]].map(movie => (
                     <div key={movie.id} className="min-w-[150px] aspect-[2/3] rounded-xl overflow-hidden glass relative group">
                        <img src={movie.imageUrl} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m7 4 12 8-12 8V4z"/></svg>
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
              </section>
           </div>

           <div className="space-y-8">
              <section className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Subscription Info</h3>
                <div className="bg-purple-600 rounded-2xl p-6 mb-6">
                   <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Current Plan</p>
                   <h4 className="text-2xl font-black">PREMIUM 4K</h4>
                   <p className="text-sm text-purple-200 mt-4">Next billing: Oct 12, 2024</p>
                </div>
                <div className="space-y-4">
                   <button onClick={() => navigate('/plans')} className="w-full py-3 glass rounded-xl font-bold hover:bg-white/10 transition-all">Change Plan</button>
                   <button className="w-full py-3 glass text-gray-400 rounded-xl text-sm">Billing History</button>
                </div>
              </section>

              <section className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">Settings</h3>
                <ul className="space-y-4 text-sm font-medium">
                   <li className="flex items-center justify-between cursor-pointer hover:text-purple-400">
                      <span>Email Preferences</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </li>
                   <li className="flex items-center justify-between cursor-pointer hover:text-purple-400">
                      <span>Device Management</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </li>
                   <li className="flex items-center justify-between cursor-pointer hover:text-purple-400">
                      <span>Parental Controls</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </li>
                   <li className="flex items-center justify-between cursor-pointer hover:text-purple-400">
                      <span>Playback Settings</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </li>
                </ul>
              </section>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
