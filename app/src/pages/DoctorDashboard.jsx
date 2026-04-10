import React from 'react';

const DoctorDashboard = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen flex">
            {/* SideNavBar Implementation */}
            <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 z-40">
                <div className="px-6 mb-8">
                    <h1 className="text-xl font-bold text-sky-700 dark:text-sky-300 font-headline">MediQueue</h1>
                    <p className="text-xs text-slate-500 font-medium mt-1">Serene Guardian Staff</p>
                </div>
                <nav className="flex-1 space-y-1 px-2">
                    <a className="flex items-center gap-3 px-4 py-3 bg-sky-50 text-sky-700 rounded-lg mx-2 transition-transform scale-95 active:scale-100" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
                        <span className="font-medium">Queue</span>
                    </a>
                </nav>
                <div className="px-4 mt-auto">
                    <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Consult Patient
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="ml-64 min-h-screen p-8 pb-16 w-full flex-1">
                {/* Top Stats Bar */}
                <header className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-none">
                        <p className="text-xs font-bold text-outline uppercase tracking-widest mb-2">Tokens Waiting</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-headline font-bold text-on-surface">32</span>
                        </div>
                    </div>
                    <div className="bg-error-container p-6 rounded-xl border-none relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-xs font-bold text-on-error-container uppercase tracking-widest mb-2">System Load</p>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-headline font-extrabold text-on-error-container">High</span>
                                <span className="px-2 py-1 bg-error text-white text-[10px] font-bold rounded-full animate-pulse">CRITICAL</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Queue List */}
                <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-8">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-outline">Token</th>
                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-outline">Patient Details</th>
                                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-outline text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-low">
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-6">
                                    <span className="px-3 py-1.5 bg-primary/10 text-primary font-black rounded-lg text-sm tracking-tight">T-104</span>
                                </td>
                                <td className="px-6 py-6">
                                    <div>
                                        <p className="font-bold text-on-surface">Rajesh Kumar</p>
                                        <p className="text-xs text-on-surface-variant">45 yrs • Male - Chest pain, hypertensive</p>
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-right">
                                    <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-md hover:-translate-y-px transition-all">Call Next</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-6">
                                    <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant font-black rounded-lg text-sm tracking-tight">T-105</span>
                                </td>
                                <td className="px-6 py-6">
                                    <div>
                                        <p className="font-bold text-on-surface">Anita Sharma</p>
                                        <p className="text-xs text-on-surface-variant">28 yrs • Female - Follow-up</p>
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-right flex gap-2 justify-end">
                                    <button className="px-4 py-2 bg-surface-container-highest text-on-surface text-xs font-bold rounded-lg hover:bg-surface-dim transition-colors">Skip</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                
                {/* Decorative Annotation */}
                <div className="mt-8 relative h-12">
                   <span className="font-accent text-xl text-primary -rotate-2 absolute left-4">
                     Patient flow is optimized for Gen Med today ✨
                   </span>
                </div>
            </main>
        </div>
    );
};

export default DoctorDashboard;
