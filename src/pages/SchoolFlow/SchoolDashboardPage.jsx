import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolDashboardPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    {/*  Decorative Background Elements  */}
    <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    <div className="fixed bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

    {/*  ================= SIDEBAR (Glassmorphism) =================  */}
    <aside className="w-64 bg-white/60 backdrop-blur-2xl border-r border-white flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        
        <div className="h-24 flex items-center px-8">
            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center text-white font-black shadow-lg shadow-brand/20">S</div>
                <div>
                    <h1 className="text-xl font-extrabold text-brand leading-none tracking-tight">SkulCredit</h1>
                    <p className="text-[9px] text-brand/70 font-bold uppercase tracking-widest mt-0.5">Partner Portal</p>
                </div>
            </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
            {/*  ACTIVE STATE  */}
            <Link to="/school/dashboard" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white font-semibold shadow-[0_8px_16px_rgba(136,19,55,0.25)] transition-all">
                <Icon name="layout-dashboard" className="w-5 h-5" /> Dashboard
            </Link>
            
            <Link to="/school/students" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="users" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Students
            </Link>

            <Link to="/school/applications" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="file-text" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Applications
            </Link>

            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="shield-check" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Verification
            </Link>

            <Link to="/school/disbursement" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="credit-card" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Disbursement
            </Link>

            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group mt-6">
                <Icon name="headphones" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Support
            </Link>
        </nav>

        <div className="p-4 mb-4 space-y-1">
            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="settings" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Settings
            </Link>
            <Link to="/school/auth" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-semibold hover:bg-rose-50 hover:text-brand transition-all group">
                <Icon name="log-out" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Logout
            </Link>
        </div>
    </aside>

    {/*  ================= MAIN CONTENT =================  */}
    <div className="flex-1 flex flex-col h-full z-10">
        
        {/*  Header (Glass)  */}
        <header className="h-24 bg-transparent flex items-center justify-end px-6 md:px-10 sticky top-0 z-10">
            <button className="md:hidden p-2 text-slate-600 bg-white/50 backdrop-blur-md rounded-lg shadow-sm mr-auto">
                <Icon name="menu" className="w-6 h-6" />
            </button>

            {/*  Search Bar  */}
            <div className="hidden lg:block relative w-80 mr-auto ml-2">
                <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search anything..." 
                    className="w-full pl-11 pr-4 py-2.5 bg-white/60 backdrop-blur-md border border-white rounded-2xl text-sm focus:outline-none focus:bg-white focus:ring-4 focus:ring-brand/10 focus:border-brand/30 transition-all shadow-sm placeholder:text-slate-400 font-medium" />
            </div>

            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-slate-600 font-semibold hover:text-brand transition-colors group">
                    <div className="relative bg-white/60 backdrop-blur-md p-2.5 rounded-xl border border-white shadow-sm group-hover:bg-white">
                        <Icon name="bell" className="w-5 h-5 group-hover:animate-bounce" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-brand rounded-full border-2 border-white"></span>
                    </div>
                </button>

                <button className="flex items-center gap-3 bg-white/60 backdrop-blur-md p-1.5 pr-4 rounded-full border border-white shadow-sm hover:bg-white transition-all">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center text-white shadow-inner">
                        <Icon name="user" className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 hidden sm:block">Admin</span>
                    <Icon name="chevron-down" className="w-4 h-4 text-slate-400 hidden sm:block" />
                </button>
            </div>
        </header>

        {/*  Scrollable Dashboard Content  */}
        <main className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pb-12">
            <div className="max-w-[1200px] mx-auto space-y-8 pt-4">
                
                {/*  Premium Verification Banner  */}
                <div className="animate-fade-in-up stagger-1">
                    <div className="relative overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        {/*  Decorative bg  */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        
                        <div className="flex items-start gap-5 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 flex-shrink-0">
                                <Icon name="shield-check" className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">Onboarding Complete</h2>
                                <p className="text-slate-500 font-medium">Your institution is verified. You are now ready to process applications and receive direct disbursements.</p>
                            </div>
                        </div>
                        <button className="relative z-10 bg-white border-2 border-slate-100 hover:border-emerald-200 text-slate-700 hover:text-emerald-700 font-bold py-3 px-6 rounded-xl transition-all shadow-sm whitespace-nowrap flex items-center gap-2">
                            View Profile <Icon name="arrow-right" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/*  OVERVIEW SECTION  */}
                <div className="animate-fade-in-up stagger-2">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Overview</h2>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-white/50 px-3 py-1 rounded-full border border-white">This Month</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        {/*  Card 1  */}
                        <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
                            <div className="card-orb w-24 h-24 bg-brand/10 -top-4 -right-4"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon name="users" className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-bold text-slate-500 mb-1">Total Students</p>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tight">140</h3>
                            </div>
                        </div>

                        {/*  Card 2  */}
                        <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
                            <div className="card-orb w-24 h-24 bg-amber-500/10 -top-4 -right-4"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-500/10 group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="file-clock" className="w-6 h-6" />
                                    </div>
                                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-lg animate-pulse">Action Needed</span>
                                </div>
                                <p className="text-sm font-bold text-slate-500 mb-1">New Applications</p>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tight">12</h3>
                            </div>
                        </div>

                        {/*  Card 3  */}
                        <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
                            <div className="card-orb w-24 h-24 bg-blue-500/10 -top-4 -right-4"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-blue-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon name="file-check-2" className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-bold text-slate-500 mb-1">Verified Apps</p>
                                <h3 className="text-3xl font-black text-slate-900 tracking-tight">86</h3>
                            </div>
                        </div>

                        {/*  Card 4  */}
                        <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
                            <div className="card-orb w-32 h-32 bg-emerald-500/10 -bottom-8 -right-8"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon name="badge-dollar-sign" className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-bold text-slate-500 mb-1">Disbursed Funds</p>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">₦4.25M</h3>
                            </div>
                        </div>

                    </div>
                </div>

                {/*  QUICK ACTIONS SECTION  */}
                <div className="animate-fade-in-up stagger-3">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-5">Quick Actions</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        {/*  Action 1  */}
                        <Link to="/school/students" className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                                <Icon name="user-plus" className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Add Student</h4>
                                <p className="text-xs text-slate-500 font-medium">Register new profile</p>
                            </div>
                        </Link>

                        {/*  Action 2  */}
                        <a href="#" className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                                <Icon name="bar-chart-3" className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Generate Report</h4>
                                <p className="text-xs text-slate-500 font-medium">Download CSV data</p>
                            </div>
                        </a>

                        {/*  Action 3  */}
                        <Link to="/school/settings" className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                                <Icon name="headset" className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Get Support</h4>
                                <p className="text-xs text-slate-500 font-medium">Open a new ticket</p>
                            </div>
                        </Link>

                        {/*  Action 4  */}
                        <Link to="/school/applications" className="bg-gradient-to-br from-brand to-brand-light rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_15px_30px_-10px_rgba(136,19,55,0.4)] hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Icon name="arrow-right" className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Review Applications</h4>
                                <p className="text-xs text-brand-50 font-medium">12 Pending requests</p>
                            </div>
                        </Link>

                    </div>
                </div>

            </div>
        </main>
    </div>

    

    </div>
  );
};

export default SchoolDashboardPage;
