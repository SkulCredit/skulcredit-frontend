import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const ServiceChargePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, []);
  return (
    <>
      

    {/*  Top Navigation Bar  */}
    <header
        className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-brand text-xl tracking-tight hidden sm:block">SkulCredit</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 font-medium text-sm bg-slate-100 px-3 py-1.5 rounded-full">
            <Icon name="lock" className="w-4 h-4 text-emerald-500" /> Secure Checkout
        </div>

        <button className="text-sm font-bold text-slate-500 hover:text-brand transition-colors hidden md:block">Cancel
            Payment</button>
    </header>

    {/*  Background Decorative Elements  */}
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[0%] right-[10%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px]"></div>
    </div>

    {/*  Main Content  */}
    <main className="flex-1 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">

            <div className="mb-8 animate-fade-in-up">
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Complete Your Application</h1>
                <p className="text-slate-500 font-medium">Pay the one-off service charge to authorize immediate tuition
                    disbursement.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/*  ================= LEFT COLUMN: Payment Summary =================  */}
                <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in-up stagger-1">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
                        <div className="bg-slate-50 p-6 border-b border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900">Payment Summary</h2>
                        </div>

                        <div className="p-6 space-y-6">
                            {/*  Line Items  */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Target School</span>
                                    <span className="text-sm font-bold text-slate-900 text-right">Foster Prime
                                        Schools</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Student</span>
                                    <span className="text-sm font-bold text-slate-900">Johnathan Doe</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Approved Tuition</span>
                                    <span className="text-sm font-bold text-slate-900">₦710,000</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-500 font-medium">Repayment Plan</span>
                                    <span className="text-sm font-bold text-slate-900">3 Months</span>
                                </div>
                            </div>

                            <div className="w-full border-t border-dashed border-slate-200"></div>

                            {/*  Total  */}
                            <div className="bg-brand-50 rounded-2xl p-5 border border-brand/10">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-bold text-brand">Service Charge (20%)</span>
                                    <span className="text-xl font-black text-brand">₦142,000</span>
                                </div>
                                <p className="text-xs text-brand/70 font-medium">One-off processing fee. No hidden interest.
                                </p>
                            </div>

                            {/*  Security Badges  */}
                            <div className="flex items-center justify-center gap-6 pt-4 opacity-60 grayscale">
                                <img src="partners/paystack.png" className="h-6 object-contain" alt="Paystack"
                                     />
                                <img src="partners/flutter.png" className="h-5 object-contain" alt="Flutterwave"
                                     />
                            </div>
                            <p
                                className="text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5 mt-2">
                                <Icon name="shield-check" className="w-4 h-4 text-emerald-500" /> PCI-DSS Compliant &
                                Secured
                            </p>
                        </div>
                    </div>
                </div>

                {/*  ================= RIGHT COLUMN: Payment Methods =================  */}
                <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in-up stagger-2">
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Select Payment Method</h2>

                        {/*  Method Selectors  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {/*  Card  */}
                            <label className="payment-method cursor-pointer">
                                <input type="radio" name="payment_method" value="card" checked
                                    onChange={() => {}} />
                                <div
                                    className="border border-slate-200 rounded-2xl p-4 transition-all flex items-center gap-4">
                                    <div
                                        className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                                        <Icon name="credit-card" className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 text-sm">Debit Card</h4>
                                    </div>
                                    <div
                                        className="check-circle relative w-5 h-5 rounded-full border-2 border-slate-300 transition-colors">
                                    </div>
                                </div>
                            </label>

                            {/*  Bank Transfer  */}
                            <label className="payment-method cursor-pointer">
                                <input type="radio" name="payment_method" value="transfer"
                                    onChange={() => {}} />
                                <div
                                    className="border border-slate-200 rounded-2xl p-4 transition-all flex items-center gap-4">
                                    <div
                                        className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                                        <Icon name="building-2" className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 text-sm">Bank Transfer</h4>
                                    </div>
                                    <div
                                        className="check-circle relative w-5 h-5 rounded-full border-2 border-slate-300 transition-colors">
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/*  Card Details Form  */}
                        <form id="card-form" onSubmit={(e) => { e.preventDefault(); navigate('/parent/payment'); }}
                            className="space-y-5 block">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Cardholder Name</label>
                                <input type="text" placeholder="JOHN DOE" required
                                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 placeholder-slate-400 uppercase" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">Card Number</label>
                                <div className="relative">
                                    <input type="text" placeholder="0000 0000 0000 0000" maxlength="19" required
                                        className="card-input w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 font-bold placeholder-slate-300" />
                                    {/*  Visa/Mastercard placeholder icon  */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                                        <div className="w-8 h-5 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Expiry Date</label>
                                    <input type="text" placeholder="MM/YY" maxlength="5" required
                                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 font-bold placeholder-slate-300 text-center" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1.5">CVV</label>
                                    <input type="password" placeholder="123" maxlength="3" required
                                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all text-sm text-slate-800 font-bold placeholder-slate-300 text-center" />
                                </div>
                            </div>
                                <button type="submit" id="pay-btn"
                                    className="w-full mt-6 bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
                                    <span>Pay ₦142,000 Securely</span>
                                    <Icon name="lock" className="w-4 h-4" />
                                </button>
                        </form>

                        {/*  Bank Transfer View (Hidden by default)  */}
                        <div id="transfer-view"
                            className="hidden text-center py-8 bg-slate-50 border border-slate-200 rounded-2xl">
                            <Icon name="building-2" className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Pay via Bank Transfer</h3>
                            <p className="text-sm text-slate-500 mb-6 max-w-xs mx-auto">A unique account number will be
                                generated for you on the next screen.</p>
                            <button onClick={() => {}} id="transfer-btn"
                                className="bg-brand hover:bg-brand-hover text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 mx-auto">
                                Generate Account Number
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </main>

    

    </>
  );
};

export default ServiceChargePage;
