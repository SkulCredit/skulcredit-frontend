import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import DataTable from '../../components/DataTable';
import { useAuth } from '../../context/AuthContext';
import { mockApplications, mockDisbursements } from '../../services/mockData';

const SchoolDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
    { header: "Parent Name", accessor: "parentName", render: (row) => <div className="font-bold">{row.parentName}</div> },
    { header: "Amount", accessor: "amount", render: (row) => `₦${row.amount.toLocaleString()}` },
    { header: "Date", accessor: "date" },
    { header: "Status", accessor: "status", render: (row) => (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
        {row.status.replace(/_/g, ' ').toUpperCase()}
      </span>
    )}
  ];

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Sidebar */}
      <aside className="w-[280px] bg-white/60 backdrop-blur-2xl border-r border-white flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] shrink-0">
        <div className="h-24 flex items-center px-8 shrink-0">
          <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 duration-300">
            <img src="/logo.png" alt="Skulcredit Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-extrabold text-brand leading-none tracking-tight">SkulCredit</h1>
              <p className="text-[9px] text-brand/70 font-bold uppercase tracking-widest mt-0.5">Partner Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
            <Icon name="layout-dashboard" className={`w-5 h-5 ${activeTab === 'dashboard' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Dashboard
          </button>
          
          <button onClick={() => setActiveTab('students')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'students' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
            <Icon name="users" className={`w-5 h-5 ${activeTab === 'students' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Students
          </button>

          <button onClick={() => setActiveTab('applications')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'applications' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
            <Icon name="file-text" className={`w-5 h-5 ${activeTab === 'applications' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Applications
          </button>

          <button onClick={() => setActiveTab('verification')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'verification' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
            <Icon name="shield-check" className={`w-5 h-5 ${activeTab === 'verification' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Verification
          </button>

          <button onClick={() => setActiveTab('disbursements')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group ${activeTab === 'disbursements' ? 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_8px_16px_rgba(136,19,55,0.25)]' : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand'}`}>
            <Icon name="credit-card" className={`w-5 h-5 ${activeTab === 'disbursements' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Disbursements
          </button>
        </nav>

        <div className="p-4 mb-4 space-y-1 shrink-0">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold">SC</div>
            <div>
              <p className="text-sm font-bold text-slate-900 line-clamp-1">{user?.name || 'School Admin'}</p>
              <p className="text-xs text-slate-500 line-clamp-1">Partner</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-600 font-semibold hover:bg-rose-50 hover:text-brand transition-all group">
            <Icon name="log-out" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden z-10">
        
        {/* Header */}
        <header className="h-24 bg-transparent flex items-center justify-end px-6 md:px-10 shrink-0">
          <button className="md:hidden p-2 text-slate-600 bg-white/50 backdrop-blur-md rounded-lg shadow-sm mr-auto">
            <Icon name="menu" className="w-6 h-6" />
          </button>

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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pb-12">
          
          {activeTab === 'dashboard' && (
            <div className="max-w-[1200px] mx-auto space-y-8 pt-4 animate-fade-in-up">
              
              {/* Premium Verification Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="users" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Total Students</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">140</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-500/10 group-hover:scale-110 transition-transform duration-300"><Icon name="file-clock" className="w-6 h-6" /></div>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-lg animate-pulse">Action Needed</span>
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-1">New Applications</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{mockApplications.filter(a => a.status === 'pending_school_approval').length}</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-blue-500/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="file-check-2" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Verified Apps</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">86</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-500/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="badge-dollar-sign" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Disbursed Funds</p>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">₦{mockDisbursements.reduce((acc, d) => acc + d.amount, 0).toLocaleString()}</h3>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-5">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <button onClick={() => setActiveTab('students')} className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group text-left">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors"><Icon name="user-plus" className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Add Student</h4>
                      <p className="text-xs text-slate-500 font-medium">Register new profile</p>
                    </div>
                  </button>
                  <button className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group text-left">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors"><Icon name="bar-chart-3" className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Generate Report</h4>
                      <p className="text-xs text-slate-500 font-medium">Download CSV data</p>
                    </div>
                  </button>
                  <button className="bg-white/80 backdrop-blur-md border border-white rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_12px_24px_-10px_rgba(136,19,55,0.1)] hover:-translate-y-1 transition-all duration-300 group text-left">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-brand-50 group-hover:text-brand transition-colors"><Icon name="headset" className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Get Support</h4>
                      <p className="text-xs text-slate-500 font-medium">Open a new ticket</p>
                    </div>
                  </button>
                  <button onClick={() => setActiveTab('applications')} className="bg-gradient-to-br from-brand to-brand-light rounded-3xl p-6 flex items-center gap-4 hover:shadow-[0_15px_30px_-10px_rgba(136,19,55,0.4)] hover:-translate-y-1 transition-all duration-300 group text-left">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform"><Icon name="arrow-right" className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Review Applications</h4>
                      <p className="text-xs text-brand-50 font-medium">{mockApplications.length} requests</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Student Applications</h2>
              <DataTable columns={appColumns} data={mockApplications} searchPlaceholder="Search applications by ID or Student Name..." />
            </div>
          )}

          {activeTab === 'students' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Students Directory</h2>
              <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white text-center shadow-sm">
                 <Icon name="users" className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                 <h3 className="text-lg font-bold text-slate-700">Student list will appear here</h3>
                 <p className="text-sm text-slate-500">Integration with school database pending.</p>
              </div>
            </div>
          )}

          {activeTab === 'verification' && (
             <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
             <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Verification</h2>
             <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white text-center shadow-sm">
                <Icon name="shield-check" className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-emerald-700">School KYC Verified</h3>
                <p className="text-sm text-slate-500">Your institution has been successfully verified by SkulCredit.</p>
             </div>
           </div>
          )}

          {activeTab === 'disbursements' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Disbursements</h2>
              <DataTable columns={[
                { header: "Disbursement ID", accessor: "id" },
                { header: "Amount", accessor: "amount", render: (row) => `₦${row.amount.toLocaleString()}` },
                { header: "Status", accessor: "status", render: (row) => <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">{row.status.toUpperCase()}</span> },
                { header: "Date", accessor: "date" },
              ]} data={mockDisbursements} searchPlaceholder="Search disbursements..." />
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default SchoolDashboardPage;
