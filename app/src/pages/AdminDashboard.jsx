import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
    const { metrics } = useSelector(state => state.dashboard);

    return (
        <div className="bg-surface text-on-surface min-h-screen flex">
            {/* SideNavBar Component */}
            <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col py-6 z-50">
                <div className="px-6 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-sky-700 dark:text-sky-300 font-['Inter']">MediQueue</h1>
                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Serene Guardian Admin</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 space-y-2 px-4">
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-sky-600 transition-transform font-['Inter'] font-medium" href="#">
                        <span className="material-symbols-outlined">list_alt</span>
                        <span>Queue</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 bg-sky-50 text-sky-700 rounded-lg mx-2 font-['Inter'] font-medium" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                        <span>Stats</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-sky-600 transition-transform font-['Inter'] font-medium" href="#">
                        <span className="material-symbols-outlined">domain</span>
                        <span>Departments</span>
                    </a>
                </nav>
                <div className="px-6 mt-auto">
                    <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">add</span>
                        Add Patient
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="ml-64 p-8 min-h-screen w-full flex-1">
                {/* Top Bar / Header */}
                <header className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl font-black font-headline text-on-surface tracking-tight mb-2">Admin Analytics</h2>
                        <p className="text-on-surface-variant font-body">Real-time throughput and hospital resource optimization.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-accent text-lg text-tertiary">Live data updating every 30s</span>
                        <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-highest hover:bg-surface-container-high transition-colors text-on-surface font-semibold rounded-xl">
                            <span className="material-symbols-outlined">download</span>
                            Download Daily Report (PDF)
                        </button>
                    </div>
                </header>

                {/* Top Metrics Grid (Bento Style) */}
                <section className="grid grid-cols-4 gap-6 mb-8">
                    {/* Total Registrations */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(23,27,38,0.04)] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total Registrations</span>
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">person_add</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-black font-headline text-on-surface">{metrics.totalPatientsToday}</h3>
                            <p className="text-tertiary text-sm flex items-center gap-1 mt-1 font-bold">
                                <span className="material-symbols-outlined text-xs">trending_up</span>
                                +12% from yesterday
                            </p>
                        </div>
                    </div>

                    {/* Active Doctors */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(23,27,38,0.04)] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Active Doctors</span>
                            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-3xl font-black font-headline text-on-surface">{metrics.activeDoctors}</h3>
                            <p className="text-on-surface-variant text-sm mt-1">across 8 active Depts</p>
                        </div>
                    </div>

                    {/* Avg Wait Time */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(23,27,38,0.04)] flex flex-col justify-between border-l-4 border-error">
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Avg Wait Time</span>
                            <div className="p-2 bg-error/10 rounded-lg text-error">
                                <span className="material-symbols-outlined">timer</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-3xl font-black font-headline text-on-surface">{metrics.averageWaitTime}</h3>
                                <span className="text-on-surface-variant font-bold">min</span>
                            </div>
                            <p className="text-error text-sm flex items-center gap-1 mt-1 font-bold">
                                <span className="material-symbols-outlined text-xs">warning</span>
                                8m above target
                            </p>
                        </div>
                    </div>

                    {/* Triage Distribution (Mini Visualization) */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_12px_32px_-4px_rgba(23,27,38,0.04)] flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Triage Priority</span>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-error"></div>
                                <div className="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-error" style={{ width: '15%' }}></div>
                                </div>
                                <span className="text-[10px] font-bold text-on-surface-variant">15% Critical</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <div className="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                                </div>
                                <span className="text-[10px] font-bold text-on-surface-variant">45% Urgent</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                                <div className="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden">
                                    <div className="h-full bg-tertiary" style={{ width: '40%' }}></div>
                                </div>
                                <span className="text-[10px] font-bold text-on-surface-variant">40% Routine</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Table Section */}
                <section className="bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(23,27,38,0.04)] overflow-hidden">
                    <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/50">
                        <h4 className="text-lg font-bold font-headline text-on-surface">Departmental Performance Summary</h4>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-on-surface-variant border-b border-surface-container-highest">
                                    <th className="px-8 py-4 font-bold text-xs uppercase tracking-widest">Department</th>
                                    <th className="px-8 py-4 font-bold text-xs uppercase tracking-widest text-right">Reg</th>
                                    <th className="px-8 py-4 font-bold text-xs uppercase tracking-widest text-right">Avg Wait</th>
                                    <th className="px-8 py-4 font-bold text-xs uppercase tracking-widest">Utilization</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-highest">
                                <tr className="hover:bg-surface-container-lowest transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-error"></div>
                                            <span className="font-bold text-on-surface">Emergency Care</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right font-medium">342</td>
                                    <td className="px-8 py-5 text-right font-bold text-error">18m</td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex-1 h-3 bg-surface-container-low rounded-full overflow-hidden">
                                                <div className="h-full bg-error" style={{ width: '92%' }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
