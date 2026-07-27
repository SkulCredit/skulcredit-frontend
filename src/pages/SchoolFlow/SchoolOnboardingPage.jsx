import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolOnboardingPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
    {/*  Top Navigation  */}
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-brand text-xl tracking-tight hidden sm:block">SkulCredit</span>
            <span className="text-slate-300 mx-2 hidden sm:block">|</span>
            <span className="text-sm font-bold text-slate-500 hidden sm:block">Partner Portal</span>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <Icon name="shield" className="w-4 h-4 text-emerald-500" />
                <span>Secure Onboarding</span>
            </div>
            <button className="text-sm font-bold text-slate-500 hover:text-brand transition-colors hidden md:block" onClick={() => {}}>Save & Logout</button>
        </div>
    </header>

    <main className="flex-1 py-10 px-4 md:px-8 flex flex-col items-center">
        
        {/*  Main Form Container  */}
        <div className="w-full max-w-3xl bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col relative min-h-[600px]">
            
            {/*  Progress Header  */}
            <div id="progress-header" className="px-8 pt-8 pb-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-extrabold text-slate-900" id="header-title">Submit School Information</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1" id="header-subtitle">Provide your institution's details</p>
                    </div>
                    <div className="text-sm font-bold text-brand bg-brand-50 px-3 py-1 rounded-lg border border-brand/10">
                        Step <span id="current-step-text">{step}</span> of 2
                    </div>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div id="progress-bar" className="h-full bg-brand rounded-full transition-all duration-500 ease-out" style={{ width: `${(step / 2) * 100}%` }}></div>
                </div>
            </div>

            {/*  Steps Container  */}
            <div className="p-8 flex-1 relative overflow-y-auto hide-scrollbar">
                
                {/*  ================= STEP 1: School Details =================  */}
                {step === 1 && (
                <form id="step-1" className="step-content animate-slide-in space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">School Name*</label>
                            <input type="text" placeholder="Official Institution Name" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Contact Person*</label>
                            <input type="text" placeholder="Full Name" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Official Email Address*</label>
                            <input type="email" placeholder="admin@school.edu.ng" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number*</label>
                            <input type="tel" placeholder="+234..." required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">School Address*</label>
                            <textarea rows="2" placeholder="Full physical address" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm resize-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Website / Social Media*</label>
                            <input type="text" placeholder="https:// or @handle" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">School Population*</label>
                            <input type="number" placeholder="Estimated total students" required min="10"
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>
                    </div>

                    {/*  Hidden submit button to trigger native form validation  */}
                    <button type="submit" id="submit-step-1" className="hidden"></button>
                </form>
                )}

                {/*  ================= STEP 2: Document Uploads =================  */}
                {step === 2 && (
                <form id="step-2" className="step-content animate-slide-in space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/school/dashboard?status=pending'); }}>
                    
                    <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
                        <Icon name="info" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800 font-medium">Please upload clear, legible copies of your official documents. PDFs or high-quality images (PNG, JPG) are accepted.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/*  Doc 1: CAC / School Licence  */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-2">CAC / School Licence Upload*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 bg-white" id="drop-zone-cac">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-cac">
                                    <Icon name="upload-cloud" className="w-8 h-8 text-brand mb-2" />
                                    <p className="text-sm text-slate-600 font-bold mb-1">Click or drag & drop to upload</p>
                                    <p className="text-xs text-slate-400 font-medium">PDF, JPG, PNG up to 10MB</p>
                                </div>
                                <input type="file" required onChange={() => {}} className="hidden" />
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" id="submit-step-2" className="hidden"></button>
                </form>
                )}
            </div>

            {/*  Footer Controls  */}
            <div id="footer-controls" className="px-8 py-5 bg-white border-t border-slate-100 flex items-center justify-between rounded-b-[2rem]">
                <button id="btn-back" onClick={handleBack} className={`flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}>
                    <Icon name="arrow-left" className="w-4 h-4" /> Back
                </button>
                
                <button id="btn-next" onClick={() => document.getElementById(`submit-step-${step}`).click()} className="bg-slate-900 hover:bg-black text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2">
                    {step === 2 ? 'Submit Application' : 'Continue'} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
            </div>
        </div>
    </main>
    </>
  );
};

export default SchoolOnboardingPage;
