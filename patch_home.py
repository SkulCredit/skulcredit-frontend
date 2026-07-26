with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\Home\HomePage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# 1. State
state_block = '''  const [activeView, setActiveView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [waitlistType, setWaitlistType] = useState('parent');
  const [waitlistStatus, setWaitlistStatus] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setWaitlistStatus('loading');
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setWaitlistStatus('success');
        form.reset();
      } else {
        setWaitlistStatus('error');
      }
    } catch (error) {
      setWaitlistStatus('error');
    }
  };'''

content = re.sub(r'const \[activeView, setActiveView\].*?const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);', state_block, content, flags=re.DOTALL)

# 2. Waitlist Form
old_form = '''<form action="https://formsubmit.co/hello@getskulcreditng.com" method="POST"
                            onSubmit={(e) => e.preventDefault()} className="space-y-3 md:space-y-4">

                            <input type="hidden" name="_subject" value="New Lead - SkulCredit" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <input type="hidden" name="User Type" id="userType" value="parent" />

                            <div className="flex gap-3 mb-2">
                                <button type="button" onClick={() => {}} id="parentBtn"
                                    className="px-4 py-2 rounded-lg bg-white text-[#87144B] text-xs md:text-sm font-medium">
                                    Parent
                                </button>

                                <button type="button" onClick={() => {}} id="schoolBtn"
                                    className="px-4 py-2 rounded-lg bg-white/20 text-white text-xs md:text-sm font-medium">
                                    School
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input name="First Name" type="text" placeholder="First name" required
                                    className="px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />

                                <input name="Last Name" type="text" placeholder="Last name" required
                                    className="px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
                            </div>

                            <input name="Email" type="email" placeholder="Email address" required
                                className="w-full px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />

                            <textarea name="Message" rows="3" placeholder="Message (optional for contact)"
                                className="w-full px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"></textarea>

                            <button id="submitBtn" type="submit"
                                className="w-full bg-white text-[#87144B] py-2 md:py-3 rounded-lg text-sm font-medium hover:scale-[1.02] transition">
                                Join Waitlist
                            </button>

                            <p id="successMsg" className="text-green-300 text-xs hidden">
                                ✅ Submitted successfully!
                            </p>

                        </form>'''

new_form = '''<form action="https://formsubmit.co/hello@getskulcreditng.com" method="POST"
                            onSubmit={handleWaitlistSubmit} className="space-y-3 md:space-y-4">

                            <input type="hidden" name="_subject" value="New Lead - SkulCredit" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <input type="hidden" name="User Type" id="userType" value={waitlistType} />

                            <div className="flex gap-3 mb-2">
                                <button type="button" onClick={() => setWaitlistType('parent')} id="parentBtn"
                                    className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium ${waitlistType === 'parent' ? 'bg-white text-[#87144B]' : 'bg-white/20 text-white'}`}>
                                    Parent
                                </button>

                                <button type="button" onClick={() => setWaitlistType('school')} id="schoolBtn"
                                    className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium ${waitlistType === 'school' ? 'bg-white text-[#87144B]' : 'bg-white/20 text-white'}`}>
                                    School
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <input name="First Name" type="text" placeholder="First name" required
                                    className="px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />

                                <input name="Last Name" type="text" placeholder="Last name" required
                                    className="px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />
                            </div>

                            <input name="Email" type="email" placeholder="Email address" required
                                className="w-full px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none" />

                            <textarea name="Message" rows="3" placeholder="Message (optional for contact)"
                                className="w-full px-3 py-2 md:py-3 text-sm rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"></textarea>

                            <button id="submitBtn" type="submit" disabled={waitlistStatus === 'loading'}
                                className="w-full bg-white text-[#87144B] py-2 md:py-3 rounded-lg text-sm font-medium hover:scale-[1.02] transition disabled:opacity-50">
                                {waitlistStatus === 'loading' ? 'Submitting...' : 'Join Waitlist'}
                            </button>

                            {waitlistStatus === 'success' && (
                                <p id="successMsg" className="text-green-300 text-xs">✅ Submitted successfully! We will be in touch.</p>
                            )}
                            {waitlistStatus === 'error' && (
                                <p id="errorMsg" className="text-rose-300 text-xs">❌ An error occurred. Please try again.</p>
                            )}
                        </form>'''

content = content.replace(old_form, new_form)

# 3. FAQ Fix
parts = content.split('onClick={() => {}}>')
new_content = parts[0]
for i in range(1, len(parts)):
    idx = i - 1
    new_content += f'onClick={{() => toggleFaq({idx})}}>'
    
    old_chevron = 'className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0"'
    new_chevron = f'className={{`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transform transition-all duration-300 flex-shrink-0 ${{activeFaq === {idx} ? "bg-rose-900 text-white rotate-180" : "bg-slate-50 text-slate-900 group-hover:bg-rose-900 group-hover:text-white"}}`}}'
    
    old_accordion = 'className="max-h-0 overflow-hidden accordion-content opacity-0"'
    new_accordion = f'className={{`overflow-hidden transition-all duration-500 ease-in-out ${{activeFaq === {idx} ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"}}`}}'
    
    part = parts[i]
    part = part.replace(old_chevron, new_chevron, 1)
    part = part.replace(old_accordion, new_accordion, 1)
    
    new_content += part

with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\Home\HomePage.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
