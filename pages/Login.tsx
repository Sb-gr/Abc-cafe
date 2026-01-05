
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Coffee, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Minor delay to show interaction, then perform login
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        // Use window.location.hash for HashRouter compatibility if needed, 
        // but navigate() should handle it.
        navigate('/admin');
      } else {
        setError('Invalid credentials. Please double check the email and password.');
        setIsLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl border border-coffee-200 p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="bg-coffee-900 p-4 rounded-2xl inline-block mb-6 shadow-lg shadow-coffee-900/20">
            <Coffee className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-coffee-900">Admin Login</h1>
          <p className="text-gray-500 mt-2">Enter credentials to manage the cafe</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-600 space-x-3 animate-shake">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="w-full px-5 py-4 rounded-xl bg-[#FAF9F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:border-transparent transition-all"
              placeholder="sumanbasnet2030@gmail.com"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-[#FAF9F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:border-transparent transition-all"
              placeholder="Your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-coffee-900 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-coffee-900/20 flex items-center justify-center space-x-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-coffee-800'}`}
          >
            {isLoading ? (
              <span className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>Signing in...</span>
              </span>
            ) : (
              <>
                <span>Sign In</span>
                <Lock className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-coffee-900 text-sm font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
};

export default Login;
