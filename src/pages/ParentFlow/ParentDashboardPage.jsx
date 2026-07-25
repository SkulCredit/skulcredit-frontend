import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const ParentDashboardPage = () => {
  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, []);
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    {/*  ================= SIDEBAR =================  */}
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="h-24 flex items-center px-8 border-b border-transparent">
            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
                <div>
                    <h1 className="text-xl font-extrabold text-brand leading-none">Skulcredit</h1>
                    <p className="text-[10px] text-brand/70 font-semibold tracking-wide">Pathway to excel</p>
                </div>
            </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <Link to="/parent/dashboard" className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand text-white font-semibold transition-all shadow-[0_4px_12px_rgba(136,19,55,0.2)]">
                <Icon name="layout-dashboard" className="w-5 h-5" /> Dashboard
            </Link>
            <Link to="/parent/applications" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="file-text" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Applications
            </Link>
            <Link to="/parent/repayment" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="credit-card" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Repayment
            </Link>
            <Link to="/parent/verification" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="shield-check" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Verification
            </Link>
            <Link to="/parent/support" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="headphones" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Support
            </Link>
            <Link to="/parent/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-brand transition-colors group">
                <Icon name="settings" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Settings
            </Link>
        </nav>

        <div className="p-4 mb-4 border-t border-slate-100">
            <Link to="/parent/auth" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="log-out" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Logout
            </Link>
        </div>
    </aside>

    {/*  ================= MAIN CONTENT =================  */}
    <div className="flex-1 flex flex-col h-full bg-[#F8FAFC]">
        
        {/*  Header  */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 md:px-10 z-10 sticky top-0">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Icon name="menu" className="w-6 h-6" />
            </button>

            <div className="hidden md:block relative w-96">
                <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search applications, schools..." 
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-brand/40 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm placeholder:text-slate-400" />
            </div>

            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-brand font-semibold hover:text-brand-light transition-colors group">
                    <div className="relative">
                        <Icon name="bell" className="w-5 h-5 group-hover:animate-bounce" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-brand rounded-full border-2 border-white"></span>
                    </div>
                    <span className="hidden sm:block">Notification</span>
                </button>

                <button className="w-10 h-10 rounded-full bg-brand-50 border border-brand/20 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors shadow-sm">
                    <Icon name="user" className="w-5 h-5" />
                </button>
            </div>
        </header>

        {/*  Scrollable Dashboard Content  */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/*  Welcome & CTA Banner  */}
                <div className="bg-brand rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg shadow-brand/10 animate-fade-in-up stagger-1 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-2">
                        <h2 className="text-2xl md:text-4xl font-extrabold">Welcome back, John 👋</h2>
                        <p className="text-brand-50/80 font-medium max-w-md text-sm md:text-base">Ensure your child's education never pauses. Fast, secure, and flexible fee financing.</p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <Link to="/parent/eligibility">
                            <button className="w-full md:w-auto bg-white text-brand hover:bg-slate-50 font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_25px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                                Apply for School Fee Financing
                                <Icon name="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/*  Overview Metrics Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up stagger-2">
                    {/*  Card 1  */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md hover:border-brand/40 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center">
                                <Icon name="file-text" className="w-5 h-5" />
                            </div>
                            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-md">Pending</span>
                        </div>
                        <h4 className="text-slate-500 text-sm font-medium mb-1">Pending Applications</h4>
                        <p className="text-2xl font-extrabold text-slate-900">1</p>
                    </div>

                    {/*  Card 2  */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md hover:border-brand/40 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center">
                                <Icon name="check-circle" className="w-5 h-5" />
                            </div>
                            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">Active</span>
                        </div>
                        <h4 className="text-slate-500 text-sm font-medium mb-1">Approved Schools</h4>
                        <p className="text-2xl font-extrabold text-slate-900">2</p>
                    </div>

                    {/*  Card 3  */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md hover:border-brand/40 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center">
                                <Icon name="credit-card" className="w-5 h-5" />
                            </div>
                        </div>
                        <h4 className="text-slate-500 text-sm font-medium mb-1">Repayment Status</h4>
                        <p className="text-2xl font-extrabold text-slate-900">₦250,000</p>
                        <p className="text-xs text-slate-400 mt-2 font-medium">Out of ₦500,000 Paid</p>
                    </div>

                    {/*  Card 4  */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md hover:border-brand/40 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-alert-bg text-alert-border flex items-center justify-center">
                                <Icon name="calendar" className="w-5 h-5" />
                            </div>
                        </div>
                        <h4 className="text-slate-500 text-sm font-medium mb-1">Upcoming Due Date</h4>
                        <p className="text-2xl font-extrabold text-slate-900">Nov 15</p>
                        <p className="text-xs text-slate-400 mt-2 font-medium">Next Installment: ₦83,333</p>
                    </div>
                </div>

                {/*  Two Column Section  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up stagger-3">
                    
                    {/*  LEFT COLUMN: Application Timeline (2/3 width)  */}
                    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Current Application Progress</h3>
                                <p className="text-sm text-slate-500 font-medium mt-1">Foster Prime Schools - JSS 2</p>
                            </div>
                            <button className="text-sm font-bold text-brand hover:text-brand-light transition-colors">View Details</button>
                        </div>

                        {/*  Progress Stepper  */}
                        <div className="relative">
                            {/*  Background line  */}
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100"></div>
                            {/*  Active line  */}
                            <div className="absolute left-6 top-8 h-1/2 w-0.5 bg-brand"></div>

                            <div className="space-y-8 relative">
                                {/*  Step 1: Completed  */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]">
                                        <Icon name="check" className="w-5 h-5" />
                                    </div>
                                    <div className="pt-3">
                                        <h4 className="text-slate-900 font-bold">Student Details Submitted</h4>
                                        <p className="text-sm text-slate-500 mt-1">Application sent for initial review.</p>
                                    </div>
                                </div>

                                {/*  Step 2: Active  */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border-2 border-brand bg-white text-brand flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]">
                                        <div className="w-3 h-3 bg-brand rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="pt-3">
                                        <h4 className="text-brand font-bold">School Verification</h4>
                                        <p className="text-sm text-slate-500 mt-1">Awaiting confirmation from Foster Prime Schools administration.</p>
                                        <span className="inline-block mt-3 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-200">Pending Review</span>
                                    </div>
                                </div>

                                {/*  Step 3: Pending  */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]">
                                        <Icon name="file-check" className="w-5 h-5" />
                                    </div>
                                    <div className="pt-3 opacity-50">
                                        <h4 className="text-slate-700 font-bold">Service Charge Payment</h4>
                                        <p className="text-sm text-slate-500 mt-1">Process service fee to initiate disbursement.</p>
                                    </div>
                                </div>

                                {/*  Step 4: Pending  */}
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]">
                                        <Icon name="send" className="w-5 h-5" />
                                    </div>
                                    <div className="pt-3 opacity-50">
                                        <h4 className="text-slate-700 font-bold">Tuition Disbursed</h4>
                                        <p className="text-sm text-slate-500 mt-1">Funds transferred directly to school account.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  RIGHT COLUMN: Recent Activity & Notifications (1/3 width)  */}
                    <div className="lg:col-span-1 space-y-6">
                        {/*  Notifications  */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h3>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                        <Icon name="check-circle" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-800 font-medium"><span className="font-bold">Repayment Received</span> for John Doe (Term 1)</p>
                                        <p className="text-xs text-slate-400 mt-1">2 days ago</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-50 text-brand flex items-center justify-center flex-shrink-0">
                                        <Icon name="file-plus" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-800 font-medium">New application drafted for <span className="font-bold">Foster Prime Schools</span></p>
                                        <p className="text-xs text-slate-400 mt-1">5 days ago</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Icon name="bell" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-800 font-medium">Reminder: Next repayment due in 7 days</p>
                                        <p className="text-xs text-slate-400 mt-1">1 week ago</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="w-full mt-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-sm transition-colors">
                                View All Activity
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-10"></div>
            </div>
        </main>
    </div>

    

    </div>
  );
};

export default ParentDashboardPage;
