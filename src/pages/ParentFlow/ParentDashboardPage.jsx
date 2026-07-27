import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import DataTable from '../../components/DataTable';
import { useAuth } from '../../context/AuthContext';
import { mockApplications, mockParentAccounts } from '../../services/mockData';

const ParentDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Find parent data (fallback if not found)
  const parentData = mockParentAccounts.find(p => p.id === 'PAR-001') || mockParentAccounts[0];
  const myApplications = mockApplications.filter(app => app.parentName === parentData.name);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [activeTab]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const appColumns = [
    { header: "App ID", accessor: "id", render: (row) => <div className="font-mono text-xs">{row.id}</div> },
    { header: "School", accessor: "schoolName", render: (row) => <div className="font-bold">{row.schoolName}</div> },
    { header: "Amount", accessor: "amount", render: (row) => `₦${row.amount.toLocaleString()}` },
    { header: "Date", accessor: "date" },
    { header: "Status", accessor: "status", render: (row) => (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand/10 text-brand">
        {row.status.replace(/_/g, ' ').toUpperCase()}
      </span>
    )}
  ];

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="h-24 flex items-center px-8 border-b border-transparent shrink-0">
          <Link to="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
            <img src="/logo.png" alt="Skulcredit Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-extrabold text-brand leading-none">Skulcredit</h1>
              <p className="text-[10px] text-brand/70 font-semibold tracking-wide">Pathway to excel</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all ${activeTab === 'dashboard' ? 'bg-brand text-white shadow-[0_4px_12px_rgba(136,19,55,0.2)]' : 'text-slate-700 hover:bg-slate-50 hover:text-brand group'}`}>
            <Icon name="layout-dashboard" className={`w-5 h-5 ${activeTab === 'dashboard' ? '' : 'text-slate-500 group-hover:text-brand'}`} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('applications')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all ${activeTab === 'applications' ? 'bg-brand text-white shadow-[0_4px_12px_rgba(136,19,55,0.2)]' : 'text-slate-700 hover:bg-slate-50 hover:text-brand group'}`}>
            <Icon name="file-text" className={`w-5 h-5 ${activeTab === 'applications' ? '' : 'text-slate-500 group-hover:text-brand'}`} /> Applications
          </button>
          <button onClick={() => setActiveTab('repayment')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all ${activeTab === 'repayment' ? 'bg-brand text-white shadow-[0_4px_12px_rgba(136,19,55,0.2)]' : 'text-slate-700 hover:bg-slate-50 hover:text-brand group'}`}>
            <Icon name="credit-card" className={`w-5 h-5 ${activeTab === 'repayment' ? '' : 'text-slate-500 group-hover:text-brand'}`} /> Repayment
          </button>
          <button onClick={() => setActiveTab('verification')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all ${activeTab === 'verification' ? 'bg-brand text-white shadow-[0_4px_12px_rgba(136,19,55,0.2)]' : 'text-slate-700 hover:bg-slate-50 hover:text-brand group'}`}>
            <Icon name="shield-check" className={`w-5 h-5 ${activeTab === 'verification' ? '' : 'text-slate-500 group-hover:text-brand'}`} /> Verification
          </button>
          <button onClick={() => setActiveTab('support')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all ${activeTab === 'support' ? 'bg-brand text-white shadow-[0_4px_12px_rgba(136,19,55,0.2)]' : 'text-slate-700 hover:bg-slate-50 hover:text-brand group'}`}>
            <Icon name="headphones" className={`w-5 h-5 ${activeTab === 'support' ? '' : 'text-slate-500 group-hover:text-brand'}`} /> Support
          </button>
        </nav>

        <div className="p-4 mb-4 border-t border-slate-100 shrink-0">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold">PT</div>
              <div>
                <p className="text-sm font-bold text-slate-900 line-clamp-1">{parentData.name}</p>
                <p className="text-xs text-slate-500 line-clamp-1">Parent Account</p>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-red-50 hover:text-red-600 transition-colors group">
            <Icon name="log-out" className="w-5 h-5 text-slate-500 group-hover:text-red-600 transition-colors" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#F8FAFC]">
        
        {/* Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 md:px-10 z-10 shrink-0">
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 relative">
          
          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
              
              {/* Welcome Banner */}
              <div className="bg-brand rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg shadow-brand/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <div className="relative z-10 space-y-2">
                  <h2 className="text-2xl md:text-4xl font-extrabold">Welcome back, {parentData.name.split(' ')[0]} 👋</h2>
                  <p className="text-brand-50/80 font-medium max-w-md text-sm md:text-base">Ensure your child's education never pauses. Fast, secure, and flexible fee financing.</p>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                  <Link to="/parent/eligibility">
                    <button className="w-full md:w-auto bg-white text-brand hover:bg-slate-50 font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                      Start Loan Application
                      <Icon name="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center"><Icon name="file-text" className="w-5 h-5" /></div>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-md">Pending</span>
                  </div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Pending Applications</h4>
                  <p className="text-2xl font-extrabold text-slate-900">{myApplications.filter(a => a.status === 'pending_school_approval').length}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center"><Icon name="check-circle" className="w-5 h-5" /></div>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">Active</span>
                  </div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Approved Applications</h4>
                  <p className="text-2xl font-extrabold text-slate-900">{myApplications.filter(a => a.status === 'disbursed').length}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand flex items-center justify-center"><Icon name="credit-card" className="w-5 h-5" /></div>
                  </div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Total Financed</h4>
                  <p className="text-2xl font-extrabold text-slate-900">₦{myApplications.reduce((acc, a) => acc + a.amount, 0).toLocaleString()}</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand/40 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center"><Icon name="calendar" className="w-5 h-5" /></div>
                  </div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Next Installment</h4>
                  <p className="text-2xl font-extrabold text-slate-900">Nov 15</p>
                  <p className="text-xs text-slate-400 mt-2 font-medium">₦83,333 Due</p>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Current Application Progress</h3>
                      <p className="text-sm text-slate-500 font-medium mt-1">Application ID: {myApplications[0]?.id}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100"></div>
                    <div className="absolute left-6 top-8 h-1/2 w-0.5 bg-brand"></div>
                    <div className="space-y-8 relative">
                      <div className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]"><Icon name="check" className="w-5 h-5" /></div>
                        <div className="pt-3">
                          <h4 className="text-slate-900 font-bold">KYC Submitted & Approved</h4>
                          <p className="text-sm text-slate-500 mt-1">Identity verification successfully completed.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]"><Icon name="check" className="w-5 h-5" /></div>
                        <div className="pt-3">
                          <h4 className="text-slate-900 font-bold">Credit Assessment Passed</h4>
                          <p className="text-sm text-slate-500 mt-1">You are eligible for the requested loan amount.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-full border-2 border-brand bg-white text-brand flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]">
                          <div className="w-3 h-3 bg-brand rounded-full animate-pulse"></div>
                        </div>
                        <div className="pt-3">
                          <h4 className="text-brand font-bold">School Approval Pending</h4>
                          <p className="text-sm text-slate-500 mt-1">Waiting for the school to verify the student.</p>
                          <span className="inline-block mt-3 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-lg border border-amber-200">Pending Review</span>
                        </div>
                      </div>
                      <div className="flex gap-6 group opacity-40">
                        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]"><Icon name="credit-card" className="w-5 h-5" /></div>
                        <div className="pt-3">
                          <h4 className="text-slate-500 font-bold">Service Fee & Repayment Setup</h4>
                          <p className="text-sm text-slate-400 mt-1">Pay the fee and set up auto-debit.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 group opacity-40">
                        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_4px_white]"><Icon name="send" className="w-5 h-5" /></div>
                        <div className="pt-3">
                          <h4 className="text-slate-500 font-bold">Loan Disbursed & Active</h4>
                          <p className="text-sm text-slate-400 mt-1">Funds disbursed to school. Repayments start soon.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Activity</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0"><Icon name="check" className="w-5 h-5" /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Identity Verified</p>
                        <p className="text-xs text-slate-500 mt-1">KYC completed successfully</p>
                        <p className="text-xs text-slate-400 mt-2 font-medium">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">My Applications</h2>
              <DataTable columns={appColumns} data={myApplications} searchPlaceholder="Search applications..." />
            </div>
          )}

          {activeTab === 'repayment' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Repayment Schedule</h2>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 text-center py-12">
                <Icon name="credit-card" className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-700">No active repayment schedules</h3>
                <p className="text-slate-500 mt-2 text-sm">Once an application is approved and disbursed, your EMI schedule will appear here.</p>
              </div>
            </div>
          )}

          {activeTab === 'verification' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Verification Status</h2>
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Icon name="shield-check" className="w-6 h-6" /></div>
                  <div>
                    <h3 className="text-emerald-800 font-bold text-lg">Identity Verified</h3>
                    <p className="text-emerald-600/80 text-sm mt-1">Your KYC documents have been reviewed and approved.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
             <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Help & Support</h2>
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
               <p className="text-slate-600 mb-4">Need assistance? Contact our support team.</p>
               <button className="bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-light transition-colors">Contact Us</button>
             </div>
           </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default ParentDashboardPage;
