import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import Icon from '../../components/Icon';

const SchoolAuthPage = () => {
  const [view, setView] = useState('login');
  const [email, setEmail] = useState('school@test.com');
  const [password, setPassword] = useState('school123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [view]);
  return (
    <>
      

    {/*  Animated Background Blobs  */}
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-slate-200/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" style={{'animationDelay': '2s'}}></div>
    </div>

    {/*  Main Auth Container  */}
    <div className="w-full max-w-[500px] bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(136,19,55,0.1)] relative z-10 transition-all duration-500">

        {view === 'login' && (
        <div id="view-login" className="block animate-fade-in-up">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src="/logo.png" alt="Skulcredit Logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-2xl font-extrabold text-brand tracking-tight">SkulCredit</h1>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
                    <Icon name="building-2" className="w-3.5 h-3.5" /> Partner Portal
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1.5">Welcome Back</h2>
                <p className="text-sm text-slate-500 font-medium">Log in to manage your students and disbursements.</p>
            </div>

            <form className="space-y-5" onSubmit={async (e) => {
                e.preventDefault();
                setError('');
                setIsLoading(true);
                try {
                  await login(email, password, 'school');
                  navigate('/school/onboarding');
                } catch (err) {
                  setError('Invalid school credentials. Try school@test.com / school123');
                } finally {
                  setIsLoading(false);
                }
            }}>
                {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium">{error}</div>}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">School Admin Email*</label>
                    <input type="email" placeholder="admin@school.edu.ng" required value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Password*</label>
                    <div className="relative">
                        <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors" onClick={() => {}}>
                            <Icon name="eye-off" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-md border-2 border-slate-300 checked:bg-brand checked:border-brand transition-all cursor-pointer outline-none focus:ring-4 focus:ring-brand/20" />
                            <Icon name="check" className="absolute text-white w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors">Remember me</span>
                    </label>
                    <button type="button" onClick={() => setView('forgot')} className="text-sm font-bold text-brand hover:text-brand-light transition-colors">
                        Forgot password?
                    </button>
                </div>

                <button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] mt-6 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0">
                    <span>{isLoading ? 'Signing In...' : 'Sign In to Dashboard'}</span>
                    {!isLoading && <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Not registered yet?
                    <button type="button" onClick={() => setView('signup')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Apply as Partner</button>
                </p>
            </form>
        </div>
        )}

        {/*  ================= SIGN UP VIEW =================  */}
        {view === 'signup' && (
        <div id="view-signup" className="block animate-fade-in-up">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src="/logo.png" alt="Skulcredit Logo" className="w-10 h-10 object-contain" />
                    <h1 className="text-2xl font-extrabold text-brand tracking-tight">SkulCredit</h1>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1.5">Create Partner Account</h2>
                <p className="text-sm text-slate-500 font-medium">Join our network to receive fast tuition payments.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/school/onboarding'); }}>
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">School Name*</label>
                    <input type="text" placeholder="Official Institution Name" required
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Admin Name*</label>
                        <input type="text" placeholder="Full Name" required
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Phone*</label>
                        <input type="tel" placeholder="+234..." required
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Official Email Address*</label>
                    <input type="email" placeholder="admin@school.edu.ng" required
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Password*</label>
                        <div className="relative">
                            <input type="password" placeholder="Min 8 chars" required
                                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-10 password-input" />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors" onClick={() => {}}>
                                <Icon name="eye-off" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="group">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Confirm*</label>
                        <div className="relative">
                            <input type="password" placeholder="Re-enter" required
                                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-10 password-input" />
                            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors" onClick={() => {}}>
                                <Icon name="eye-off" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-3 pb-1 text-center text-xs text-slate-500 font-medium leading-relaxed">
                    By registering, you agree to the Partner
                    <a href="#" className="font-bold text-brand hover:underline">Terms of Service</a>
                </div>

                <button type="submit" className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] flex items-center justify-center gap-2 group">
                    <span>Start Onboarding</span>
                    <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Already a partner?
                    <button type="button" onClick={() => setView('login')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Sign In</button>
                </p>
            </form>
        </div>
        )}

        {/*  ================= FORGOT PASSWORD VIEW =================  */}
        {view === 'forgot' && (
        <div id="view-forgot" className="block animate-fade-in-up py-6">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-slate-50 text-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
                    <Icon name="key-round" className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Admin Password Reset</h1>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[90%] mx-auto">
                    Enter your registered school email address. We'll send instructions to reset your access.
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Official Email Address*</label>
                    <input type="email" placeholder="admin@school.edu.ng" required
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <button type="submit" className="relative w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all duration-300 shadow-md flex items-center justify-center gap-2 group">
                    <span>Send Reset Link</span>
                    <Icon name="send" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Remembered your password?
                    <button type="button" onClick={() => setView('login')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Back to Login</button>
                </p>
            </form>
        </div>
        )}

    </div>

    

    </>
  );
};

export default SchoolAuthPage;
