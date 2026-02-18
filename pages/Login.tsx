
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[100px] -z-10" />

      <div className="w-full max-w-md glass rounded-3xl p-8 md:p-12 border-purple-500/20 shadow-2xl animate-[fadeIn_0.5s_ease-out]">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-gray-400">Please enter your details to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">Forgot Password?</a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-600" />
            <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-purple-600 rounded-xl font-bold text-lg purple-glow hover:bg-purple-700 hover:scale-[1.02] transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            New to NovaFlix?{' '}
            <Link to="/signup" className="text-purple-400 font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
