import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolVerificationSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('settings');

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [activeTab]);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    <div className="fixed top-[10%] left-[20%] w-[40vw] h-[40vw] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    <div className="fixed bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-emerald-200/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

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
            <Link to="/school/dashboard" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="layout-dashboard" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Dashboard
            </Link>
            
            <Link to="/school/students" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="users" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Students
            </Link>

            <Link to="/school/applications" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="file-text" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Applications
            </Link>

            <button onClick={() => setActiveTab('verification')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'verification' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
                <Icon name="shield-check" className={`w-5 h-5 transition-colors ${activeTab === 'verification' ? '' : 'text-slate-400 group-hover:text-brand'}`} /> Verification
            </button>

            <Link to="/school/disbursement" className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-slate-600 font-semibold hover:bg-white hover:shadow-sm hover:text-brand transition-all group">
                <Icon name="credit-card" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Disbursement
            </Link>

            <button onClick={() => setActiveTab('support')} className={`w-full flex items-center gap-3 px-4 py-3.5 mt-6 rounded-2xl font-semibold transition-all group ${activeTab === 'support' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
                <Icon name="headphones" className={`w-5 h-5 transition-colors ${activeTab === 'support' ? '' : 'text-slate-400 group-hover:text-brand'}`} /> Support
            </button>
        </nav>

        <div className="p-4 mb-4 space-y-1">
            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'settings' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
                <Icon name="settings" className={`w-5 h-5 transition-colors ${activeTab === 'settings' ? '' : 'text-slate-400 group-hover:text-brand'}`} /> Settings
            </button>
            <Link to="/school/auth" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-semibold hover:bg-rose-50 hover:text-brand transition-all group">
                <Icon name="log-out" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Logout
            </Link>
        </div>
    </aside>

    <div className="flex-1 flex flex-col h-full z-10">
        
        <header className="h-24 bg-transparent flex items-center justify-end px-6 md:px-10 sticky top-0 z-10">
            <button className="md:hidden p-2 text-slate-600 bg-white/50 backdrop-blur-md rounded-lg shadow-sm mr-auto">
                <Icon name="menu" className="w-6 h-6" />
            </button>

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

        <main className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pb-12 relative">
            <div className="max-w-[1000px] mx-auto space-y-8 pt-4">
                
                <div className="animate-fade-in-up stagger-1">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6" id="page-title">Profile Settings</h1>
                    
                    <div className="flex gap-8 border-b border-slate-300/50 mb-8 overflow-x-auto hide-scrollbar">
                        <button className={`tab-btn pb-3 font-bold text-sm flex items-center gap-2 whitespace-nowrap ${activeTab === 'settings' ? 'active text-brand border-b-2 border-brand' : 'text-slate-500 hover:text-slate-800'}`} onClick={() => setActiveTab('settings')}>
                            <Icon name="settings" className="w-4 h-4" /> Profile Settings
                        </button>
                        <button className={`tab-btn pb-3 font-bold text-sm flex items-center gap-2 whitespace-nowrap ${activeTab === 'verification' ? 'active text-brand border-b-2 border-brand' : 'text-slate-500 hover:text-slate-800'}`} onClick={() => setActiveTab('verification')}>
                            <Icon name="shield-check" className="w-4 h-4" /> Verification Status
                        </button>
                        <button className={`tab-btn pb-3 font-bold text-sm flex items-center gap-2 whitespace-nowrap ${activeTab === 'support' ? 'active text-brand border-b-2 border-brand' : 'text-slate-500 hover:text-slate-800'}`} onClick={() => setActiveTab('support')}>
                            <Icon name="headphones" className="w-4 h-4" /> Help & Support
                        </button>
                    </div>
                </div>

                <div className={`animate-fade-in stagger-2 ${activeTab === 'settings' ? 'block' : 'hidden'}`}>
                    <div className="glass-card rounded-[2rem] p-6 md:p-10">
                        <h2 className="text-xl font-bold text-slate-900 mb-1">Account Information</h2>
                        <p className="text-sm text-slate-500 font-medium mb-8">Update your administrative contact details and security preferences.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">School Admin Name</label>
                                    <input type="text" value="John Administrator" required
                                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium shadow-sm text-slate-800" />
                                </div>
                                
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center justify-between">
                                        Email Address <span className="text-xs text-brand font-medium">Locked (Contact Support to edit)</span>
                                    </label>
                                    <input type="email" value="admin@fosterprime.edu.ng" required readonly
                                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-100/50 border border-slate-200 outline-none text-sm text-slate-500 cursor-not-allowed" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Primary Phone Number</label>
                                    <input type="tel" value="+234-803 123 4567" required
                                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium shadow-sm text-slate-800" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Secondary Phone</label>
                                    <input type="tel" placeholder="Optional"
                                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium shadow-sm text-slate-800" />
                                </div>
                                
                                <div className="md:col-span-2 pt-4">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Security</label>
                                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                                        <input type="password" value="********" readonly
                                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-100/50 border border-slate-200 outline-none text-sm tracking-widest text-slate-500 cursor-not-allowed" />
                                        <button type="button" className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 hover:border-brand text-slate-700 hover:text-brand font-bold text-sm rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
                                            <Icon name="lock" className="w-4 h-4" /> Change Password
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-6 border-t border-slate-200/60 flex justify-end">
                                <button type="submit" className="bg-gradient-to-r from-brand to-brand-light hover:shadow-[0_8px_16px_rgba(136,19,55,0.25)] text-white font-bold py-3.5 px-8 rounded-2xl transition-all active:scale-95 flex items-center gap-2">
                                    <Icon name="save" className="w-4 h-4" /> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`animate-fade-in stagger-2 ${activeTab === 'verification' ? 'block' : 'hidden'}`}>
                    
                    <div className="glass-card rounded-[2rem] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden mb-8 border-emerald-200/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
                        
                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 flex-shrink-0">
                                <Icon name="check-circle-2" className="w-7 h-7" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Fully Verified</h2>
                                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">Tier 1 Partner</span>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Your institution is authorized to receive instant disbursements.</p>
                            </div>
                        </div>

                        <button onClick={() => {}} className="relative z-10 bg-white border border-slate-200 hover:border-brand/30 hover:text-brand text-slate-700 font-bold py-3 px-6 rounded-xl transition-all shadow-sm whitespace-nowrap flex items-center gap-2">
                            <Icon name="settings" className="w-4 h-4" /> Edit Settings
                        </button>
                    </div>

                    <div className="glass-card rounded-[2rem] p-8 mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                                <Icon name="building-2" className="w-5 h-5 text-brand" /> Registered Details
                            </h3>
                            <button onClick={() => {}} className="text-brand font-bold text-sm flex items-center gap-1 hover:underline">
                                Request Update <Icon name="arrow-right" className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-slate-200/50">
                                <span className="text-sm font-bold text-slate-500">Official Name</span>
                                <span className="text-base font-extrabold text-slate-900">Foster Prime Schools</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-slate-200/50">
                                <span className="text-sm font-bold text-slate-500">Physical Address</span>
                                <span className="text-base font-extrabold text-slate-900 text-right">123 Education Avenue, Lagos</span>
                            </div>
                            
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-4 pt-2">Compliance Documents</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-white/50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm font-bold text-slate-700">Registration Certificate</span>
                                </div>
                                <div className="bg-white/50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm font-bold text-slate-700">Accreditation Letter</span>
                                </div>
                                <div className="bg-white/50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm font-bold text-slate-700">CAC Certification</span>
                                </div>
                                <div className="bg-white/50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm font-bold text-slate-700">State Certification</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2rem] p-8">
                        <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                            <Icon name="landmark" className="w-5 h-5 text-brand" /> Settlement Account
                        </h3>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Guaranty Trust Bank</p>
                                    <p className="text-2xl font-black text-slate-900 tracking-widest font-mono">0123456789</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                                    <Icon name="lock" className="w-5 h-5 text-slate-400" />
                                </div>
                            </div>
                            <div className="border-t border-slate-200 pt-4">
                                <p className="text-xs text-slate-500 font-bold uppercase mb-1">Account Name</p>
                                <p className="text-sm font-extrabold text-slate-800">Foster Prime Schools</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-slate-500 font-medium max-w-sm">
                                Settlement accounts are locked to prevent fraud. Modifications require a manual security check.
                            </p>
                            <button onClick={() => {}} className="bg-white border border-slate-200 hover:border-brand text-slate-700 hover:text-brand font-bold py-2.5 px-5 rounded-xl transition-all shadow-sm text-sm whitespace-nowrap">
                                Request Bank Change
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`animate-fade-in stagger-2 ${activeTab === 'support' ? 'block' : 'hidden'}`}>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                        <button className="bg-gradient-to-br from-brand to-brand-light text-white p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:-translate-y-1 transition-all shadow-[0_8px_16px_rgba(136,19,55,0.2)] group text-left">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon name="plus-circle" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-extrabold text-base block mb-1">Open Ticket</span>
                                <span className="text-xs text-brand-50 font-medium">Report a specific issue</span>
                            </div>
                        </button>

                        <button className="glass-card p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:-translate-y-1 transition-all group text-left">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors">
                                <Icon name="book-open" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-extrabold text-slate-900 text-base block mb-1">Help Center</span>
                                <span className="text-xs text-slate-500 font-medium">Read FAQs and guides</span>
                            </div>
                        </button>

                        <button className="glass-card p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:-translate-y-1 transition-all group text-left">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                <Icon name="message-square" className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-extrabold text-slate-900 text-base block mb-1">Live Chat</span>
                                <span className="text-xs text-slate-500 font-medium">Talk to an agent now</span>
                            </div>
                        </button>
                    </div>

                    <div className="glass-card rounded-[2rem] p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">Ticket History</h2>
                            <button className="text-sm font-bold text-brand hover:underline">View All</button>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/80 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand/30 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                                        #104
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Disbursement Delay Inquiry</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5">Updated 2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 sm:justify-end">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-lg">Open</span>
                                    <Icon name="chevron-right" className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>

                            <div className="bg-white/80 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand/30 transition-colors cursor-pointer opacity-70">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center font-bold text-xs shrink-0">
                                        #082
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Update Bank Details</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5">Resolved on 10 Nov</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 sm:justify-end">
                                    <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-lg">Closed</span>
                                    <Icon name="chevron-right" className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>

    

    </div>
  );
};

export default SchoolVerificationSettingsPage;
