import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-50/90 dark:bg-slate-950/90 flex justify-center items-center py-2 px-4 italic border-t border-slate-200 dark:border-slate-800 z-[60]">
      <div className="flex gap-4 items-center">
        <span className="text-emerald-500 font-['Inter'] text-xs font-semibold">MediQueue © 2024</span>
        <span className="text-slate-400 font-['Inter'] text-xs font-semibold">Auto-refresh: Active</span>
      </div>
    </footer>
  );
};

export default Footer;
