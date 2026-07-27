import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const StudentDetailsPage = () => {
  const [stage, setStage] = useState(1);
  const [verifying, setVerifying] = useState(true);
  const [formData, setFormData] = useState({ studentName: '', dob: '', schoolName: 'Foster Prime Schools', grade: '', studentId: '', amount: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === 2) {
      const timer = setTimeout(() => setVerifying(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [stage, verifying]);
  return (
    <>
      

    {/*  Top Navigation Bar  */}
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-500" id="main-header">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-brand text-xl tracking-tight hidden sm:block">SkulCredit</span>
        </div>
        
        {/*  Header Dynamic Center Content  */}
        <div id="header-center-content">
            {/*  Auto-save Indicator (Form State)  */}
            <div id="autosave-indicator" className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Icon name="cloud-lightning" className="w-4 h-4" />
                <span id="save-status">Draft saved just now</span>
            </div>

            {/*  Global Status (Verification State - Hidden Initially)  */}
            <div id="global-status" className="hidden items-center gap-2 text-blue-600 text-sm font-bold bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 transition-all duration-500">
                <Icon name="loader-2" className="w-4 h-4 animate-spin" />
                <span>Verifying...</span>
            </div>
        </div>

        <button className="text-sm font-bold text-slate-500 hover:text-brand transition-colors hidden md:block">Save & Exit</button>
    </header>

    {/*  Background Decorative Elements  */}
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div id="bg-glow-top" className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[120px] animate-pulse-slow transition-colors duration-1000"></div>
        <div id="bg-glow-bottom" className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px] transition-colors duration-1000"></div>
    </div>

    <main className="flex-1 py-10 px-4 md:px-8 relative">
        
        {/*  =======================================================  */}
        {/*  STAGE 1: STUDENT DETAILS FORM  */}
        {/*  =======================================================  */}
        <div id="form-stage" className={`max-w-3xl mx-auto space-y-8 pb-24 absolute left-0 right-0 px-4 md:px-8 w-full transition-opacity duration-500 ${stage !== 1 ? 'opacity-0 pointer-events-none hidden' : ''}`}>
            
            <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 text-sm font-bold text-brand bg-brand-50 w-max px-3 py-1 rounded-lg border border-brand/10 mb-4">
                    <span>Step 2 of 3</span>
                    <div className="w-1 h-1 rounded-full bg-brand"></div>
                    <span>Application Form</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Student & School Details</h1>
                <p className="text-slate-500 font-medium">Please provide accurate information to avoid verification delays.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => { 
                e.preventDefault(); 
                if (!formData.studentName || !formData.dob || !formData.schoolName || !formData.grade || !formData.amount) {
                    alert("Please fill all required fields.");
                    return;
                }
                localStorage.setItem('studentDetails', JSON.stringify(formData));
                setStage(2); 
            }} noValidate>
                
                {/*  Section 1: Student Info  */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm animate-fade-in-up stagger-1">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 bg-brand-50 text-brand rounded-xl flex items-center justify-center">
                            <Icon name="user" className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">Student Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name (As it appears on school records)*</label>
                            <input type="text" id="input-student-name" placeholder="First Name Last Name" required value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value})}
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Date of Birth*</label>
                            <input type="date" id="input-dob" required value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})}
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800" />
                        </div>
                    </div>
                </div>

                {/*  Section 2: School Details  */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm animate-fade-in-up stagger-2">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 bg-brand-50 text-brand rounded-xl flex items-center justify-center">
                            <Icon name="building-2" className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">School Details</h2>
                            <p className="text-sm text-slate-500 font-medium">Select verified partner school</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-bold text-slate-700">School Name*</label>
                                <button type="button" onClick={() => {
                                    const val = formData.schoolName === 'Manual Entry' ? '' : 'Manual Entry';
                                    setFormData({...formData, schoolName: val, isManualSchool: val === 'Manual Entry'});
                                }} className="text-xs font-bold text-brand hover:underline">
                                    {formData.isManualSchool ? 'Search Verified Schools' : "Can't find your school? Add it"}
                                </button>
                            </div>
                            
                            {!formData.isManualSchool ? (
                                <div className="relative">
                                    <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input type="text" id="input-school-name" placeholder="Search for verified school..." required value={formData.schoolName} onChange={e => setFormData({...formData, schoolName: e.target.value})}
                                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400" />
                                </div>
                            ) : (
                                <div className="space-y-3 p-4 bg-brand/5 border border-brand/20 rounded-2xl">
                                    <p className="text-xs text-brand font-bold flex items-center gap-2"><Icon name="info" className="w-4 h-4" /> We will follow up to onboard this school</p>
                                    <input type="text" placeholder="Enter full school name" required value={formData.manualSchoolName || ''} onChange={e => setFormData({...formData, manualSchoolName: e.target.value})}
                                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800" />
                                    <input type="text" placeholder="School Contact Person / Phone (Optional)" value={formData.manualSchoolContact || ''} onChange={e => setFormData({...formData, manualSchoolContact: e.target.value})}
                                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800" />
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Class / Grade*</label>
                            <input type="text" id="input-class" placeholder="e.g., JSS 2" required value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})}
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Admission Number</label>
                            <input type="text" id="input-id" placeholder="Student ID (if applicable)" value={formData.studentId} onChange={e => setFormData({...formData, studentId: e.target.value})}
                                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Exact Tuition Amount (₦)*</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₦</span>
                                <input type="number" id="input-amount" placeholder="0.00" required value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})}
                                    className="w-full pl-9 pr-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 font-bold placeholder-slate-300" />
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Section 3: Document Uploads  */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm animate-fade-in-up stagger-3">
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="w-10 h-10 bg-brand-50 text-brand rounded-xl flex items-center justify-center">
                            <Icon name="file-check-2" className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Required Documents</h2>
                            <p className="text-sm text-slate-500 font-medium">Upload clear photos or PDFs (Max 5MB each)</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/*  Upload 1  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">1. Parent Valid ID*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50" id="drop-zone-1">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center" id="upload-content-1">
                                    <Icon name="cloud-upload" className="w-8 h-8 text-brand mb-2" />
                                    <p className="text-sm text-slate-600 font-medium"><span className="font-bold text-brand">Click to upload</span></p>
                                </div>
                                <div className="hidden flex items-center justify-between w-full px-6" id="success-content-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><Icon name="file-check" className="w-5 h-5" /></div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-slate-800" id="filename-1">document.pdf</p>
                                            <p className="text-xs text-emerald-600 font-medium">Upload complete</p>
                                        </div>
                                    </div>
                                    <button type="button" className="text-slate-400 hover:text-brand" onClick={() => {}}><Icon name="x" className="w-5 h-5" /></button>
                                </div>
                                <input type="file" required accept=".pdf,.png,.jpg,.jpeg" onChange={() => {}} />
                            </label>
                        </div>

                        {/*  Upload 2
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-3">2. Official School Fee Invoice*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50" id="drop-zone-2">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center" id="upload-content-2">
                                    <Icon name="cloud-upload" className="w-8 h-8 text-brand mb-2" />
                                    <p className="text-sm text-slate-600 font-medium"><span className="font-bold text-brand">Click to upload</span></p>
                                </div>
                                <div className="hidden flex items-center justify-between w-full px-6" id="success-content-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center"><Icon name="file-check" className="w-5 h-5" /></div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-slate-800" id="filename-2">document.pdf</p>
                                            <p className="text-xs text-emerald-600 font-medium">Upload complete</p>
                                        </div>
                                    </div>
                                    <button type="button" className="text-slate-400 hover:text-brand" onClick={() => {}}><Icon name="x" className="w-5 h-5" /></button>
                                </div>
                                <input type="file" required accept=".pdf,.png,.jpg,.jpeg" onChange={() => {}} />
                            </label>
                        </div>  */}
                    </div>
                </div>

                {/*  Fixed Bottom Actions  */}
                <div id="form-actions" className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 p-4 md:px-8 z-40 transition-transform duration-500">
                    <div className="max-w-3xl mx-auto flex items-center justify-between">
                        <button type="button" className="px-6 py-3 text-slate-500 font-bold hover:text-slate-900 transition-colors flex items-center gap-2">
                            <Icon name="arrow-left" className="w-4 h-4" /> Back
                        </button>
                        
                        <button type="submit" className="bg-brand hover:bg-brand-hover text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2 group">
                            Submit for Verification 
                            <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </form>
        </div>


        {/*  =======================================================  */}
        {/*  STAGE 2: VERIFICATION STATUS DASHBOARD  */}
        {/*  =======================================================  */}
        <div id="verification-stage" className={`max-w-5xl mx-auto space-y-8 pb-24 absolute left-0 right-0 px-4 md:px-8 w-full transition-opacity duration-500 ${stage !== 2 ? 'opacity-0 pointer-events-none hidden' : ''}`}>
            
            {/*  Header & Prominent Status Banner  */}
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Application Status</h1>
                
                {/*  Dynamic Banner  */}
                <div id="status-banner" className="bg-white rounded-3xl p-6 md:p-8 border-2 border-blue-200 shadow-lg shadow-blue-100/50 flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-700 relative overflow-hidden">
                    <div id="banner-decor" className="absolute right-0 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-colors duration-700"></div>

                    {/*  Icon  */}
                    <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
                        <div className="radar-spinner status-radar"></div>
                        <div className="radar-spinner status-radar"></div>
                        <div id="status-icon-bg" className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center relative z-10 shadow-md transition-colors duration-700">
                            <Icon name="refresh-cw" id="status-icon" className="w-8 h-8 animate-spin" />
                        </div>
                    </div>

                    {/*  Text  */}
                    <div className="text-center md:text-left relative z-10 flex-1">
                        <h2 id="status-title" className="text-2xl font-extrabold text-slate-900 mb-2">School Verification in Progress</h2>
                        <p id="status-desc" className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                            We have securely transmitted your details to <span id="display-school-name" className="font-bold text-slate-700">Foster Prime Schools</span>. We are currently waiting for their administration to verify the student and fee amount.
                        </p>
                    </div>

                    {/*  Action (Hidden initially)  */}
                    <div id="status-action" className={`relative z-10 w-full md:w-auto mt-4 md:mt-0 transition-opacity duration-500 ${verifying ? 'opacity-0 hidden' : 'opacity-100'}`}>
                        <button onClick={() => navigate('/parent/service-charge')} className="w-full md:w-auto bg-brand hover:bg-brand-hover text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap">
                            Proceed to Payment
                            <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/*  Two Column Layout  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/*  Left: Timeline (2/3 width)  */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Verification Timeline</h3>

                    <div className="relative">
                        {/*  Main vertical line  */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100"></div>
                        {/*  Animated progress line  */}
                        <div id="timeline-progress" className="absolute left-6 top-6 w-0.5 bg-emerald-500 transition-all duration-1000 ease-in-out" style={{'height': '50%'}}></div>

                        <div className="space-y-10 relative">
                            {/*  Step 1: Complete  */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]">
                                    <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-slate-900 font-bold text-lg">Application Submitted</h4>
                                    <p className="text-sm text-slate-500 mt-1">Your documents and details were securely received.</p>
                                    <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider">Just Now</p>
                                </div>
                            </div>

                            {/*  Step 2: Complete  */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]">
                                    <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-slate-900 font-bold text-lg">SkulCredit Initial Review</h4>
                                    <p className="text-sm text-slate-500 mt-1">Profile analyzed and pre-approved for requested limit.</p>
                                    <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider">Just Now</p>
                                </div>
                            </div>

                            {/*  Step 3: Active (Verifying)  */}
                            <div className="flex gap-6 group" id="step-3-container">
                                <div id="step-3-icon-wrapper" className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white] transition-colors duration-500 ${verifying ? 'border-blue-500 text-blue-500' : 'border-emerald-500 text-emerald-500'}`}>
                                    {verifying ? (
                                        <div id="step-3-dot" className="w-3 h-3 bg-blue-500 rounded-full animate-pulse transition-colors duration-500"></div>
                                    ) : (
                                        <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                    )}
                                </div>
                                <div className="pt-2">
                                    <h4 id="step-3-title" className={`font-bold text-lg transition-colors duration-500 ${verifying ? 'text-blue-600' : 'text-slate-900'}`}>{verifying ? 'Under Verification by School' : 'Verified Successfully'}</h4>
                                    <p id="step-3-desc" className="text-sm text-slate-500 mt-1">Awaiting confirmation of student ID and exact tuition amount.</p>
                                    <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider" id="step-3-time">{verifying ? 'In Progress...' : 'Completed'}</p>
                                </div>
                            </div>

                            {/*  Step 4: Pending  */}
                            <div className="flex gap-6 group opacity-40 transition-opacity duration-500" id="step-4-container">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]">
                                    <Icon name="credit-card" className="w-5 h-5" />
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-slate-700 font-bold text-lg">Awaiting Payment</h4>
                                    <p className="text-sm text-slate-500 mt-1">Pay the service charge to trigger immediate disbursement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Right: Summary Cards (1/3 width)  */}
                <div className="lg:col-span-1 space-y-6">
                    
                    {/*  School Profile Card  */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -z-0"></div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">Target Institution</h3>
                        
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center overflow-hidden">
                                <Icon name="building-2" className="w-8 h-8 text-brand/50" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 leading-tight" id="summary-school">Foster Prime Schools</h4>
                            </div>
                        </div>

                        <div className="space-y-3 relative z-10">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Icon name="map-pin" className="w-4 h-4 text-slate-400" /> Lagos, Nigeria
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Icon name="award" className="w-4 h-4 text-emerald-500" /> Tier 1 Partner
                            </div>
                        </div>
                    </div>

                    {/*  Student Summary Card  */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Application Summary</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Student Name</p>
                                <p className="font-bold text-slate-900" id="summary-student">Not Provided</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Class</p>
                                    <p className="font-bold text-slate-900" id="summary-class">-</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Student ID</p>
                                    <p className="font-bold text-slate-900" id="summary-id">-</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-slate-500 mb-1">Requested Tuition Financing</p>
                                <p className="text-2xl font-black text-brand">₦<span id="summary-amount">0.00</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>

    

    </>
  );
};

export default StudentDetailsPage;
