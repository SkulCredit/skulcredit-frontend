import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolApplicationsPage = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [selectedApp]);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    {/*  ================= SIDEBAR =================  */}
    <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}>
        <div className="h-24 flex items-center px-8 border-b border-transparent">
            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
                <div>
                    <h1 className="text-xl font-extrabold text-brand leading-none tracking-tight">SkulCredit</h1>
                    <p className="text-[9px] text-brand/70 font-bold uppercase tracking-widest mt-0.5">Partner Portal</p>
                </div>
            </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <Link to="/school/dashboard" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="layout-dashboard" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Dashboard
            </Link>
            
            <Link to="/school/students" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="users" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Students
            </Link>

            {/*  ACTIVE STATE  */}
            <Link to="/school/applications" className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand text-white font-semibold shadow-[0_4px_12px_rgba(136,19,55,0.2)] transition-all">
                <Icon name="file-text" className="w-5 h-5" /> Applications
            </Link>

            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="shield-check" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Verification
            </Link>

            <Link to="/school/disbursement" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="credit-card" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Disbursement
            </Link>

            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group mt-4">
                <Icon name="headphones" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Support
            </Link>
        </nav>

        <div className="p-4 mb-4 border-t border-slate-100 space-y-1">
            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="settings" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Settings
            </Link>
            <Link to="/school/auth" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="log-out" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Logout
            </Link>
        </div>
    </aside>

    {/*  ================= MAIN CONTENT =================  */}
    <div className="flex-1 flex flex-col h-full relative">
        
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-end px-6 md:px-10 z-10 sticky top-0">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors mr-auto" onClick={() => setIsDrawerOpen(true)}>
                <Icon name="menu" className="w-6 h-6" />
            </button>

            <div className="hidden lg:block relative w-96 mr-auto animate-fade-in-up">
                <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" id="searchInput" placeholder="Search by student name or App ID..." 
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all placeholder:text-slate-400" />
            </div>

                 {/*  Right Controls  */}
<div className="flex items-center gap-4">
    {/*  Notification Bell  */}
    <button className="relative bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-slate-500 hover:text-brand transition-colors group">
        <Icon name="bell" className="w-5 h-5 group-hover:animate-bounce" />
        {/*  Red Notification Dot  */}
        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#881337] rounded-full border-2 border-white"></span>
    </button>

    {/*  Admin Profile Dropdown  */}
    <div className="relative" id="admin-dropdown-container">
        {/*  Trigger Button  */}
        <button onClick={() => {}} className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-full shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-full bg-[#881337] flex items-center justify-center text-white">
                <Icon name="user" className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-700 hidden sm:block">Admin</span>
            <Icon name="chevron-down" className="w-4 h-4 text-slate-400 hidden sm:block" />
        </button>
        
        {/*  Dropdown Menu  */}
        <div id="admin-dropdown-menu" className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 opacity-0 invisible transform translate-y-2 transition-all duration-200 z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-50 bg-slate-50/50">
                <p className="text-sm font-bold text-slate-900">John Administrator</p>
                <p className="text-xs font-medium text-slate-500 truncate">admin@school.edu.ng</p>
            </div>
            <div className="p-2 flex flex-col gap-1">
                <Link to="/school/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-brand hover:bg-brand-50 rounded-xl transition-colors">
                    <Icon name="settings" className="w-4 h-4" /> Profile Settings
                </Link>
                <Link to="/school/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-brand hover:bg-brand-50 rounded-xl transition-colors">
                    <Icon name="shield-check" className="w-4 h-4" /> Verification Status
                </Link>
            </div>
            <div className="p-2 border-t border-slate-50">
                <Link to="/school/auth" className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors">
                    <Icon name="log-out" className="w-4 h-4" /> Logout
                </Link>
            </div>
        </div>
    </div>
</div>
        </header>

        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 relative">
            <div className="max-w-[1200px] mx-auto space-y-8">
                
                <div className="flex flex-col lg:flex-row gap-6 justify-between animate-fade-in-up stagger-1">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Loan Applications</h1>
                        <p className="text-sm text-slate-500 font-medium">Review and verify incoming tuition requests from parents.</p>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar shrink-0">
                        <div className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-3 flex items-center gap-4 shadow-sm">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600"><Icon name="clock" className="w-5 h-5" /></div>
                            <div>
                                <p className="text-xs font-bold text-amber-700/70 uppercase">Action Needed</p>
                                <p className="text-lg font-black text-amber-900" id="pending-count">2 Pending</p>
                            </div>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-3 flex items-center gap-4 shadow-sm">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Icon name="shield-check" className="w-5 h-5" /></div>
                            <div>
                                <p className="text-xs font-bold text-emerald-700/70 uppercase">Total Verified</p>
                                <p className="text-lg font-black text-emerald-900">₦1.2M</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in-up stagger-2">
                    <div className="inline-flex bg-slate-200/50 p-1 rounded-xl border border-slate-200/60 w-full sm:w-auto" id="filter-container">
                        <button className="filter-btn active flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all" data-filter="all">All</button>
                        <button className="filter-btn flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all" data-filter="pending">Pending</button>
                        <button className="filter-btn flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all hidden md:block" data-filter="verified">Verified</button>
                        <button className="filter-btn flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all" data-filter="completed">Completed</button>
                    </div>

                    <button className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <Icon name="filter" className="w-4 h-4" /> More Filters
                    </button>
                </div>

                {/*  Modern Data List  */}
                <div className="space-y-3 animate-fade-in-up stagger-3 pb-10" id="application-list">
                    
                    <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <div className="col-span-3">Student & App ID</div>
                        <div className="col-span-3">Parent Info</div>
                        <div className="col-span-2">Tuition Amount</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2 text-right">Date Applied</div>
                    </div>

                    {/*  Row 1: Pending  */}
                    <div className="list-row app-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-status="pending" onClick={() => setSelectedApp('APP-10234')}>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-2xl"></div>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">CO</div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-sm lg:text-base student-name">Chidi Okafor</h4>
                                <p className="text-xs text-slate-400 font-mono mt-0.5 app-id">APP-10234</p>
                            </div>
                        </div>
                        <div className="col-span-3 w-full">
                            <p className="text-sm font-bold text-slate-700">Mrs. Okafor</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Icon name="phone" className="w-3 h-3" /> 0801 *** 4321</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-brand">₦150,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 w-max">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Pending Review
                            </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-between lg:justify-end w-full">
                            <p className="text-sm text-slate-500 font-medium">Jan 2, 2026</p>
                            <button className="w-8 h-8 rounded-full bg-brand-50 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors lg:ml-4 shrink-0">
                                <Icon name="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/*  Row 2: Verified  */}
                    <div className="list-row app-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-status="verified" onClick={() => setSelectedApp('APP-10233')}>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">AB</div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-sm lg:text-base student-name">Aminat Bello</h4>
                                <p className="text-xs text-slate-400 font-mono mt-0.5 app-id">APP-10233</p>
                            </div>
                        </div>
                        <div className="col-span-3 w-full">
                            <p className="text-sm font-bold text-slate-700">Mr. Bello</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Icon name="phone" className="w-3 h-3" /> 0812 *** 9988</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-brand">₦320,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 w-max">
                                <Icon name="shield-check" className="w-3.5 h-3.5" /> Verified
                            </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-between lg:justify-end w-full">
                            <p className="text-sm text-slate-500 font-medium">Feb 24, 2026</p>
                            <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-brand hover:text-white transition-colors lg:ml-4 shrink-0">
                                <Icon name="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/*  Row 3: Completed  */}
                    <div className="list-row app-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center opacity-80" data-status="completed" onClick={() => setSelectedApp('APP-10224')}>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">SA</div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-sm lg:text-base student-name">Seyi Adekunle</h4>
                                <p className="text-xs text-slate-400 font-mono mt-0.5 app-id">APP-10224</p>
                            </div>
                        </div>
                        <div className="col-span-3 w-full">
                            <p className="text-sm font-bold text-slate-700">Mrs. Adekunle</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Icon name="phone" className="w-3 h-3" /> 0705 *** 1122</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-brand">₦180,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 w-max">
                                <Icon name="check-circle-2" className="w-3.5 h-3.5" /> Completed
                            </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-between lg:justify-end w-full">
                            <p className="text-sm text-slate-500 font-medium">Feb 28, 2026</p>
                            <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-brand hover:text-white transition-colors lg:ml-4 shrink-0">
                                <Icon name="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/*  Row 4: Pending  */}
                    <div className="list-row app-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-status="pending" onClick={() => setSelectedApp('APP-10229')}>
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-2xl"></div>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">TA</div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-sm lg:text-base student-name">Tunde Adeyemi</h4>
                                <p className="text-xs text-slate-400 font-mono mt-0.5 app-id">APP-10229</p>
                            </div>
                        </div>
                        <div className="col-span-3 w-full">
                            <p className="text-sm font-bold text-slate-700">Mr. Adeyemi</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Icon name="phone" className="w-3 h-3" /> 0902 *** 4455</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-brand">₦450,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 w-max">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Pending Review
                            </span>
                        </div>
                        <div className="col-span-2 flex items-center justify-between lg:justify-end w-full">
                            <p className="text-sm text-slate-500 font-medium">Mar 12, 2026</p>
                            <button className="w-8 h-8 rounded-full bg-brand-50 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors lg:ml-4 shrink-0">
                                <Icon name="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>

    {/*  ================= SLIDE-OUT DRAWER (Review Application) =================  */}
    <div id="drawer-overlay" className={`fixed inset-0 z-50 ${selectedApp ? '' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${selectedApp ? 'opacity-100' : 'opacity-0'}`} id="drawer-backdrop" onClick={() => setSelectedApp(null)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${selectedApp ? 'translate-x-0' : 'translate-x-full'}`} id="drawer-panel">
            
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                    <h2 className="text-lg font-extrabold text-slate-900">Review Application</h2>
                    <p className="text-xs font-mono text-slate-500 mt-0.5" id="drawer-app-id">{selectedApp}</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 bg-white rounded-full shadow-sm border border-slate-100" onClick={() => setSelectedApp(null)}>
                    <Icon name="x" className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                
                {/*  Status Banner  */}
                <div id="drawer-status-banner" className="px-4 py-3 rounded-xl border flex items-center gap-3">
                    <Icon name="alert-circle" id="drawer-status-icon" className="w-5 h-5" />
                    <p className="text-sm font-bold" id="drawer-status-text">Pending Verification</p>
                </div>

                {/*  Financial Request  */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Requested Financing</h3>
                    <div className="bg-brand-50 border border-brand/20 rounded-2xl p-5">
                        <p className="text-3xl font-black text-brand" id="drawer-amount">₦0</p>
                        <p className="text-xs text-brand/70 font-medium mt-1">Please verify this matches the student's exact tuition fee.</p>
                    </div>
                </div>

                {/*  Student Details  */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Student Details</h3>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                        <div>
                            <p className="text-xs text-slate-500 mb-1">Full Name</p>
                            <p className="text-sm font-bold text-slate-900" id="drawer-student">Name</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Class / Grade</p>
                                <p className="text-sm font-bold text-slate-900" id="drawer-class">Class</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Academic Session</p>
                                <p className="text-sm font-bold text-slate-900">2026/2027</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Parent Details  */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Applicant (Parent)</h3>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
                        <div>
                            <p className="text-xs text-slate-500 mb-1">Name</p>
                            <p className="text-sm font-bold text-slate-900" id="drawer-parent">Name</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Phone</p>
                                <p className="text-sm font-bold text-slate-900" id="drawer-phone">Phone</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Identity</p>
                                <p className="text-sm font-bold text-emerald-600 flex items-center gap-1"><Icon name="shield-check" className="w-3.5 h-3.5" /> Verified</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*  Action Buttons  */}
            <div className="p-6 border-t border-slate-100 bg-white" id="drawer-actions">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mb-3" onClick={() => {}}>
                    <Icon name="check-circle" className="w-5 h-5" /> Verify & Approve Amount
                </button>
                <button className="w-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2" onClick={() => {}}>
                    Reject / Flag Issue
                </button>
            </div>
        </div>
    </div>

    

    </div>
  );
};

export default SchoolApplicationsPage;
