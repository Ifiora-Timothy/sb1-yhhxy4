import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-dark-400 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            © 2024 CryptoExchange. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;