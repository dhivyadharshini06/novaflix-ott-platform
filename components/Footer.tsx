
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-3xl font-extrabold tracking-tighter text-glow flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">NOVA</span>
            <span className="text-white">FLIX</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            The ultimate premium cinematic experience delivered right to your screens. Unlimited movies, TV shows, and more.
          </p>
          <div className="flex gap-4">
             {/* Social Mockup */}
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-purple-600 cursor-pointer transition-colors">
                 <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
               </div>
             ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/home" className="hover:text-purple-400 transition-colors">Browsing</Link></li>
            <li><Link to="/plans" className="hover:text-purple-400 transition-colors">Pricing Plans</Link></li>
            <li><Link to="/home" className="hover:text-purple-400 transition-colors">New Releases</Link></li>
            <li><Link to="/home" className="hover:text-purple-400 transition-colors">Awards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">About NovaFlix</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Press Center</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Investors</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Cookie Preferences</Link></li>
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Help Center</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2024 NovaFlix Inc. All rights reserved.</p>
        <div className="flex gap-8">
           <span>Designed for Premium Experiences</span>
           <span>v2.4.0-stable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
