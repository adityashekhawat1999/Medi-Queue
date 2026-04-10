import React from 'react';

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm xl:px-8 flex justify-between items-center px-6 py-4 max-w-full mx-auto">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black text-sky-700 font-['Open_Runde']">MediQueue</span>
      </div>
      <div className="text-right">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">St. Mary's General</p>
        <p className="font-accent text-primary text-sm leading-none">The Serene Guardian</p>
      </div>
    </nav>
  );
};

export default TopNavBar;
