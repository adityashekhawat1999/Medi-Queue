import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resolveEmergency } from '../store/dashboardSlice';

const EmergencyAlert = () => {
    const { activeEmergencies } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emergency = activeEmergencies[0] || { id: 'dummy', code: 'Code Blue', location: 'Triage', time: 'Just now' };

    const handleAcknowledge = () => {
        dispatch(resolveEmergency(emergency));
        navigate('/doctor'); // Redirect to doctor or admin dashboard
    };

    return (
        <div className="bg-surface min-h-screen text-on-surface">
            {/* Dashboard Background Shell (Decorative) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
                <main className="ml-64 p-8">
                    <header className="mb-12">
                        <h1 className="text-4xl font-headline font-black tracking-tight text-on-surface mb-2">Queue Dashboard</h1>
                    </header>
                </main>
            </div>

            {/* EMERGENCY ALERT OVERLAY */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-on-surface/30">
                <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-[2rem] shadow-[0_24px_48px_-12px_rgba(186,26,26,0.15)] ring-1 ring-error/10 custom-scrollbar">
                    
                    {/* Header Section */}
                    <div className="bg-gradient-to-br from-error to-red-500 px-8 py-6 text-on-error relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-3xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                <p className="font-headline font-black tracking-[0.1em] text-xs uppercase">Priority 1 Critical</p>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-headline font-black leading-tight">EMERGENCY ALERT</h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Full Name</p>
                                <h3 className="text-2xl font-headline font-bold text-on-surface tracking-tight">Sunita Devi</h3>
                                <p className="text-md text-on-surface-variant font-medium">Age: 62 Years</p>
                            </div>
                            
                            <div className="bg-error-container/30 rounded-xl p-4 flex flex-col justify-center border border-error/5">
                                <p className="text-[10px] font-black text-on-error-container uppercase tracking-widest text-center">Queue Token</p>
                                <span className="text-3xl font-black text-error font-headline tracking-tighter text-center">E-01</span>
                            </div>
                        </div>

                        {/* Symptoms */}
                        <div className="bg-surface-container-low rounded-xl p-6 relative">
                            <div className="absolute -top-3 -right-3">
                                <span className="px-3 py-1 bg-on-tertiary-fixed text-tertiary-fixed-dim text-[9px] font-black rounded-full uppercase tracking-widest shadow-sm">AI Analyzed</span>
                            </div>
                            <h4 className="text-[10px] font-bold text-outline uppercase tracking-widest mb-3 flex items-center gap-2">
                                Flagged Critical Symptoms
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-surface-container-lowest rounded-lg text-on-surface font-semibold text-sm flex items-center gap-2 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                                    Difficulty breathing
                                </span>
                                <span className="px-3 py-1.5 bg-surface-container-lowest rounded-lg text-on-surface font-semibold text-sm flex items-center gap-2 shadow-sm">
                                    Oxygen 88%
                                </span>
                            </div>
                            <p className="mt-4 font-accent text-lg text-on-surface-variant opacity-80 leading-relaxed italic">
                                Note: Respiratory distress reported by attendants.
                            </p>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <button 
                                onClick={handleAcknowledge}
                                className="w-full bg-gradient-to-br from-error to-red-600 text-on-error py-4 rounded-xl font-headline font-extrabold text-lg shadow-[0_8px_24px_-8px_rgba(186,26,26,0.4)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                            >
                                <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">priority_high</span>
                                Acknowledge & Handle
                            </button>
                        </div>
                    </div>
                    
                    <button onClick={() => navigate(-1)} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-on-error/20 text-on-error hover:bg-on-error/30 transition-colors z-20 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyAlert;
