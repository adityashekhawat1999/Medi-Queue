import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <TopNavBar />
      
      {/* Content Canvas */}
      <main className="flex-1 flex flex-col w-full mx-auto relative pt-20 pb-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
