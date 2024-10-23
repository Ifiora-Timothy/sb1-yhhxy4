import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Wallet, LayoutDashboard, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleLogin = () => {
    // For demo purposes, we'll log in as admin
    window.location.href = '/admin';
  };

  return (
    <nav className="bg-dark-400 border-b border-dark-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wallet className="w-8 h-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">CryptoEx</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              <Link
                to="/exchange"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/exchange')
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-dark-300 hover:text-white'
                }`}
              >
                Exchange
              </Link>
              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/admin')
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:bg-dark-300 hover:text-white'
                  }`}
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">{user.email}</span>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-dark-300 hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
                >
                  Login
                </button>
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm font-medium text-primary-300 border border-primary-600 rounded-md hover:bg-primary-600 hover:text-white"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;