import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Apple } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Apple className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">FoodBridge</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-emerald-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-emerald-600">Dashboard</Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-emerald-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-emerald-600">Login</Link>
                <Link
                  to="/register"
                  className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}