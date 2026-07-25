import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolStudentsPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] overflow-hidden font-sans relative">
      

    {/*  ================= SIDEBAR =================  */}
    <aside className="w-64 bg-white flex flex-col hidden md:flex z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/*  Logo Section  */}
        <div className="h-28 flex flex-col justify-center px-8">
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black shadow-sm">S</div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-extrabold text-brand leading-none tracking-tight">SkulCredit</h1>
                    <p className="text-[8px] text-brand/70 font-black uppercase tracking-[0.2em] mt-1">Partner Portal</p>
                </div>
            </div>
        </div>

        {/*  Navigation Links  */}
        <nav className="flex-1 py-4 space-y-2 overflow-y-auto custom-scrollbar">
            <Link to="/school/dashboard" className="sidebar-link inactive flex items-center gap-3 font-semibold group">
                <Icon name="layout-grid" className="w-5 h-5 group-hover:text-brand transition-colors" /> Dashboard
            </Link>
            
            {/*  ACTIVE STATE  */}
            <Link to="/school/students" className="sidebar-link active flex items-center gap-3 font-semibold">
                <Icon name="users" className="w-5 h-5" /> Students
            </Link>

            <Link to="/school/applications" className="sidebar-link inactive flex items-center gap-3 font-semibold group">
                <Icon name="file-text" className="w-5 h-5 group-hover:text-brand transition-colors" /> Applications
            </Link>

            <Link to="/school/settings" className="sidebar-link inactive flex items-center gap-3 font-semibold group">
                <Icon name="shield-check" className="w-5 h-5 group-hover:text-brand transition-colors" /> Verification
            </Link>

            <Link to="/school/disbursement" className="sidebar-link inactive flex items-center gap-3 font-semibold group">
                <Icon name="credit-card" className="w-5 h-5 group-hover:text-brand transition-colors" /> Disbursement
            </Link>
        </nav>

        {/*  Bottom Actions  */}
        <div className="py-4 space-y-2 mb-4">
            <Link to="/school/settings" className="sidebar-link inactive flex items-center gap-3 font-semibold group">
                <Icon name="settings" className="w-5 h-5 group-hover:text-brand transition-colors" /> Settings
            </Link>
            <Link to="/school/auth" className="sidebar-link inactive flex items-center gap-3 font-semibold group hover:!bg-rose-50 hover:!text-rose-600">
                <Icon name="log-out" className="w-5 h-5 group-hover:text-rose-600 transition-colors" /> Logout
            </Link>
        </div>
    </aside>

    {/*  ================= MAIN CONTENT =================  */}
    <div className="flex-1 flex flex-col h-full z-10 relative">
        
        {/*  Header  */}
        <header className="h-24 bg-transparent flex items-center justify-end px-6 md:px-10 sticky top-0 z-10">
            <button className="md:hidden p-2 text-slate-600 bg-white rounded-lg shadow-sm mr-auto">
                <Icon name="menu" className="w-6 h-6" />
            </button>

            {/*  Exact Header Controls from Image  */}
            <div className="flex items-center gap-4">
                {/*  Notification Bell  */}
                <button className="relative bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-slate-500 hover:text-brand transition-colors group">
                    <Icon name="bell" className="w-5 h-5 group-hover:animate-bounce" />
                    {/*  Red Notification Dot  */}
                    <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-brand rounded-full border-2 border-white"></span>
                </button>

                {/*  Admin Profile Dropdown  */}
                <div className="relative" id="admin-dropdown-container">
                    <button onClick={() => {}} className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white">
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

        {/*  Scrollable Content  */}
        <main className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-10 pb-12">
            <div className="max-w-[1100px] mx-auto space-y-6 pt-2">
                
                {/*  Page Header & Add Button  */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
                    <div>
                        <h1 className="text-[28px] font-extrabold text-slate-900 tracking-tight mb-1">Student Directory</h1>
                        <p className="text-sm text-slate-500 font-medium">Manage all enrolled students and monitor their active tuition status.</p>
                    </div>
                    <button onClick={() => {}} className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                        <Icon name="user-plus" className="w-4 h-4" /> Add New Student
                    </button>
                </div>

                {/*  Unified Search & Filter Bar (Matched to Image)  */}
                <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-2 justify-between items-center w-full">
                    
                    {/*  Search Input  */}
                    <div className="relative w-full lg:flex-1 lg:max-w-md">
                        <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" id="searchInput" placeholder="Search by student name or ID..." 
                            className="w-full pl-10 pr-4 py-3 bg-transparent text-sm font-medium focus:outline-none placeholder:text-slate-400" />
                    </div>

                    {/*  Filter Pills  */}
                    <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto hide-scrollbar">
                        <button className="filter-btn active px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all whitespace-nowrap" data-filter="all">All</button>
                        <button className="filter-btn px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all whitespace-nowrap" data-filter="primary">Primary</button>
                        <button className="filter-btn px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all whitespace-nowrap" data-filter="secondary">Secondary</button>
                        <button className="filter-btn px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl transition-all whitespace-nowrap" data-filter="tertiary">Tertiary</button>
                    </div>
                </div>

                {/*  Student List Container  */}
                <div>
                    {/*  Header Row  */}
                    <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mt-2">
                        <div className="col-span-4">Student Name & ID</div>
                        <div className="col-span-3">Level & Class</div>
                        <div className="col-span-3">Account Status</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>

                    {/*  Dynamic List  */}
                    <div className="space-y-4 pb-10" id="studentList">
                        
                        {/*  Row 1  */}
                        <div className="list-row student-item bg-white border border-slate-100 rounded-3xl p-4 px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-level="primary">
                            <div className="col-span-4 flex items-center gap-4 w-full">
                                <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-slate-600 font-bold shrink-0">JM</div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-[15px] student-name">Jone Mane</h4>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 student-id">STU-88321</p>
                                </div>
                            </div>
                            <div className="col-span-3 w-full">
                                <p className="text-sm font-bold text-slate-700">Primary</p>
                                <p className="text-xs text-slate-400 font-medium mt-0.5">Class P2</p>
                            </div>
                            <div className="col-span-3 w-full">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div> Active Account
                                </span>
                            </div>
                            <div className="col-span-2 flex justify-end w-full">
                                <button className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                    <Icon name="chevron-right" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/*  Row 2  */}
                        <div className="list-row student-item bg-white border border-slate-100 rounded-3xl p-4 px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-level="secondary">
                            <div className="col-span-4 flex items-center gap-4 w-full">
                                <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-slate-600 font-bold shrink-0">SO</div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-[15px] student-name">Sarah Okoro</h4>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 student-id">STU-88322</p>
                                </div>
                            </div>
                            <div className="col-span-3 w-full">
                                <p className="text-sm font-bold text-slate-700">Secondary</p>
                                <p className="text-xs text-slate-400 font-medium mt-0.5">Class SS1</p>
                            </div>
                            <div className="col-span-3 w-full">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 text-amber-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div> Application Pending
                                </span>
                            </div>
                            <div className="col-span-2 flex justify-end w-full">
                                <button className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                    <Icon name="chevron-right" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/*  Row 3  */}
                        <div className="list-row student-item bg-white border border-slate-100 rounded-3xl p-4 px-6 relative cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-4 items-start lg:items-center" data-level="tertiary">
                            <div className="col-span-4 flex items-center gap-4 w-full">
                                <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-slate-600 font-bold shrink-0">IL</div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-[15px] student-name">Ibrahim Lawal</h4>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 student-id">STU-88323</p>
                                </div>
                            </div>
                            <div className="col-span-3 w-full">
                                <p className="text-sm font-bold text-slate-700">Tertiary</p>
                                <p className="text-xs text-slate-400 font-medium mt-0.5">100L</p>
                            </div>
                            <div className="col-span-3 w-full">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div> Active Account
                                </span>
                            </div>
                            <div className="col-span-2 flex justify-end w-full">
                                <button className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                    <Icon name="chevron-right" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>

    {/*  ================= ADD STUDENT DRAWER =================  */}
    <div id="drawer-overlay" className="fixed inset-0 z-50 hidden">
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity opacity-0" id="drawer-backdrop" onClick={() => {}}></div>
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-400 flex flex-col" id="drawer-panel">
            
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                <div>
                    <h2 className="text-xl font-extrabold text-slate-900">Add New Student</h2>
                    <p className="text-sm font-medium text-slate-500 mt-1">Register a student to your roster.</p>
                </div>
                <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-brand bg-slate-50 hover:bg-brand/10 rounded-full transition-colors" onClick={() => {}}>
                    <Icon name="x" className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
                <form id="addStudentForm" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">First Name</label>
                        <input type="text" id="sFirstName" required placeholder="e.g. David" className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Last Name</label>
                        <input type="text" id="sLastName" required placeholder="e.g. Adeleke" className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Education Level</label>
                        <div className="relative">
                            <select id="sLevel" required className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-bold cursor-pointer">
                                <option value="" disabled selected>Select Level</option>
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                                <option value="tertiary">Tertiary</option>
                            </select>
                            <Icon name="chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Class / Grade</label>
                        <input type="text" id="sClass" required placeholder="e.g. SS2 or P5" className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-medium uppercase" />
                    </div>

                    <button type="submit" className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 mt-8">
                        Register Student <Icon name="check" className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    </div>

    

    </div>
  );
};

export default SchoolStudentsPage;
