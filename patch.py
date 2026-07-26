import re
with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\Home\HomePage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

faq_regex = r'<div className=\"bg-white border border-slate-200 rounded-\[1\.5rem\] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-\d+ interactable\"\s*onClick=\{\(\) => \{\}\}>([\s\S]*?)<\/div>\s*<\/div>'
faq_idx = 0
def replace_faq(match):
    global faq_idx
    curr = faq_idx
    faq_idx += 1
    inner = match.group(1)
    title_match = re.search(r'<h3[^>]*>([\s\S]*?)<\/h3>', inner)
    para_match = re.search(r'<p[^>]*>([\s\S]*?)<\/p>', inner)
    title = title_match.group(1).strip() if title_match else ''
    para = para_match.group(1).strip() if para_match else ''
    
    return f'''<div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right interactable" onClick={{() => toggleFaq({curr})}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3 className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    {title}</h3>
                                <div className={{`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transform transition-all duration-300 flex-shrink-0 ${{activeFaq === {curr} ? 'bg-rose-900 text-white rotate-180' : 'bg-slate-50 text-slate-900 group-hover:bg-rose-900 group-hover:text-white'}}`}}>
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className={{`overflow-hidden transition-all duration-500 ease-in-out ${{activeFaq === {curr} ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}}`}}>
                                <p className="leading-relaxed text-slate-600 text-md">{para}</p>
                            </div>
                        </div>'''

content = re.sub(faq_regex, replace_faq, content)
with open(r't:\stop\Portfolio\freelance\Skulcredit\src\pages\Home\HomePage.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
