import React from 'react';
import { useSelector } from 'react-redux';

const LiveTokenStatus = () => {
  const { currentTokenNumber, estimatedWaitTime, currentDepartment } = useSelector(state => state.patient);

  return (
    <div className="pt-4 space-y-6 max-w-md mx-auto px-5 w-full">
      {/* Welcome & Status Header */}
      <header className="pt-4 space-y-1">
        <h1 className="text-4xl font-black tracking-tight font-headline text-on-surface">Your Visit</h1>
        <p className="text-on-surface-variant font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          City General Hospital • {currentDepartment || 'Cardiology'}
        </p>
      </header>

      {/* Live Token Card */}
      <section className="bg-surface-container-lowest rounded-xl p-8 text-center relative overflow-hidden shadow-[0_12px_32px_-4px_rgba(23,27,38,0.06)]">
        <div className="absolute top-0 right-0 p-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Live</span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant opacity-60">Your Token</span>
          <div className="text-7xl font-black font-headline text-primary tracking-tighter">{currentTokenNumber || 'T-104'}</div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full font-bold text-sm">
            <span className="material-symbols-outlined text-sm">hourglass_empty</span>
            Waiting
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-surface-container-low grid grid-cols-2 gap-4">
          <div className="text-left space-y-1">
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">Serving Now</span>
            <span className="text-2xl font-bold font-headline text-on-surface">T-98</span>
          </div>
          <div className="text-right space-y-1 border-l-2 border-surface-container-low pl-4">
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">Est. Wait</span>
            <span className="text-2xl font-bold font-headline text-primary">{estimatedWaitTime || 22} min</span>
          </div>
        </div>

        {/* Position Marker */}
        <div className="mt-6 p-4 bg-surface-container-low rounded-lg flex items-center justify-between">
          <span className="text-sm font-medium text-on-surface-variant">Queue Position</span>
          <span className="text-xl font-black text-on-surface">6<span className="text-sm font-medium ml-1">patients left</span></span>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Visit Progress</h3>
        <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
          {/* Registered */}
          <div className="relative">
            <div className="absolute -left-[27px] top-0 h-[24px] w-[24px] rounded-full bg-tertiary-container flex items-center justify-center z-10 border-4 border-surface">
              <span className="material-symbols-outlined text-white text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-tertiary">Registered</h4>
              <p className="text-xs text-on-surface-variant">Completed at 09:15 AM</p>
            </div>
          </div>

          {/* Waiting (Active) */}
          <div className="relative">
            <div className="absolute -left-[27px] top-0 h-[24px] w-[24px] rounded-full bg-primary flex items-center justify-center z-10 border-4 border-surface shadow-[0_0_0_4px_rgba(0,98,159,0.1)]">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary">Waiting</h4>
              <p className="text-xs text-on-surface-variant">Estimated call at 10:45 AM</p>
            </div>
          </div>

          {/* Called */}
          <div className="relative opacity-40">
            <div className="absolute -left-[27px] top-0 h-[24px] w-[24px] rounded-full bg-surface-container-highest flex items-center justify-center z-10 border-4 border-surface">
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Called</h4>
              <p className="text-xs text-on-surface-variant">Heading to Room 4</p>
            </div>
          </div>

          {/* Completed */}
          <div className="relative opacity-40">
            <div className="absolute -left-[27px] top-0 h-[24px] w-[24px] rounded-full bg-surface-container-highest flex items-center justify-center z-10 border-4 border-surface">
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface">Completed</h4>
              <p className="text-xs text-on-surface-variant">Check out &amp; Prescription</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notify Me Toggle */}
      <section className="bg-surface-container-low rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">notifications_active</span>
          </div>
          <div>
            <h4 className="text-sm font-bold">Smart Notification</h4>
            <p className="text-xs text-on-surface-variant">Alert me when I'm 2nd in line</p>
          </div>
        </div>
        <button className="w-14 h-8 bg-primary rounded-full relative p-1 transition-colors duration-300">
          <div className="absolute right-1 top-1 h-6 w-6 bg-white rounded-full shadow-sm"></div>
        </button>
      </section>

      {/* Auto Refresh Info */}
      <div className="flex flex-col items-center gap-2 pt-4">
        <div className="flex items-center gap-2 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-highest/50 px-3 py-1 rounded-full">
          <span className="material-symbols-outlined text-[12px] animate-spin">sync</span>
          Updates every 30 seconds
        </div>
        <span className="font-accent text-primary text-lg">You're in good hands.</span>
      </div>
    </div>
  );
};

export default LiveTokenStatus;
