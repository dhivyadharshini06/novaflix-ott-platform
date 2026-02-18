
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PLANS } from '../constants';

interface SignupProps {
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(PLANS[2].id);
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
    else {
      onSignup();
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative pt-20">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[100px] -z-10" />
      
      <div className="w-full max-w-4xl glass rounded-3xl p-8 md:p-12 border-purple-500/20">
        <div className="text-center mb-10">
          <div className="inline-flex gap-2 mb-4">
             <div className={`w-12 h-1 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-white/10'}`} />
             <div className={`w-12 h-1 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-white/10'}`} />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            {step === 1 ? 'Create your account' : 'Choose your plan'}
          </h1>
          <p className="text-gray-400">
            {step === 1 ? 'Start your membership today.' : 'Select a plan that fits your needs.'}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNext} className="max-w-md mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input type="text" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input type="text" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input type="password" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-all" />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 rounded-xl font-bold text-lg purple-glow hover:bg-purple-700 transition-all"
            >
              Continue
            </button>
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-400 font-bold hover:underline">Sign In</Link>
            </p>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PLANS.map((plan) => (
                <div 
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedPlan === plan.id ? 'bg-purple-600/20 border-purple-500 ring-4 ring-purple-500/20' : 'glass border-white/10 hover:border-white/30'
                  }`}
                >
                  {plan.id === 'premium' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Recommended</div>
                  )}
                  <div className="text-xl font-bold mb-1">{plan.name}</div>
                  <div className="text-3xl font-black mb-4">{plan.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="text-sm flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M20 6 9 17l-5-5"/></svg>
                      {plan.quality} quality
                    </li>
                    <li className="text-sm flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M20 6 9 17l-5-5"/></svg>
                      {plan.resolution}
                    </li>
                    <li className="text-sm flex items-center gap-2 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M20 6 9 17l-5-5"/></svg>
                      {plan.devices} devices
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="max-w-md mx-auto flex gap-4">
               <button onClick={() => setStep(1)} className="flex-1 py-4 glass rounded-xl font-bold">Back</button>
               <button onClick={handleNext} className="flex-[2] py-4 bg-purple-600 rounded-xl font-bold text-lg purple-glow hover:bg-purple-700 transition-all">Start Membership</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
