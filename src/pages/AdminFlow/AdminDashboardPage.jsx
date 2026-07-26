import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import DataTable from '../../components/DataTable';
import { useAuth } from '../../context/AuthContext';
import { mockSchools, mockApplications, mockDisbursements } from '../../services/mockData';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const schoolColumns = [
    { header: "School Name", accessor: "name", render: (row) => <div className="font-bold text-slate-900">{row.name}</div> },
    { header: "Students", accessor: "studentCount" },
    { header: "Applications", accessor: "applicationCount" },
    { header: "Status", accessor: "status", render: (row) => (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === 'verified' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
        {row.status.toUpperCase()}
      </span>
    )}
  ];

  const appColumns = [
    { header: "App ID", accessor: "id", render: (row) => <div className="font-mono text-xs">{row.id}</div> },
    { header: "Parent", accessor: "parentName", render: (row) => <div className="font-bold">{row.parentName}</div> },
    { header: "School", accessor: "schoolName" },
    { header: "Amount", accessor: "amount", render: (row) => `₦${row.amount.toLocaleString()}` },
    { header: "Status", accessor: "status", render: (row) => (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">
        {row.status.replace(/_/g, ' ').toUpperCase()}
      </span>
    )}
  ];

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200 flex flex-col h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">
        <div className="h-20 flex items-center px-8 border-b border-slate-100 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo_nav.png" alt="SkulCredit" className="h-10 w-auto" />
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-4">System</div>
          <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            <Icon name="layout-dashboard" className="w-5 h-5" /> Overview
          </button>
          <button onClick={() => setActiveTab('schools')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'schools' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            <Icon name="building-2" className="w-5 h-5" /> Manage Schools
          </button>
          <button onClick={() => setActiveTab('applications')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'applications' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            <Icon name="file-text" className="w-5 h-5" /> All Applications
          </button>
          <button onClick={() => setActiveTab('disbursements')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'disbursements' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            <Icon name="send" className="w-5 h-5" /> Disbursements
          </button>
        </div>
        
        <div className="p-4 border-t border-slate-100 shrink-0">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">SA</div>
              <div>
                <p className="text-sm font-bold text-slate-900 line-clamp-1">{user?.name}</p>
                <p className="text-xs text-slate-500 line-clamp-1">Admin</p>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-colors">
            <Icon name="log-out" className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">System Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors relative">
              <Icon name="bell" className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform"><Icon name="building-2" className="w-16 h-16" /></div>
                  <h3 className="text-sm font-bold text-slate-500 mb-2">Total Schools</h3>
                  <div className="text-3xl font-black text-slate-900 mb-1">{mockSchools.length}</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform"><Icon name="file-text" className="w-16 h-16" /></div>
                  <h3 className="text-sm font-bold text-slate-500 mb-2">Applications</h3>
                  <div className="text-3xl font-black text-slate-900 mb-1">{mockApplications.length}</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform"><Icon name="activity" className="w-16 h-16" /></div>
                  <h3 className="text-sm font-bold text-slate-500 mb-2">Active Loans</h3>
                  <div className="text-3xl font-black text-slate-900 mb-1">₦{mockApplications.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Applications</h2>
                <DataTable columns={appColumns} data={mockApplications} searchPlaceholder="Search applications..." />
              </div>
            </div>
          )}

          {activeTab === 'schools' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Manage Schools</h2>
              <DataTable columns={schoolColumns} data={mockSchools} searchPlaceholder="Search schools..." />
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-bold text-slate-900 mb-4">All Applications</h2>
              <DataTable columns={appColumns} data={mockApplications} searchPlaceholder="Search applications by ID, Parent, or School..." />
            </div>
          )}

          {activeTab === 'disbursements' && (
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Disbursements</h2>
              <DataTable columns={[
                { header: "Disbursement ID", accessor: "id" },
                { header: "School ID", accessor: "schoolId" },
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

export default AdminDashboardPage;
