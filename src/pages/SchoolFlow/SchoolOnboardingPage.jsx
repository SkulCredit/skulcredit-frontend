import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const SchoolOnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [reviewStatus, setReviewStatus] = useState('pending');
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else if (step === 4) navigate('/school/dashboard');
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setReviewStatus('approved'), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);
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
            {step !== 3 && (
            <div id="progress-header" className="px-8 pt-8 pb-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-extrabold text-slate-900" id="header-title">{step === 4 ? 'Bank Details' : 'School Registration'}</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1" id="header-subtitle">{step === 4 ? 'Provide settlement accounts' : 'Provide your institution\'s details'}</p>
                    </div>
                    <div className="text-sm font-bold text-brand bg-brand-50 px-3 py-1 rounded-lg border border-brand/10">
                        Step <span id="current-step-text">{step === 4 ? 3 : step}</span> of 3
                    </div>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div id="progress-bar" className="h-full bg-brand rounded-full transition-all duration-500 ease-out" style={{ width: `${((step === 4 ? 3 : step) / 3) * 100}%` }}></div>
                </div>
            </div>
            )}

            {/*  Steps Container  */}
            <div className="p-8 flex-1 relative overflow-y-auto hide-scrollbar">
                
                {/*  ================= STEP 1: School Details =================  */}
                {step === 1 && (
                <form id="step-1" className="step-content animate-slide-in space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Official School Name*</label>
                            <input type="text" placeholder="Enter registered name" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">School Address*</label>
                            <textarea rows="2" placeholder="Full physical address" required
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm resize-none"></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">State/Region*</label>
                            <div className="relative shadow-sm rounded-2xl">
                                <select required className="w-full appearance-none px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 cursor-pointer">
                                    <option value="" disabled selected>Select State</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="abuja">Abuja (FCT)</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="other">Other</option>
                                </select>
                                <Icon name="chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Year Established*</label>
                            <input type="number" placeholder="YYYY" required min="1800" max="2026"
                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 shadow-sm" />
                        </div>
                    </div>

                    <div className="pt-2">
                        <label className="block text-sm font-bold text-slate-700 mb-3">Education Levels Provided (Select all that apply)*</label>
                        <div className="flex flex-wrap gap-3">
                            <label className="level-checkbox cursor-pointer">
                                <input type="checkbox" name="level" value="primary" />
                                <div className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm transition-all shadow-sm hover:border-brand/30">
                                    Primary
                                </div>
                            </label>
                            <label className="level-checkbox cursor-pointer">
                                <input type="checkbox" name="level" value="secondary" />
                                <div className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm transition-all shadow-sm hover:border-brand/30">
                                    Secondary
                                </div>
                            </label>
                            <label className="level-checkbox cursor-pointer">
                                <input type="checkbox" name="level" value="tertiary" />
                                <div className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm transition-all shadow-sm hover:border-brand/30">
                                    Tertiary
                                </div>
                            </label>
                        </div>
                    </div>

                    {/*  Hidden submit button to trigger native form validation  */}
                    <button type="submit" id="submit-step-1" className="hidden"></button>
                </form>
                )}

                {/*  ================= STEP 2: Document Uploads =================  */}
                {step === 2 && (
                <form id="step-2" className="step-content animate-slide-in space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
                    
                    <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
                        <Icon name="info" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800 font-medium">Please upload clear, legible copies of your official documents. PDFs or high-quality images (PNG, JPG) are accepted.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/*  Doc 1: Registration Certificate  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Registration Certificate*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 bg-white" id="drop-zone-reg">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-reg">
                                    <Icon name="upload-cloud" className="w-6 h-6 text-brand mb-2" />
                                    <p className="text-xs text-slate-600 font-bold">Click to upload</p>
                                </div>
                                <div className="hidden flex flex-col items-center gap-2 px-4 text-center" id="success-reg">
                                    <Icon name="check-circle" className="w-6 h-6 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-800 truncate w-full px-2" id="filename-reg">doc.pdf</span>
                                </div>
                                <input type="file" required onChange={() => {}} />
                            </label>
                        </div>

                        {/*  Doc 2: Accreditation Letter  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Accreditation Letter*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 bg-white" id="drop-zone-acc">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-acc">
                                    <Icon name="upload-cloud" className="w-6 h-6 text-brand mb-2" />
                                    <p className="text-xs text-slate-600 font-bold">Click to upload</p>
                                </div>
                                <div className="hidden flex flex-col items-center gap-2 px-4 text-center" id="success-acc">
                                    <Icon name="check-circle" className="w-6 h-6 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-800 truncate w-full px-2" id="filename-acc">doc.pdf</span>
                                </div>
                                <input type="file" required onChange={() => {}} />
                            </label>
                        </div>

                        {/*  Doc 3: CAC Certification  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">CAC Certification*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 bg-white" id="drop-zone-cac">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-cac">
                                    <Icon name="upload-cloud" className="w-6 h-6 text-brand mb-2" />
                                    <p className="text-xs text-slate-600 font-bold">Click to upload</p>
                                </div>
                                <div className="hidden flex flex-col items-center gap-2 px-4 text-center" id="success-cac">
                                    <Icon name="check-circle" className="w-6 h-6 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-800 truncate w-full px-2" id="filename-cac">doc.pdf</span>
                                </div>
                                <input type="file" required onChange={() => {}} />
                            </label>
                        </div>

                        {/*  Doc 4: State Certification  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">State Certification*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:bg-slate-50 bg-white" id="drop-zone-state">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-state">
                                    <Icon name="upload-cloud" className="w-6 h-6 text-brand mb-2" />
                                    <p className="text-xs text-slate-600 font-bold">Click to upload</p>
                                </div>
                                <div className="hidden flex flex-col items-center gap-2 px-4 text-center" id="success-state">
                                    <Icon name="check-circle" className="w-6 h-6 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-800 truncate w-full px-2" id="filename-state">doc.pdf</span>
                                </div>
                                <input type="file" required onChange={() => {}} />
                            </label>
                        </div>

                    </div>
                    
                    <button type="submit" id="submit-step-2" className="hidden"></button>
                </form>
                )}

                {/*  ================= STEP 3: Review State (Simulated) =================  */}
                {step === 3 && (
                <div id="step-3" className="step-content flex-col items-center justify-center text-center py-12 h-full flex animate-slide-in">
                    
                    {/*  Pending State  */}
                    <div id="review-pending" className={`flex flex-col items-center ${reviewStatus !== 'pending' ? 'hidden' : ''}`}>
                        <div className="relative w-24 h-24 mb-8">
                            <div className="radar-spinner"></div>
                            <div className="radar-spinner"></div>
                            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-amber-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Icon name="clock" className="w-8 h-8" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Application Submitted</h3>
                        <p className="text-slate-500 font-medium text-base max-w-sm mx-auto">
                            Our onboarding team is reviewing your documents. You will receive an email once verification is complete.
                        </p>
                        
                        {/*  Prototype trigger to bypass wait  */}
                        <button onClick={() => {}} className="mt-8 text-xs font-bold text-slate-400 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                            [Prototype] Click to simulate admin approval
                        </button>
                    </div>

                    {/*  Approved State  */}
                    <div id="review-approved" className={`flex flex-col items-center animate-fade-in ${reviewStatus !== 'approved' ? 'hidden' : ''}`}>
                        <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                            <Icon name="shield-check" className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Verification Successful!</h3>
                        <p className="text-emerald-700 font-medium text-base max-w-sm mx-auto bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100">
                            Your school is approved. Please provide your bank and staff details to complete onboarding.
                        </p>
                        <button onClick={() => setStep(4)} className="mt-8 bg-brand hover:bg-brand-hover text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg active:scale-95 flex items-center gap-2">
                            Complete Setup <Icon name="arrow-right" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                )}

                {/*  ================= STEP 4: Bank & Staff Details =================  */}
                {step === 4 && (
                <form id="step-4" className="step-content animate-slide-in space-y-8 pb-4" onSubmit={(e) => { e.preventDefault(); navigate('/school/dashboard'); }}>
                    
                    {/*  Bank Details  */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                            <Icon name="building-2" className="w-5 h-5 text-brand" /> School Bank Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Bank Name*</label>
                                <input type="text" placeholder="e.g. Zenith Bank" required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm font-bold shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Account Number*</label>
                                <input type="text" placeholder="0123456789" maxlength="10" required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm font-bold shadow-sm tracking-widest" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Account Name (Must match School Name)*</label>
                                <input type="text" placeholder="Official Account Name" required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm font-bold shadow-sm" />
                            </div>
                        </div>
                    </div>

                    {/*  Staff Details  */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                            <Icon name="users" className="w-5 h-5 text-brand" /> Authorized Staff Details
                        </h3>
                        <p className="text-xs text-slate-500 font-medium mb-5">Provide details for 2 staff members who will receive transaction notifications.</p>
                        
                        <div className="space-y-6">
                            {/*  Staff 1  */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-200 border-dashed">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Staff 1 Name*</label>
                                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email*</label>
                                    <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone*</label>
                                    <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                            </div>

                            {/*  Staff 2  */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Staff 2 Name*</label>
                                    <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email*</label>
                                    <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone*</label>
                                    <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none transition-all text-sm shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" id="submit-step-4" className="hidden"></button>
                </form>
                )}

            </div>

            {/*  Footer Controls  */}
            {step !== 3 && (
            <div id="footer-controls" className="px-8 py-5 bg-white border-t border-slate-100 flex items-center justify-between rounded-b-[2rem]">
                <button id="btn-back" onClick={handleBack} className={`flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}>
                    <Icon name="arrow-left" className="w-4 h-4" /> Back
                </button>
                
                <button id="btn-next" onClick={() => document.getElementById(`submit-step-${step}`).click()} className="bg-slate-900 hover:bg-black text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2">
                    Continue <Icon name="arrow-right" className="w-4 h-4" />
                </button>
            </div>
            )}
        </div>
    </main>

    

    </>
  );
};

export default SchoolOnboardingPage;
