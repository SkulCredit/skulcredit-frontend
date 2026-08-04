import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Icon from '../../components/Icon';
import DataTable from '../../components/DataTable';
import { useAuth } from '../../context/AuthContext';
import { dashboardService } from '../../services/dashboardService';

const SchoolDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboardData, setDashboardData] = useState({ school: {}, applications: [], students: [], disbursements: [] });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const myApplications = dashboardData.applications || [];
  const myDisbursements = dashboardData.disbursements || [];
  const totalStudents = dashboardData.students?.length || 0;

  // States: pending, approved, active
  const [dashboardStatus, setDashboardStatus] = useState('active');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await dashboardService.getSchoolDashboard();
        setDashboardData(data);
      } catch (err) {
        console.error("Failed to fetch dashboard:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('status')) {
      setDashboardStatus(params.get('status'));
    }
  }, [location]);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [activeTab, dashboardStatus]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const completeRegistration = (e) => {
    e.preventDefault();
    setDashboardStatus('active');
    navigate('/school/dashboard'); // clean url
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
            <Icon name="layout-dashboard" className={`w-5 h-5 ${activeTab === 'dashboard' ? '' : 'text-slate-400 group-hover:text-brand transition-colors'}`} /> Overview
          </button>
          
          {dashboardStatus === 'active' ? (
            <>
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
            </>
          ) : (
            <>
              <button className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group text-slate-400 opacity-50 cursor-not-allowed`}>
                <Icon name="users" className="w-5 h-5" /> Students
              </button>
              <button className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group text-slate-400 opacity-50 cursor-not-allowed`}>
                <Icon name="file-text" className="w-5 h-5" /> Applications
              </button>
            </>
          )}

          <button className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all group text-slate-600 hover:bg-white hover:shadow-sm hover:text-brand mt-4`}>
             <Icon name="headset" className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" /> Support
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
                {dashboardStatus === 'approved' && <span className="absolute top-2 right-2 w-2 h-2 bg-brand rounded-full border-2 border-white"></span>}
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
          
          {/* ================== PENDING DASHBOARD ================== */}
          {dashboardStatus === 'pending' && activeTab === 'dashboard' && (
            <div className="max-w-[800px] mx-auto space-y-8 pt-4 animate-fade-in-up">
              
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                 <Icon name="clock" className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                 <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-1">Your application is currently under review.</h3>
                    <p className="text-amber-700 text-sm font-medium">Verification usually takes up to 24 hours. We'll notify you once a decision has been made.</p>
                 </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6">Application Timeline</h2>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Icon name="check" className="w-4 h-4" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900">Application Submitted</div>
                            </div>
                            <div className="text-sm text-slate-500">School info and documents received.</div>
                        </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Icon name="loader-2" className="w-4 h-4 animate-spin" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-amber-100 bg-white shadow-sm">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-amber-600">Review Status</div>
                            </div>
                            <div className="text-sm text-slate-500">In progress by compliance team.</div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group opacity-40">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Icon name="building-2" className="w-4 h-4" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-700">Decision & Registration</div>
                            </div>
                            <div className="text-sm text-slate-500">Pending review outcome.</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                   <button onClick={() => setDashboardStatus('approved')} className="text-xs font-bold text-brand border border-brand/20 bg-brand/5 px-4 py-2 rounded-lg hover:bg-brand/10 transition-colors">
                     [Prototype] Simulate Approval
                   </button>
                </div>
              </div>
            </div>
          )}

          {/* ================== APPROVED DASHBOARD ================== */}
          {dashboardStatus === 'approved' && activeTab === 'dashboard' && (
            <div className="max-w-[800px] mx-auto space-y-8 pt-4 animate-fade-in-up">
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                      <Icon name="party-popper" className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-900 text-xl mb-1">Your school has been approved! 🎉</h3>
                        <p className="text-emerald-700 text-sm font-medium">Please complete your registration to activate your dashboard.</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6 border-b border-slate-100 pb-4">Complete Registration</h2>
                
                <form onSubmit={completeRegistration} className="space-y-6">
                   <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                       <Icon name="building-2" className="w-4 h-4 text-brand" /> Bank Account Details
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5">Bank Name*</label>
                           <input type="text" placeholder="e.g. Zenith Bank" required
                               className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm shadow-sm" />
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-700 mb-1.5">Account Number*</label>
                           <input type="text" placeholder="0123456789" maxLength="10" required
                               className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm shadow-sm tracking-widest" />
                       </div>
                       <div className="md:col-span-2">
                           <label className="block text-xs font-bold text-slate-700 mb-1.5">Account Name (Must match School Name)*</label>
                           <input type="text" placeholder="Official Account Name" required
                               className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm shadow-sm" />
                       </div>
                   </div>

                   <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 pt-4 border-t border-slate-100">
                       <Icon name="file-text" className="w-4 h-4 text-brand" /> Additional School Details
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       <div className="md:col-span-2">
                           <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Contact Person for Finance*</label>
                           <input type="text" placeholder="Full Name" required
                               className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm shadow-sm" />
                       </div>
                   </div>

                   <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 mt-4 group">
                       Complete Setup & Activate Dashboard <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </button>
                </form>
              </div>
            </div>
          )}

          {/* ================== FULL DASHBOARD ================== */}
          {dashboardStatus === 'active' && activeTab === 'dashboard' && isLoading && (
             <div className="flex h-64 items-center justify-center">
                 <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
             </div>
          )}

          {dashboardStatus === 'active' && activeTab === 'dashboard' && !isLoading && (
            <div className="max-w-[1200px] mx-auto space-y-8 pt-4 animate-fade-in-up">
              
              <div className="relative overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 flex-shrink-0">
                    <Icon name="shield-check" className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">Dashboard Activated</h2>
                    <p className="text-slate-500 font-medium">Your institution is verified. You are now ready to process applications and receive direct disbursements.</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm border border-brand/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="users" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Total Students</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{totalStudents}</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-500/10 group-hover:scale-110 transition-transform duration-300"><Icon name="file-clock" className="w-6 h-6" /></div>
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-1">New Applications</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{myApplications.filter(a => a.status === 'pending_school_approval').length}</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm border border-blue-500/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="file-check-2" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Verified Apps</p>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{myApplications.filter(a => a.status === 'disbursed').length}</h3>
                </div>
                <div className="glass-card rounded-[2rem] bg-white/40 p-6 relative overflow-hidden group cursor-pointer border border-white">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-500/10 mb-4 group-hover:scale-110 transition-transform duration-300"><Icon name="badge-dollar-sign" className="w-6 h-6" /></div>
                  <p className="text-sm font-bold text-slate-500 mb-1">Disbursed Funds</p>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">₦{myDisbursements.reduce((acc, d) => acc + d.amount, 0).toLocaleString()}</h3>
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
                      <p className="text-xs text-brand-50 font-medium">{myApplications.length} requests</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs content rendering logic - only accessible when active */}
          {dashboardStatus === 'active' && activeTab === 'applications' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Student Applications</h2>
              <DataTable columns={appColumns} data={myApplications} searchPlaceholder="Search applications by ID or Student Name..." />
            </div>
          )}

          {dashboardStatus === 'active' && activeTab === 'students' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Students Directory</h2>
              <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white text-center shadow-sm">
                 <Icon name="users" className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                 <h3 className="text-lg font-bold text-slate-700">Student list will appear here</h3>
                 <p className="text-sm text-slate-500">Integration with school database pending.</p>
              </div>
            </div>
          )}

          {dashboardStatus === 'active' && activeTab === 'verification' && (
             <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
             <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Verification</h2>
             <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white text-center shadow-sm">
                <Icon name="shield-check" className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-emerald-700">School KYC Verified</h3>
                <p className="text-sm text-slate-500">Your institution has been successfully verified by SkulCredit.</p>
             </div>
           </div>
          )}

          {dashboardStatus === 'active' && activeTab === 'disbursements' && (
            <div className="max-w-[1200px] mx-auto space-y-6 pt-4 animate-fade-in-up">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Disbursements</h2>
              <DataTable columns={[
                { header: "Disbursement ID", accessor: "id" },
                { header: "Amount", accessor: "amount", render: (row) => `₦${row.amount.toLocaleString()}` },
                { header: "Status", accessor: "status", render: (row) => <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">{row.status.toUpperCase()}</span> },
                { header: "Date", accessor: "date" },
              ]} data={myDisbursements} searchPlaceholder="Search disbursements..." />
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default SchoolDashboardPage;
