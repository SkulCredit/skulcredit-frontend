import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const EligibilityTestPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ bvn: '', nin: '', income: '', fees: '' });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && (!formData.bvn || !formData.nin)) {
      alert("Please enter both BVN and NIN.");
      return;
    }
    if (step === 3 && (!formData.income || !formData.fees)) {
      alert("Please enter income and fees.");
      return;
    }
    if (step === 3) {
      localStorage.setItem('parentFlowData', JSON.stringify(formData));
    }
    if (step < 5) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1 && step < 4) setStep(step - 1);
  };

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => setStep(5), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);
  
  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [step]);
  return (
    <>
      

    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-brand text-xl tracking-tight">SkulCredit</span>
        </div>
        <button className="text-sm font-bold text-slate-500 hover:text-brand transition-colors">Save & Exit</button>
    </header>

    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] animate-pulse-slow"></div>
    </div>

    <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
            
            {/*  Progress Header  */}
            {step < 4 && (
            <div id="progress-header" className="px-8 pt-8 pb-6 border-b border-slate-100 bg-white/50">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-extrabold text-slate-900">Loan Application & KYC</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">Step <span id="current-step-text">{step}</span> of 3</p>
                    </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div id="progress-bar" className="h-full bg-brand rounded-full transition-all duration-500 ease-out" style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
            </div>
            )}

            <div className="p-8 relative min-h-[450px]">
                
                {/*  ================= STEP 1: Identity (BVN/NIN) =================  */}
                {step === 1 && (
                <div id="step-1" className="step-content block animate-slide-in">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">KYC Submission (Identity)</h3>
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Bank Verification Number (BVN)*</label>
                            <div className="relative">
                                <Icon name="shield-check" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input type="text" placeholder="22********9" maxLength="11" required
                                    value={formData.bvn} onChange={e => setFormData({...formData, bvn: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-bold tracking-[0.2em]" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">National Identification Number (NIN)*</label>
                            <div className="relative">
                                <Icon name="fingerprint" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input type="text" placeholder="National ID Number" maxLength="11" required
                                    value={formData.nin} onChange={e => setFormData({...formData, nin: e.target.value})}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm font-bold tracking-[0.2em]" />
                            </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                            <Icon name="info" className="w-5 h-5 text-blue-600 shrink-0" />
                            <p className="text-xs text-blue-700 font-medium">Your BVN/NIN is only used for secure identity verification. We do not store your private banking credentials.</p>
                        </div>
                    </div>
                </div>
                )}

                {/*  ================= STEP 2: Document Uploads (ID + Statement) =================  */}
                {step === 2 && (
                <div id="step-2" className="step-content animate-slide-in">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">KYC Submission (Documents)</h3>
                    <div className="space-y-6">
                        {/*  Parent ID  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Parent/Guardian Valid ID*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50" id="drop-zone-id">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-id">
                                    <Icon name="image" className="w-6 h-6 text-brand mb-1" />
                                    <p className="text-xs text-slate-600 font-bold">Upload Parent ID (NIN Slip, DL, or Passport)</p>
                                </div>
                                <div className="hidden flex items-center gap-3 px-4" id="success-id">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-700" id="filename-id">ID_Card.jpg</span>
                                </div>
                                <input type="file" onChange={() => {}} />
                            </label>
                        </div>

                        {/*  Bank Statement  */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Bank Statement (Last 3 Months)*</label>
                            <label className="upload-zone flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50" id="drop-zone-bank">
                                <div className="flex flex-col items-center text-center px-4" id="upload-content-bank">
                                    <Icon name="file-text" className="w-6 h-6 text-brand mb-1" />
                                    <p className="text-xs text-slate-600 font-bold">Upload Bank Statement (PDF/Excel)</p>
                                </div>
                                <div className="hidden flex items-center gap-3 px-4" id="success-bank">
                                    <Icon name="check-circle" className="w-5 h-5 text-emerald-500" />
                                    <span className="text-xs font-bold text-slate-700" id="filename-bank">Statement.pdf</span>
                                </div>
                                <input type="file" onChange={() => {}} />
                            </label>
                        </div>
                    </div>
                </div>
                )}

                {/*  ================= STEP 3: Financials =================  */}
                {step === 3 && (
                <div id="step-3" className="step-content animate-slide-in">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">Credit Assessment Details</h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Average Monthly Income (₦)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₦</span>
                                <input type="number" placeholder="0.00" required value={formData.income} onChange={e => setFormData({...formData, income: e.target.value})} className="w-full pl-9 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-brand outline-none text-sm font-bold" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Total School Fees Required (₦)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₦</span>
                                <input type="number" placeholder="0.00" required value={formData.fees} onChange={e => setFormData({...formData, fees: e.target.value})} className="w-full pl-9 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-brand outline-none text-sm font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/*  ================= STEP 4: Loading =================  */}
                {step === 4 && (
                <div id="step-4" className="step-content flex-col items-center justify-center text-center py-10 flex">
                    <div className="relative w-20 h-20 mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-brand border-t-transparent animate-spin"></div>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">Processing KYC & Assessment...</h3>
                    <p className="text-slate-500 text-sm">Validating BVN/NIN and assessing credit limits.</p>
                </div>
                )}

                {/*  ================= STEP 5: Success =================  */}
                {step === 5 && (
                <div id="step-5" className="step-content h-full animate-slide-in">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center flex flex-col justify-center h-full">
                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-5">
                            <Icon name="check" className="w-8 h-8 stroke-[3]" />
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">KYC & Credit Assessment Passed!</h3>
                        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 text-left">
                            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Pre-approved Limit</p>
                            <h4 className="text-3xl font-black text-brand">₦2,500,000</h4>
                        </div>
                        <button onClick={() => navigate('/parent/details')} className="w-full bg-brand text-white font-bold py-3.5 rounded-xl">Continue Application</button>
                    </div>
                </div>
                )}

            </div>

            {/*  Footer Controls  */}
            {step < 4 && (
            <div id="footer-controls" className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <button id="btn-back" onClick={handleBack} className={`flex items-center gap-2 text-sm font-bold text-slate-500 ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}>
                    <Icon name="arrow-left" className="w-4 h-4" /> Back
                </button>
                <button id="btn-next" onClick={handleNext} className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md">
                    Continue <Icon name="arrow-right" className="w-4 h-4" />
                </button>
            </div>
            )}
        </div>
    </main>

    

    </>
  );
};

export default EligibilityTestPage;
