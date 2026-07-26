import re
with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\SchoolFlow\SchoolAuthPage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject AuthContext import
content = content.replace("import { Link, useNavigate } from 'react-router-dom';", "import { Link, useNavigate } from 'react-router-dom';\nimport { useAuth } from '../../context/AuthContext';")

# 2. Add state
old_state = '''const SchoolAuthPage = () => {
  const [view, setView] = useState('login');
  const navigate = useNavigate();'''

new_state = '''const SchoolAuthPage = () => {
  const [view, setView] = useState('login');
  const [email, setEmail] = useState('school@test.com');
  const [password, setPassword] = useState('school123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();'''
content = content.replace(old_state, new_state)

# 3. Replace the login form
old_form = '''<form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/school/onboarding'); }}>
                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">School Admin Email*</label>
                    <input type="email" placeholder="admin@school.edu.ng" required
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400" />
                </div>

                <div className="group">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 group-focus-within:text-brand transition-colors">Password*</label>
                    <div className="relative">
                        <input type="password" placeholder="Enter your password" required
                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />'''

new_form = '''<form className="space-y-5" onSubmit={async (e) => {
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
                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all duration-300 text-sm text-slate-800 placeholder-slate-400 pr-12 password-input" />'''

content = content.replace(old_form, new_form)

# Update Login button
old_btn = '''<button type="submit" className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] mt-6 flex items-center justify-center gap-2 group">
                    <span>Sign In to Dashboard</span>
                    <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>'''

new_btn = '''<button type="submit" disabled={isLoading} className="relative w-full bg-brand text-white font-bold py-4 rounded-2xl hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(136,19,55,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(136,19,55,0.6)] mt-6 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0">
                    <span>{isLoading ? 'Signing In...' : 'Sign In to Dashboard'}</span>
                    {!isLoading && <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>'''
content = content.replace(old_btn, new_btn)

# Replace logo
content = content.replace('<div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black">S</div>', '<img src="/logo.png" alt="Skulcredit Logo" className="w-10 h-10 object-contain" />')
content = content.replace('<div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black mb-6">S</div>', '<img src="/logo.png" alt="Skulcredit Logo" className="w-12 h-12 object-contain mb-6" />')
content = content.replace('<div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">S</div>', '<img src="/logo.png" alt="Skulcredit Logo" className="w-12 h-12 object-contain shadow-lg" />')

with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\SchoolFlow\SchoolAuthPage.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
