import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const PaymentConfirmationPage = () => {
  const [stage, setStage] = useState(1);
  const [processing, setProcessing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === 2) {
      const timer = setTimeout(() => setProcessing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [stage, processing]);
  return (
    <>
      

    {/*  Top Navigation Bar  */}
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-brand text-xl tracking-tight hidden sm:block">SkulCredit</span>
        </div>
        
        <div id="header-status" className="flex items-center gap-2 text-emerald-600 text-sm font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 transition-all duration-500">
            <Icon name="check-circle" className="w-4 h-4" />
            <span>Payment Confirmed</span>
        </div>

        <button className="text-sm font-bold text-slate-500 hover:text-brand transition-colors hidden md:block">Back to Dashboard</button>
    </header>

    {/*  Background Decorative Elements  */}
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div id="bg-glow-1" className="absolute top-[0%] left-[20%] w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] transition-colors duration-1000"></div>
    </div>

    <main className="flex-1 py-10 px-4 md:px-8 relative flex items-center justify-center min-h-[calc(100vh-80px)]">
        
        {/*  =======================================================  */}
        {/*  STAGE 1: PAYMENT CONFIRMATION RECEIPT (PAGE 6)  */}
        {/*  =======================================================  */}
        <div id="confirmation-stage" className={`w-full max-w-lg mx-auto absolute transition-all duration-500 z-20 ${stage !== 1 ? 'opacity-0 pointer-events-none hidden' : ''}`}>
            
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] text-center animate-scale-in relative overflow-hidden">
                {/*  Background decor  */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-white -z-0"></div>

                <div className="relative z-10">
                    {/*  Success Icon  */}
                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                        <Icon name="check" className="w-10 h-10 stroke-[3]" />
                    </div>

                    <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Payment Successful!</h1>
                    <p className="text-slate-500 font-medium mb-8">Your service charge has been processed.</p>

                    {/*  Amount  */}
                    <div className="mb-8">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Amount Paid</p>
                        <h2 className="text-4xl font-black text-brand">₦142,000</h2>
                    </div>

                    <div className="receipt-divider mb-6 w-full opacity-60"></div>

                    {/*  Receipt Details  */}
                    <div className="space-y-4 text-left mb-8">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Reference Number</span>
                            <span className="text-sm font-bold text-slate-900">SC-TRX-89421A</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Date & Time</span>
                            <span className="text-sm font-bold text-slate-900" id="current-time">May 13, 2026, 11:35 AM</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Payment Method</span>
                            <span className="text-sm font-bold text-slate-900">Debit Card (**** 1234)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500 font-medium">Student</span>
                            <span className="text-sm font-bold text-slate-900">Johnathan Doe</span>
                        </div>
                    </div>

                    {/*  Action Button  */}
                    <button onClick={() => setStage(2)} className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
                        Track Tuition Disbursement
                        <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="w-full mt-4 py-3 text-slate-500 font-bold hover:text-brand transition-colors text-sm flex items-center justify-center gap-2">
                        <Icon name="download" className="w-4 h-4" /> Download Receipt
                    </button>
                </div>
            </div>
        </div>

        {/*  =======================================================  */}
        {/*  STAGE 2: DISBURSEMENT TRACKER (PAGE 7)  */}
        {/*  =======================================================  */}
        <div id="disbursement-stage" className={`w-full max-w-5xl mx-auto absolute transition-all duration-500 z-10 ${stage !== 2 ? 'opacity-0 pointer-events-none hidden' : ''}`}>
            
            <div className="animate-fade-in-up mb-8">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Disbursement Status</h1>
                <p className="text-slate-500 font-medium">We are transferring the approved tuition directly to the school.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/*  Left: Transfer Timeline (2/3 width)  */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Transfer Progress</h3>

                    <div className="relative">
                        {/*  Main vertical line  */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100"></div>
                        {/*  Animated progress line  */}
                        <div id="disbursement-progress" className="absolute left-6 top-6 w-0.5 bg-brand transition-all duration-[2000ms] ease-in-out" style={{'height': '50%'}}></div>

                        <div className="space-y-10 relative">
                            {/*  Step 1: Complete  */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]">
                                    <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-slate-900 font-bold text-lg">Service Fee Paid</h4>
                                    <p className="text-sm text-slate-500 mt-1">Payment of ₦142,000 received successfully.</p>
                                </div>
                            </div>

                            {/*  Step 2: Complete  */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]">
                                    <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-slate-900 font-bold text-lg">Repayment Setup Completed</h4>
                                    <p className="text-sm text-slate-500 mt-1">Auto-debit mandate setup successful.</p>
                                </div>
                            </div>

                            {/*  Step 3: Active (Processing)  */}
                            <div className="flex gap-6 group" id="disburse-step-2">
                                <div id="disburse-icon-2" className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white] transition-colors duration-500 ${processing ? 'border-blue-500 text-blue-500' : 'border-emerald-500 text-emerald-500'}`}>
                                    {processing ? (
                                        <Icon name="loader-2" className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <Icon name="check" className="w-6 h-6 stroke-[3]" />
                                    )}
                                </div>
                                <div className="pt-2">
                                    <h4 id="disburse-title-2" className={`font-bold text-lg transition-colors ${processing ? 'text-blue-600' : 'text-slate-900'}`}>{processing ? 'Processing Loan Disbursement' : 'Loan Disbursed'}</h4>
                                    <p id="disburse-desc-2" className="text-sm text-slate-500 mt-1">Sending ₦710,000 to Foster Prime Schools.</p>
                                </div>
                            </div>

                            {/*  Future Steps  */}
                            <div className={`flex gap-6 group transition-opacity duration-500 opacity-40`} id="disburse-step-3">
                                <div id="disburse-icon-3" className={`w-12 h-12 rounded-full border-2 bg-white border-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]`}>
                                    <Icon name="calendar" className="w-5 h-5" />
                                </div>
                                <div className="pt-2">
                                    <h4 id="disburse-title-3" className={`font-bold text-lg text-slate-700`}>First Repayment Made</h4>
                                    <p id="disburse-desc-3" className="text-sm text-slate-500 mt-1">Upcoming.</p>
                                </div>
                            </div>

                            <div className={`flex gap-6 group transition-opacity duration-500 opacity-40`} id="disburse-step-4">
                                <div className={`w-12 h-12 rounded-full border-2 bg-white border-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]`}>
                                    <Icon name="check-circle-2" className="w-5 h-5" />
                                </div>
                                <div className="pt-2">
                                    <h4 className={`font-bold text-lg text-slate-700`}>Loan Closed</h4>
                                    <p className="text-sm text-slate-500 mt-1">Fully paid off.</p>
                                </div>
                            </div>

                            <div className={`flex gap-6 group transition-opacity duration-500 opacity-40`} id="disburse-step-5">
                                <div className={`w-12 h-12 rounded-full border-2 bg-white border-slate-200 text-slate-400 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_0_6px_white]`}>
                                    <Icon name="party-popper" className="w-5 h-5" />
                                </div>
                                <div className="pt-2">
                                    <h4 className={`font-bold text-lg text-slate-700`}>Eligible to Reapply</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Post-Success Action (Hidden initially)  */}
                    <div id="repayment-action" className={`mt-10 pt-8 border-t border-slate-100 transition-opacity duration-500 ${processing ? 'opacity-0 hidden' : 'opacity-100'}`}>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-emerald-800 font-bold text-lg">Tuition completely sorted! 🎉</h4>
                                <p className="text-sm text-emerald-600/80 font-medium">Next, let's set up how you want to repay us.</p>
                            </div>
                            <button onClick={() => navigate('/parent/dashboard')} className="w-full md:w-auto bg-brand hover:bg-brand-hover text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap">
                                Setup Repayment Plan
                            </button>
                        </div>
                    </div>
                </div>

                {/*  Right: Transfer Details Card (1/3 width)  */}
                <div className="lg:col-span-1 space-y-6">
                    
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Disbursement Details</h3>
                        
                        <div className="space-y-5">
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Amount to Send</p>
                                <p className="text-3xl font-black text-slate-900">₦710,000</p>
                            </div>
                            
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs text-slate-500 mb-2">Recipient Institution</p>
                                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand/50 shadow-sm">
                                        <Icon name="building-2" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">Foster Prime Schools</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 mb-1">School Bank Account</p>
                                <p className="font-bold text-slate-900 font-mono tracking-wider">0123456789</p>
                                <p className="text-sm text-slate-500 font-medium">Guaranty Trust Bank</p>
                            </div>

                            <div className="bg-blue-50 text-blue-700 p-4 rounded-xl flex gap-3 text-sm font-medium" id="eta-box">
                                <Icon name="info" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p>Transfer processing generally takes between 5 to 15 minutes.</p>
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

export default PaymentConfirmationPage;
