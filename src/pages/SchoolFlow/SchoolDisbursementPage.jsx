import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolDisbursementPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
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

            <Link to="/school/applications" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="file-text" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Applications
            </Link>

            <Link to="/school/settings" className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand transition-colors group">
                <Icon name="shield-check" className="w-5 h-5 text-slate-500 group-hover:text-brand transition-colors" /> Verification
            </Link>

            <Link to="/school/disbursement" className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-brand text-white font-semibold shadow-[0_4px_12px_rgba(136,19,55,0.2)] transition-all">
                <Icon name="credit-card" className="w-5 h-5" /> Disbursement
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

    <div className="flex-1 flex flex-col h-full relative">
        
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-end px-6 md:px-10 z-10 sticky top-0">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors mr-auto">
                <Icon name="menu" className="w-6 h-6" />
            </button>

            <div className="hidden lg:block relative w-96 mr-auto animate-fade-in-up">
                <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" id="searchInput" placeholder="Search by student name or Ref ID..." 
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
                
                <div className="animate-fade-in-up stagger-1">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Disbursement</h1>
                        <p className="text-sm text-slate-500 font-medium">Track all tuition payments successfully remitted to your school.</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            
                            <div className="pt-4 md:pt-0">
                                <p className="text-sm font-bold text-slate-500 mb-2 flex items-center gap-2">
                                    <Icon name="bar-chart" className="w-4 h-4" /> Total Disbursed
                                </p>
                                <h2 className="text-3xl font-extrabold text-brand">₦4,250,000</h2>
                            </div>

                            <div className="pt-6 md:pt-0 md:pl-12">
                                <p className="text-sm font-bold text-slate-500 mb-2 flex items-center gap-2">
                                    <Icon name="clock" className="w-4 h-4" /> Pending Disbursement
                                </p>
                                <h2 className="text-3xl font-extrabold text-brand">₦320,000</h2>
                            </div>

                            <div className="pt-6 md:pt-0 md:pl-12">
                                <p className="text-sm font-bold text-slate-500 mb-2 flex items-center gap-2">
                                    <Icon name="calendar-check" className="w-4 h-4" /> Last Payment
                                </p>
                                <h2 className="text-3xl font-extrabold text-brand">20 Nov 2025</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-in-up stagger-2">
                    <h2 className="text-xl font-bold text-slate-900">Disbursement History</h2>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-brand text-white text-sm font-bold rounded-xl shadow-sm hover:bg-brand-hover transition-all flex items-center justify-center gap-2">
                            <Icon name="calendar" className="w-4 h-4" /> All Status
                        </button>
                    </div>
                </div>

                <div className="space-y-3 animate-fade-in-up stagger-3 pb-10" id="transaction-list">
                    
                    <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <div className="col-span-3">Student</div>
                        <div className="col-span-2">Amount</div>
                        <div className="col-span-2">Date</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2 text-center">Payment Ref</div>
                        <div className="col-span-1 text-right">Action</div>
                    </div>

                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">AN</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">Amaka N.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦150,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">20 Nov</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 w-max">
                                Completed
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-23832</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button onClick={() => {}} className="px-5 py-1.5 bg-brand-50 hover:bg-brand text-brand hover:text-white border border-brand/20 font-bold text-xs rounded-lg transition-colors">
                                View
                            </button>
                        </div>
                    </div>

                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">JO</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">John O.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦200,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">18 Nov</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 w-max">
                                Completed
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-23835</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button onClick={() => {}} className="px-5 py-1.5 bg-brand-50 hover:bg-brand text-brand hover:text-white border border-brand/20 font-bold text-xs rounded-lg transition-colors">
                                View
                            </button>
                        </div>
                    </div>

                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-2xl"></div>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">SA</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">Sarah A.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦120,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">Pending</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 w-max">
                                Pending
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-23836</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button className="px-5 py-1.5 bg-slate-100 text-slate-400 font-bold text-xs rounded-lg cursor-not-allowed">
                                View
                            </button>
                        </div>
                    </div>

                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">IK</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">Ibrahim K.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦180,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">19 Nov</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 w-max">
                                Completed
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-23837</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button onClick={() => {}} className="px-5 py-1.5 bg-brand-50 hover:bg-brand text-brand hover:text-white border border-brand/20 font-bold text-xs rounded-lg transition-colors">
                                View
                            </button>
                        </div>
                    </div>

                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-2xl"></div>
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">CP</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">Chioma P.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦95,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">17 Nov</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 w-max">
                                Pending
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-238390</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button className="px-5 py-1.5 bg-slate-100 text-slate-400 font-bold text-xs rounded-lg cursor-not-allowed">
                                View
                            </button>
                        </div>
                    </div>
                    
                    <div className="list-row trxn-item bg-white border border-slate-200 rounded-2xl p-5 lg:p-4 lg:px-6 relative flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center">
                        <div className="col-span-3 flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0">YM</div>
                            <h4 className="font-extrabold text-slate-900 text-sm lg:text-base trxn-name">Yusuf M.</h4>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Amount</span>
                            <p className="text-sm font-black text-slate-800">₦200,000</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Date</span>
                            <p className="text-sm font-bold text-slate-600">19 Nov</p>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 w-max">
                                Completed
                            </span>
                        </div>
                        <div className="col-span-2 text-left lg:text-center w-full">
                            <span className="text-xs text-slate-400 lg:hidden font-bold uppercase block mb-1">Ref</span>
                            <p className="text-xs font-mono text-slate-500 trxn-ref">SCH-238323</p>
                        </div>
                        <div className="col-span-1 flex justify-start lg:justify-end w-full mt-2 lg:mt-0">
                            <button onClick={() => {}} className="px-5 py-1.5 bg-brand-50 hover:bg-brand text-brand hover:text-white border border-brand/20 font-bold text-xs rounded-lg transition-colors">
                                View
                            </button>
                        </div>
                    </div>

                </div>

                <div className="flex gap-4 animate-fade-in-up stagger-4 pb-12">
                    <button className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-brand font-bold rounded-xl transition-colors flex items-center gap-2 shadow-sm text-sm">
                        <Icon name="download" className="w-4 h-4" /> Export CSV
                    </button>
                    <button className="px-6 py-3 bg-brand hover:bg-brand-hover text-white font-bold rounded-xl transition-colors flex items-center gap-2 shadow-sm text-sm">
                        <Icon name="file-text" className="w-4 h-4" /> Download Statement
                    </button>
                </div>
            </div>
        </main>
    </div>

    <div id="receipt-overlay" className="fixed inset-0 z-50 hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity opacity-0" id="receipt-backdrop" onClick={() => {}}></div>
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAFAFA] shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="receipt-panel">
            
            <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-white">
                <div>
                    <h2 className="text-lg font-extrabold text-slate-900">Transaction Receipt</h2>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">Powered by SkulCredit</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 bg-slate-50 rounded-full shadow-sm border border-slate-100" onClick={() => {}}>
                    <Icon name="x" className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-8 text-center bg-gradient-to-b from-emerald-50 to-white">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                            <Icon name="check" className="w-8 h-8 stroke-[3]" />
                        </div>
                        <p className="text-sm font-bold text-slate-500 mb-1">Transfer Successful</p>
                        <h2 className="text-4xl font-black text-slate-900" id="receipt-amount">₦0</h2>
                    </div>

                    <div className="receipt-divider w-full opacity-60"></div>

                    <div className="p-8 space-y-5">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">To</span>
                            <span className="text-sm font-bold text-slate-900 text-right">Foster Prime Schools<br /><span className="text-xs text-slate-400 font-medium font-mono">0123456789 - GTBank</span></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">From</span>
                            <span className="text-sm font-bold text-slate-900 text-right">SkulCredit<br /><span className="text-xs text-slate-400 font-medium font-mono">Tuition Disbursement</span></span>
                        </div>
                        
                        <div className="w-full border-t border-slate-100 my-4"></div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Student</span>
                            <span className="text-sm font-bold text-slate-900" id="receipt-student">Name</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Date</span>
                            <span className="text-sm font-bold text-slate-900" id="receipt-date">Date</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Reference</span>
                            <span className="text-sm font-bold text-slate-900 font-mono" id="receipt-ref">REF</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-6 border-t border-slate-200 bg-white">
                <button className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2" onClick={() => {}}>
                    <Icon name="download" className="w-5 h-5" /> Download Receipt
                </button>
            </div>
        </div>
    </div>

    

    </div>
  );
};

export default SchoolDisbursementPage;
