import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Icon from '../../components/Icon';
import apiClient from '../../services/apiClient';

const ParentAuthPage = () => {
  const [view, setView] = useState('login'); 
  const [email, setEmail] = useState('parent@test.com');
  const [password, setPassword] = useState('parent123');
  const [error, setError] = useState('');
  const [regError, setRegError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [regData, setRegData] = useState({ fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '', address: '', occupation: '' });
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password, 'parent');
      navigate('/parent/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegError('');
    setIsLoading(true);
    if (regData.password !== regData.confirmPassword) {
      setIsLoading(false);
      return setRegError("Passwords do not match.");
    }
    try {
      await apiClient.post('/auth/send-otp', { email: regData.email });
      setView('email-verify');
    } catch (err) {
      setRegError(err.response?.data?.message || 'Failed to send OTP. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setRegError('');
    setIsLoading(true);
    try {
      await apiClient.post('/auth/verify-otp', { email: regData.email, otp: otpValue });
      setView('profile-complete'); // skip phone verify
    } catch (err) {
      setRegError(err.response?.data?.message || 'Invalid OTP. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRegError('');
    try {
      const [firstName, ...lastNames] = regData.fullName.split(' ');
      await register({
        email: regData.email,
        password: regData.password,
        phoneNumber: regData.phoneNumber || '0000000000',
        firstName: firstName || 'Parent',
        lastName: lastNames.join(' ') || 'User',
        role: 'parent'
      }, 'parent');
      navigate('/parent/dashboard');
    } catch (err) {
      setRegError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Attempt to load lucide icons if the script is loaded globally
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [view]);

  return (
    <>
      
    {/*  ================= ANIMATED BACKGROUND BLOBS =================  */}
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-rose-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" style={{'animationDelay': '2s'}}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" style={{'animationDelay': '4s'}}></div>
    </div>

    {/*  ================= MAIN AUTH CONTAINER (GLASSMORPHISM) =================  */}
    <div className="w-full max-w-[500px] mx-auto mt-20 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(136,19,55,0.15),inset_0_0_0_1px_rgba(255,255,255,0.9)] relative z-10 transition-all duration-500">

        {/*  ================= LOGIN VIEW =================  */}
        {view === 'login' && (
        <div id="view-login" className="block animate-fade-in-up">
            <div className="text-center mb-8">
                {/*  Gradient Text Logo  */}
                <h1 className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand animate-gradient-text bg-[200%_auto]">
                    SkulCredit
                </h1>
                <h2 className="text-xl font-bold text-slate-900 mb-1.5">Login to your Account</h2>
                <p className="text-sm text-slate-500 font-medium">Welcome back! Please login to your account.</p>
            </div>
            <form className="space-y-5" onSubmit={handleLogin}>
                {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium">{error}</div>}
                
                {/*  Input Group  */}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Email Address*</label>
                    <input type="email" placeholder="you@example.com" required value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                {/*  Input Group  */}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Password*</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="At least 6 characters" required value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors">
                            <Icon name={showPassword ? "eye" : "eye-off"} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/*  Remember Me & Forgot Password  */}
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

                {/*  Submit Button  */}
                <button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] mt-6 overflow-hidden group disabled:opacity-70 disabled:hover:translate-y-0">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? 'Signing In...' : 'Sign in'}
                        {!isLoading && <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </span>
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Don't have an account?
                    <button type="button" onClick={() => setView('signup')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Sign up</button>
                </p>
            </form>
        </div>
        )}

        {/*  ================= SIGN UP VIEW =================  */}
        {view === 'signup' && (
        <div id="view-signup" className="block animate-fade-in-up">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand animate-gradient-text bg-[200%_auto]">
                    SkulCredit
                </h1>
                <h2 className="text-xl font-bold text-slate-900 mb-1.5">Create Parent Account</h2>
                <p className="text-sm text-slate-500 font-medium">Start your journey to affordable education</p>
            </div>

            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
                {regError && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium">{regError}</div>}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Full Name*</label>
                    <input type="text" placeholder="John Doe" required value={regData.fullName} onChange={(e) => setRegData({...regData, fullName: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Email Address*</label>
                    <input type="email" placeholder="you@example.com" required value={regData.email} onChange={(e) => setRegData({...regData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Phone Number (Optional)</label>
                    <input type="tel" placeholder="+234 800 000 0000" value={regData.phoneNumber} onChange={(e) => setRegData({...regData, phoneNumber: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Password*</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="At least 6 characters" required value={regData.password} onChange={(e) => setRegData({...regData, password: e.target.value})}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors">
                            <Icon name={showPassword ? "eye" : "eye-off"} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Confirm Password*</label>
                    <div className="relative">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Re-enter password" required value={regData.confirmPassword} onChange={(e) => setRegData({...regData, confirmPassword: e.target.value})}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand transition-colors">
                            <Icon name={showConfirmPassword ? "eye" : "eye-off"} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="pt-3 pb-1 text-center text-xs text-slate-500 font-medium leading-relaxed">
                    By continuing, you agree to the
                    <a href="#" className="font-bold text-brand hover:underline">Terms of Service</a> and
                    <a href="#" className="font-bold text-brand hover:underline">Privacy Policy</a>
                </div>

                <button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] group disabled:opacity-70">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                        {!isLoading && <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </span>
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Already have an account?
                    <button type="button" onClick={() => setView('login')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Login</button>
                </p>
            </form>
        </div>
        )}

        {/*  ================= EMAIL VERIFICATION VIEW =================  */}
        {view === 'email-verify' && (
        <div id="view-email-verify" className="block animate-fade-in-up py-6">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                    <Icon name="mail" className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Email Verified</h1>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[90%] mx-auto">
                    We've sent a 6-digit verification code to your email. Enter it below to verify your email address.
                </p>
            </div>
            <form className="space-y-6" onSubmit={handleVerifyEmail}>
                {regError && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium">{regError}</div>}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 text-center">Enter 6-digit Code</label>
                    <input type="text" placeholder="------" required maxLength="6" value={otpValue} onChange={(e) => setOtpValue(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-2xl tracking-[0.5em] text-center text-slate-800 font-bold uppercase" />
                </div>
                <button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] group disabled:opacity-70">
                    <span className="relative z-10 flex items-center justify-center gap-2">{isLoading ? 'Verifying...' : 'Verify Email'}</span>
                </button>
            </form>
        </div>
        )}



        {/*  ================= PROFILE COMPLETION VIEW =================  */}
        {view === 'profile-complete' && (
        <div id="view-profile-complete" className="block animate-fade-in-up py-6">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Profile Completed</h1>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[90%] mx-auto">
                    Tell us a bit more about yourself to personalize your experience.
                </p>
            </div>
            <form className="space-y-4" onSubmit={handleFinalProfileSubmit}>
                {regError && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl font-medium">{regError}</div>}
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Home Address*</label>
                    <input type="text" placeholder="123 Main St" required value={regData.address} onChange={(e) => setRegData({...regData, address: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm" />
                </div>
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Occupation*</label>
                    <input type="text" placeholder="E.g., Engineer" required value={regData.occupation} onChange={(e) => setRegData({...regData, occupation: e.target.value})}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand outline-none transition-all text-sm" />
                </div>
                <button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] mt-4 group disabled:opacity-70">
                    <span className="relative z-10 flex items-center justify-center gap-2">{isLoading ? 'Loading...' : 'Complete Setup & Go to Dashboard'} <Icon name="arrow-right" className="w-4 h-4" /></span>
                </button>
            </form>
        </div>
        )}


        {/*  ================= FORGOT PASSWORD VIEW =================  */}
        {view === 'forgot' && (
        <div id="view-forgot" className="block animate-fade-in-up py-6">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-rose-50 text-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-rose-100">
                    <Icon name="key-round" className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold text-slate-900 mb-3">Forgot Password?</h1>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[90%] mx-auto">
                    Enter your registered email address or phone number. We'll send you a verification code to reset your password.
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setView('login'); }}>
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Email Address*</label>
                    <input type="email" placeholder="you@example.com" required
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <button type="submit" className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Code
                        <Icon name="send" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </button>

                <p className="text-center text-sm text-slate-500 font-medium mt-6">
                    Remembered your password?
                    <button type="button" onClick={() => setView('login')} className="font-bold text-brand hover:text-brand-light transition-colors ml-1">Sign in</button>
                </p>
            </form>
        </div>
        )}

    </div>

    </>
  );
};

export default ParentAuthPage;
