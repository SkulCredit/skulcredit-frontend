import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../../components/Icon';

const HomePage = () => {
  const [activeView, setActiveView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [activeView]);

  const scrollToSection = (id) => {
    setActiveView('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      

    <div id="scroll-progress"
        className="fixed top-0 left-0 h-1 bg-rose-900 z-[100] w-0 transition-all duration-75 ease-out rounded-r-full"></div>

    
    

    <nav id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 py-4">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div
                className="flex items-center justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-glass">
                <div className="flex items-center gap-2 cursor-pointer interactable" onClick={() => {}}>
                    <img src="logo_nav.png" alt="SkulCredit" className="h-16 w-28 w-auto interactable"
                         />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => setActiveView('home')} id="nav-home"
                        className={`text-sm font-bold interactable relative group nav-link ${activeView === 'home' ? 'text-rose-900' : 'text-slate-600 hover:text-rose-900 transition-colors'}`}>
                        Home
                        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 origin-left nav-indicator transition-transform ${activeView === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    <button onClick={() => scrollToSection('how-it-works')}
                        className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors interactable relative group">
                        How it Works
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </button>
                    <button onClick={() => scrollToSection('about')}
                        className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors interactable relative group">
                        Why Us
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </button>
                    <button onClick={() => scrollToSection('faq')}
                        className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors interactable relative group">
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </button>
                    <button onClick={() => setActiveView('schools')} id="nav-schools"
                        className={`text-sm font-bold interactable relative group nav-link ${activeView === 'schools' ? 'text-rose-900' : 'text-slate-600 hover:text-rose-900 transition-colors'}`}>
                        For Schools
                        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 origin-left nav-indicator transition-transform ${activeView === 'schools' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </button>
                    <button onClick={() => scrollToSection('parent-section')} id="nav-parents"
                        className="text-sm font-medium text-slate-600 hover:text-rose-900 transition-colors interactable relative group nav-link">
                        For Parents
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-rose-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left nav-indicator"></span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <div className="magnetic">
                        <Link to="/auth"
                            className="inline-block bg-rose-900 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:bg-rose-800 hover:shadow-rose-900/20 transition-colors interactable">Get Started</Link>
                    </div>
                    <button className="md:hidden p-2 text-slate-600 interactable" onClick={() => setIsMobileMenuOpen(true)}>
                        <Icon name="menu" className="w-6 h-6 interactable" />
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu"
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'} fixed inset-0 z-40 bg-white pt-24 px-6 gap-6 flex-col animate-in slide-in-from-top-10 w-full`}>
            <button onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full interactable"><Icon name="x" className="w-6 h-6" /></button>
            <button onClick={() => { setActiveView('home'); setIsMobileMenuOpen(false); }}
                className="text-2xl font-bold text-slate-900 text-left interactable">Home</button>
            <button onClick={() => { setActiveView('schools'); setIsMobileMenuOpen(false); }}
                className="text-2xl font-bold text-slate-900 text-left interactable">For Schools</button>
            <button className="text-2xl font-bold text-slate-500 interactable text-left"
                onClick={() => scrollToSection('how-it-works')}>How it Works</button>
            <button className="text-2xl font-bold text-slate-500 interactable text-left" onClick={() => scrollToSection('faq')}>FAQ</button>
            <div className="h-px bg-slate-100 my-2"></div>
            <Link to="/auth"
                className="w-full py-4 bg-rose-900 text-white rounded-xl font-bold text-lg interactable text-center">Get
                Started</Link>
        </div>
    </nav>

    <main id="main-content" className="pb-0">

        <div id="view-home" className={`${activeView === 'home' ? 'block' : 'hidden'} view-section`}>

            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern bg-grid-slate opacity-[0.6] pointer-events-none parallax"
                    data-speed="0.1"></div>
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-rose-50/80 to-transparent -z-10 pointer-events-none">
                </div>

                <div className="absolute top-20 left-10 w-96 h-96 bg-rose-200/40 rounded-full blur-[120px] animate-pulse-slow parallax"
                    data-speed="-0.2"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] animate-pulse-slow delay-1000 parallax"
                    data-speed="0.3"></div>

                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12 space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] animate-fade-in-up opacity-0"
                            style={{'animationDelay': '0.1s'}}>
                            Education First, <br />
                            <span className="text-[#881337]">Payment Made Easy.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto animate-fade-in-up opacity-0"
                            style={{'animationDelay': '0.3s'}}>
                            SkulCredit helps parents cover school fees instantly. We pay your school directly while you
                            repay in simple, flexible installments without the usual financial stress.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto animate-fade-in-up opacity-0 relative" style={{'animationDelay': '0.5s'}}>
                        <img src="girl.jpeg" alt="Student" className="hidden md:block absolute left-0 bottom-[-500px]
w-[45vw] xl:w-[40vw]
h-[85vh] xl:h-[95vh]
object-cover object-top
rounded-tr-[3rem]
z-0" style={{'transform': 'translateX(-350px) translateY(40px)'}} />
                        <div
                            className="relative z-10 bg-white/80 backdrop-blur-md rounded-[3rem] p-4 border border-white shadow-calculator transform transition-transform duration-500 hover:scale-[1.01]">
                            <div
                                className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-100 relative overflow-hidden">
                                <div className="grid lg:grid-cols-2 gap-16 items-start">
                                    <div className="space-y-12">
                                        <div className="reveal-left delay-100">
                                            <div className="flex justify-between items-end mb-6">
                                                <label
                                                    className="text-xs font-bold text-slate-400 uppercase tracking-widest">I
                                                    want to borrow</label>
                                                <div className="text-4xl font-extrabold text-slate-900 tracking-tighter">₦
                                                    <span id="display-amount">710,000</span>
                                                </div>
                                            </div>
                                            <div className="relative py-2">
                                                <input type="range" id="loan-amount" min="50000" max="1000000"
                                                    step="10000" value="710000"
                                                    className="range-slider relative z-20 interactable" />
                                            </div>
                                            <div className="flex justify-between text-xs text-slate-400 font-bold mt-3">
                                                <span>₦50k</span><span>₦1M+</span>
                                            </div>
                                        </div>
                                        <div className="reveal-left delay-200">
                                            <label
                                                className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Repayment
                                                Period</label>
                                            <div className="flex gap-4">
                                                <button onClick={() => {}}
                                                    className="duration-btn flex-1 py-4 rounded-2xl border border-rose-600 bg-rose-50 text-rose-900 font-bold text-sm transition-all shadow-sm hover:scale-105 interactable"
                                                    data-val="3">3 Months</button>
                                                <button onClick={() => {}}
                                                    className="duration-btn flex-1 py-4 rounded-2xl border border-slate-200 bg-white text-slate-500 font-bold text-sm hover:border-slate-300 hover:text-slate-700 transition-all interactable"
                                                    data-val="4">4 Months</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col justify-between h-full space-y-8 lg:space-y-0 lg:pl-10 lg:border-l lg:border-slate-100">
                                        <div className="space-y-2 text-center lg:text-left mt-4 reveal-right delay-100">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Monthly Repayment</p>
                                            <h3 className="text-6xl font-black text-rose-900 tracking-tighter leading-none">
                                                ₦ <span id="monthly-repayment">236,667</span></h3>
                                            <div className="pt-3">
                                                <div
                                                    className="inline-block text-xs font-bold text-rose-600 bg-rose-50 px-4 py-2 rounded-xl border border-rose-100 shadow-sm animate-pulse-slow">
                                                    Service Charge: ₦ <span id="service-charge">142,000</span> (One-off
                                                    payment)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 reveal-right delay-200 magnetic w-full">
                                            <button
                                                onClick={() => {}}
                                                className="w-full py-5 bg-rose-900 text-white rounded-2xl font-bold text-lg hover:bg-rose-800 shadow-xl shadow-rose-900/20 transition-colors flex items-center justify-center gap-2 group interactable relative overflow-hidden">
                                                <span className="relative z-10 flex items-center gap-2">Get this Plan <Icon name="arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                                                <div
                                                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                                </div>
                                            </button>
                                            <p className="text-center text-xs text-slate-400 font-medium mt-2">No hidden
                                                fees. Instant approval.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 pt-10 border-t border-slate-200/50 reveal delay-500 max-w-4xl mx-auto">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">Our
                            Trusted Partners</p>
                        <div
                            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            <img src="partners/remita.png" alt="Remita" className="h-8 w-auto object-contain"
                                 />
                            <img src="partners/paystack.png" alt="Paystack" className="h-8 w-auto object-contain"
                                 />

                            <img src="partners/goxi.png" alt="Goxi Microinsurance" className="h-12 w-auto object-contain"
                                 />
                            <img src="partners/debtrecuva.png" alt="debtrecuva"
                                className="h-12 w-auto object-contain invert"
                                 />
                            <img src="partners/flutter.png" alt="Flutterwave" className="h-8 w-auto object-contain"
                                 />
                            <img src="partners/crc.png" alt="CRC Credit Bureau" className="h-8 w-auto object-contain"
                                 />
                            <img src="partners/prefect.png" alt="Dr prefect" className="h-14 w-auto object-contain" />
                            <svg width="110" height="20" viewBox="0 0 110 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M53.4268 2.00135C52.1772 1.98075 50.9594 2.39619 49.9828 3.17624C48.9531 4.02837 48.2391 5.20141 47.9552 6.5075C47.7405 3.5034 46.292 2.00135 43.6099 2.00135C42.4037 1.97343 41.2275 2.37891 40.2947 3.14418C39.3371 3.96386 38.6804 5.07956 38.4284 6.3146V6.08916C38.4392 5.20487 38.3079 4.32457 38.0397 3.48188C37.9492 3.10472 37.8198 2.73799 37.6534 2.38762H34.4023V17.9978H38.4926V9.56373C38.5139 8.14751 38.8357 7.05313 39.458 6.28057C39.761 5.90126 40.1491 5.59868 40.5909 5.39735C41.0326 5.19602 41.5156 5.1016 42.0007 5.12175C42.816 5.12142 43.39 5.31998 43.7226 5.71743C44.0553 6.11492 44.2217 6.77477 44.2216 7.69698V17.9978H48.3095V9.56618C48.3308 8.14997 48.6473 7.05558 49.2589 6.28303C49.5629 5.90079 49.9535 5.59636 50.3984 5.39486C50.8433 5.19336 51.3298 5.10057 51.8176 5.12416C52.6329 5.12382 53.2069 5.3224 53.5396 5.71989C53.8722 6.11733 54.0386 6.77716 54.0386 7.69939V18.0002H58.1264V7.50503C58.1277 5.68098 57.7092 4.30768 56.8708 3.38516C56.0325 2.46262 54.8845 2.00135 53.4268 2.00135Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M67.9185 2.00781C65.6012 2.00651 63.7183 2.71914 62.27 4.14569C60.8218 5.5723 60.0976 7.50891 60.0977 9.9555V10.0196C60.0992 12.7662 60.8509 14.8422 62.3527 16.2478C63.8948 17.6061 65.8793 18.3556 67.9343 18.3561C69.9894 18.3565 71.9742 17.6078 73.5169 16.2502C75.019 14.845 75.77 12.7583 75.77 9.98998V9.92586C75.7713 7.47955 75.0425 5.5483 73.5835 4.13212C72.1245 2.7159 70.2362 2.0078 67.9185 2.00781ZM71.622 10.4696C71.6216 13.9456 70.3878 15.6836 67.9205 15.6836V15.6846C65.4729 15.6846 64.2499 13.9466 64.2515 10.4705V9.31168C64.2518 7.85272 64.579 6.72627 65.233 5.93234C65.5582 5.53934 65.9702 5.22721 66.4366 5.02055C66.9029 4.81389 67.4109 4.71834 67.9205 4.74142C68.4324 4.71884 68.9426 4.81454 69.4115 5.02108C69.8805 5.22761 70.2955 5.53944 70.6244 5.93234C71.2895 6.72755 71.622 7.854 71.622 9.31168V10.4696Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M87.336 2.0029C86.0438 1.96088 84.7784 2.37703 83.7633 3.17779C82.7733 4.00221 82.1018 5.14607 81.8645 6.41233V6.09071C81.8768 5.2065 81.7464 4.32609 81.4782 3.48343C81.3869 3.10618 81.2567 2.73945 81.0895 2.38917H77.834V17.9994H81.9276V9.56773C81.9273 8.17289 82.276 7.08385 82.9737 6.3006C83.3125 5.91619 83.7322 5.6115 84.2026 5.40837C84.6731 5.20525 85.1826 5.10872 85.6947 5.12572C87.4326 5.12572 88.3015 5.98413 88.3015 7.70095V18.0018H92.3572V7.50658C92.3579 5.68252 91.918 4.30923 91.0375 3.3867C90.1571 2.46417 88.9233 2.0029 87.336 2.0029Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M107.81 4.13211C106.351 2.7159 104.463 2.0078 102.146 2.00781C99.8279 2.00651 97.9449 2.71914 96.4966 4.14569C95.0483 5.5723 94.3242 7.50891 94.3242 9.9555V10.0196C94.3242 12.7662 95.0752 14.8422 96.5773 16.2478C98.1203 17.6065 100.106 18.3561 102.162 18.3561C104.218 18.3561 106.203 17.6065 107.746 16.2478C109.248 14.8426 109.999 12.7558 109.999 9.98757V9.92345C109.999 7.47873 109.269 5.54828 107.81 4.13211ZM105.847 10.4696C105.847 13.9456 104.613 15.6836 102.146 15.6836V15.6846C99.6993 15.6846 98.4761 13.9466 98.4762 10.4705V9.31168C98.4771 7.85272 98.8044 6.72627 99.4581 5.93234C99.7833 5.53929 100.195 5.22712 100.662 5.02046C101.128 4.81379 101.636 4.71827 102.146 4.74142C102.657 4.71895 103.168 4.81469 103.636 5.02123C104.105 5.22776 104.52 5.53952 104.849 5.93234C105.514 6.72755 105.847 7.854 105.847 9.31168L105.847 10.4696Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M20.4218 2.11275C20.3371 2.05103 20.237 2.01398 20.1325 2.00568C20.0281 1.99739 19.9234 2.0182 19.83 2.06578C19.7366 2.11337 19.6583 2.18589 19.6036 2.27529C19.5489 2.36469 19.5201 2.46749 19.5202 2.57229V8.61013L10.6617 2.11275C10.577 2.05103 10.4769 2.01398 10.3724 2.00568C10.2679 1.99739 10.1632 2.0182 10.0698 2.06578C9.97648 2.11337 9.89812 2.18589 9.84344 2.27529C9.78876 2.36469 9.75992 2.46749 9.76009 2.57229V8.61013L0.901606 2.11275C0.816912 2.05103 0.716781 2.01398 0.612313 2.00568C0.507844 1.99739 0.403121 2.0182 0.309753 2.06579C0.216385 2.11337 0.138019 2.18589 0.083345 2.27529C0.0286706 2.3647 -0.000176869 2.4675 8.15902e-07 2.57229V11.1036C0.000327031 11.1928 0.0216424 11.2808 0.0622254 11.3603C0.102809 11.4398 0.161522 11.5087 0.233623 11.5613L9.34648 18.2453C9.43117 18.307 9.5313 18.344 9.63577 18.3523C9.74024 18.3606 9.84496 18.3398 9.93833 18.2922C10.0317 18.2446 10.1101 18.1721 10.1647 18.0827C10.2194 17.9933 10.2483 17.8905 10.2481 17.7857V11.7479L19.1066 18.2453C19.1913 18.307 19.2914 18.3441 19.3958 18.3524C19.5003 18.3607 19.605 18.3399 19.6984 18.2923C19.7917 18.2447 19.8701 18.1722 19.9247 18.0828C19.9793 17.9933 20.0081 17.8905 20.0078 17.7857V11.7476L28.8682 18.2453C28.9528 18.307 29.0529 18.3441 29.1574 18.3524C29.2618 18.3607 29.3666 18.3399 29.4599 18.2923C29.5533 18.2447 29.6316 18.1722 29.6862 18.0828C29.7408 17.9933 29.7696 17.8905 29.7694 17.7857V9.25555C29.769 9.16601 29.7476 9.07781 29.7068 8.9981C29.6661 8.91839 29.6071 8.8494 29.5347 8.79673L20.4218 2.11275Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-24 bg-white relative z-20 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Everything you need to
                            manage education costs.</h2>
                        <p className="text-slate-500">We designed SkulCredit with parents and schools in mind. Simple,
                            transparent, and incredibly fast.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div
                            className="bg-slate-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-card transition-all duration-500 group border border-transparent hover:border-slate-100 reveal delay-100 hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div
                                    className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-900 mb-6 group-hover:scale-110 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                                    <Icon name="clock" className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Quick Application</h3>
                                <p className="text-slate-500 leading-relaxed font-medium mb-6">Complete your application in
                                    just 5 simple steps. Our automated system ensures you get approved within 48 hours
                                    without rigorous paperwork.</p>
                            </div>
                            <a href="#"
                                className="inline-flex items-center gap-2 text-sm font-bold text-rose-900 opacity-0 group-hover:opacity-100 transition-opacity interactable">Learn
                                more <Icon name="arrow-right" className="w-4 h-4" /></a>
                        </div>

                        <div
                            className="bg-slate-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-card transition-all duration-500 group border border-transparent hover:border-slate-100 reveal delay-200 hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div
                                    className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-900 mb-6 group-hover:scale-110 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                                    <Icon name="wallet" className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Flexible Repayment</h3>
                                <p className="text-slate-500 leading-relaxed font-medium mb-6">Choose a payment plan that
                                    works for your budget. Spread repayment within a term at a one-off service charge.
                                </p>
                            </div>
                            <a href="#"
                                className="inline-flex items-center gap-2 text-sm font-bold text-rose-900 opacity-0 group-hover:opacity-100 transition-opacity interactable">Learn
                                more <Icon name="arrow-right" className="w-4 h-4" /></a>
                        </div>

                        <div
                            className="bg-slate-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-card transition-all duration-500 group border border-transparent hover:border-slate-100 reveal delay-300 hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div
                                    className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-900 mb-6 group-hover:scale-110 group-hover:bg-rose-900 group-hover:text-white transition-all duration-500">
                                    <Icon name="shield-check" className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Verified Schools</h3>
                                <p className="text-slate-500 leading-relaxed font-medium mb-6">All partner schools are
                                    vetted and accredited. Funds are remitted directly to the school's official account
                                    to ensure total security and trust.</p>
                            </div>
                            <a href="#"
                                className="inline-flex items-center gap-2 text-sm font-bold text-rose-900 opacity-0 group-hover:opacity-100 transition-opacity interactable">Learn
                                more <Icon name="arrow-right" className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-32 bg-[#F8FAFC] relative overflow-visible">
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/50 rounded-full blur-[120px] parallax"
                        data-speed="0.15"></div>
                </div>

                <div id="parent-section" className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        <div className="lg:col-span-5 lg:sticky lg:top-40 reveal-left">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/80 text-rose-900 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-rose-200/50 shadow-sm">
                                <Icon name="zap" className="w-4 h-4" /> The Process
                            </div>
                            <h2
                                className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                How It Works for <br /><span className="text-rose-900">Parents</span></h2>
                            <p className="text-slate-500 text-lg mb-10 max-w-md">Simple steps to get your child's tuition
                                covered without the stress. We've completely eliminated the paperwork so you can get
                                approved in minutes.</p>
                            <div className="magnetic inline-block">
                                <Link to="/auth"
                                    className="px-10 py-4 bg-rose-900 text-white rounded-full font-bold shadow-xl shadow-rose-900/20 hover:bg-rose-800 transition-colors interactable flex items-center gap-3 inline-flex">
                                    Start Application <Icon name="arrow-right" className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative pb-[10vh]">
                            <div
                                className="sticky top-32 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_-5px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 mb-[20vh] z-10 reveal-right interactable group transition-all duration-300 will-change-transform">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    <div
                                        className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-50 transition-colors border border-slate-100 group-hover:border-rose-100">
                                        <span
                                            className="text-2xl font-black text-slate-300 group-hover:text-rose-900 transition-colors">01</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Profile</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">Sign up using your verified
                                            email address or phone number. Our secure platform ensures your personal
                                            data remains heavily encrypted and protected from day one.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="sticky top-40 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.12)] border border-slate-100 mb-[20vh] z-20 reveal-right delay-100 interactable group transition-all duration-300 will-change-transform">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    <div
                                        className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-50 transition-colors border border-slate-100 group-hover:border-rose-100">
                                        <span
                                            className="text-2xl font-black text-slate-300 group-hover:text-rose-900 transition-colors">02</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Submit Application</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">Provide basic details about
                                            the student, select the verified partner school, and input the required
                                            tuition amount. The 5-step form takes less than 3 minutes to complete.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="sticky top-48 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.14)] border border-slate-100 mb-[20vh] z-30 reveal-right delay-200 interactable group transition-all duration-300 will-change-transform">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    <div
                                        className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-50 transition-colors border border-slate-100 group-hover:border-rose-100">
                                        <span
                                            className="text-2xl font-black text-slate-300 group-hover:text-rose-900 transition-colors">03</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Instant Approval</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">Our automated credit system
                                            instantly reviews your profile. Once approved, you simply accept the terms
                                            and select your preferred repayment structure within the term.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="sticky top-56 bg-rose-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_-20px_50px_-12px_rgba(136,19,55,0.4)] border border-rose-800 mb-6 z-40 reveal-right delay-300 interactable group transition-all duration-300 will-change-transform">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    <div
                                        className="w-16 h-16 rounded-2xl bg-rose-800/80 flex items-center justify-center flex-shrink-0 border border-rose-700/50">
                                        <span className="text-2xl font-black text-white">04</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Tuition is Paid!</h3>
                                        <p className="text-rose-200 text-lg leading-relaxed">Sit back and relax. We
                                            immediately disburse the total funds directly to the school's bank account,
                                            and the student's receipt is generated instantly.</p>
                                            <Link to="/parent/dashboard">
                                                <button className="mt-8 px-6 py-3 bg-white text-rose-900 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg interactable">View
                                                Dashboard Example</button>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="about" className="py-24 md:py-32 bg-rose-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-800/50 rounded-full blur-[100px] -mr-64 -mt-64 animate-pulse-slow parallax"
                    data-speed="-0.15"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-950/40 rounded-full blur-[120px] -ml-40 -mb-40 parallax"
                    data-speed="0.1"></div>

                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <div className="space-y-12">
                            <div className="reveal-left">
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Choose
                                    SkulCredit?</h2>
                                <p className="text-rose-100 text-lg max-w-lg leading-relaxed">Your trusted financial partner
                                    for education. We exist to ensure that no child's learning is interrupted due to
                                    temporary cash flow challenges.</p>
                            </div>

                            <div className="space-y-6">
                                <div
                                    className="flex gap-4 items-start reveal-left delay-100 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <Icon name="check" className="w-4 h-4 text-rose-900 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Trusted by Schools</h4>
                                        <p className="text-rose-200/80 text-sm mt-1">Direct partnerships ensure safe,
                                            undisputed payments.</p>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-4 items-start reveal-left delay-200 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <Icon name="check" className="w-4 h-4 text-rose-900 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Flexible Repayment</h4>
                                        <p className="text-rose-200/80 text-sm mt-1">Spread repayment within a term at a
                                            one-off service charge.</p>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-4 items-start reveal-left delay-300 hover:translate-x-2 transition-transform">
                                    <div
                                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <Icon name="check" className="w-4 h-4 text-rose-900 stroke-[3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Secure Verification</h4>
                                        <p className="text-rose-200/80 text-sm mt-1">Bank-level encryption and fast BVN/NIN
                                            checks.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="relative reveal-scale delay-200 flex justify-center lg:justify-end">
                            <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl">
                                <img src="founder.png" alt="Founder"
                                    className="rounded-[2.8rem] object-cover h-[500px] w-full lg:w-[450px] mix-blend-normal bg-slate-50"
                                     />

                                <div
                                    className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-float-delayed flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Icon name="shield-check" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">100% Secure Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


{/*  10 Reasons section  */}
<section className="py-24 bg-white overflow-hidden border-b border-slate-100">
    <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-16 text-center reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            10 reasons Nigerian parents choose SkulCredit
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
            Designed to make school fee payments easier, more flexible, and less stressful every term.
        </p>
    </div>

    <div className="relative w-full flex overflow-hidden group reveal delay-200">
        <div
            className="animate-marquee marquee-wrapper interactable cursor-ew-resize group-hover:[animation-play-state:paused] gap-6 pr-6">

            {/*  First set  */}
            <div className="flex items-center gap-6">

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center mb-5">
                        01
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Avoid paying full school fees at once. Split large term payments into manageable installments.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Flexible installments</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center mb-5">
                        02
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Keep your child’s education uninterrupted with on-time fee payments every school term.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Uninterrupted education</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold text-sm flex items-center justify-center mb-5">
                        03
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Schools receive 100% payment upfront, giving parents immediate peace of mind.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Full upfront payment</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center mb-5">
                        04
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Repayment plans are structured around real household cash flow, not rigid deadlines.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Cash-flow friendly</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm flex items-center justify-center mb-5">
                        05
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Apply quickly online with a simple digital process designed to save parents time.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Fast digital application</h4>
                </div>

            </div>

            {/*  Second set  */}
            <div className="flex items-center gap-6">

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center mb-5">
                        06
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Reduce the financial pressure that usually comes with every new school term.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Less pressure</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 font-bold text-sm flex items-center justify-center mb-5">
                        07
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Built specifically for Nigerian families and the realities of school fee payment cycles.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Built for Nigerian parents</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center mb-5">
                        08
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Powered by secure payment infrastructure including Paystack, Remita, and Flutterwave.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Trusted payment systems</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 font-bold text-sm flex items-center justify-center mb-5">
                        09
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        A smarter way to manage recurring school expenses term after term.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Recurring support</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center mb-5">
                        10
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Gain breathing room for your household while keeping your child’s education on track.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">More breathing room</h4>
                </div>

            </div>

            {/*  Duplicate for seamless infinite scroll  */}
            <div className="flex items-center gap-6">

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center mb-5">
                        01
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Avoid paying full school fees at once. Split large term payments into manageable installments.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Flexible installments</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center mb-5">
                        02
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Keep your child’s education uninterrupted with on-time fee payments every school term.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Uninterrupted education</h4>
                </div>

                <div
                    className="w-[350px] p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex-shrink-0 hover:bg-white hover:shadow-xl transition-all">
                    <div
                        className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold text-sm flex items-center justify-center mb-5">
                        03
                    </div>
                    <p className="text-slate-700 font-medium mb-6">
                        Schools receive 100% payment upfront, giving parents immediate peace of mind.
                    </p>
                    <h4 className="font-bold text-sm text-slate-900">Full upfront payment</h4>
                </div>

            </div>

        </div>
    </div>
</section>        </div>

        <div id="view-schools" className={`${activeView === 'schools' ? 'block' : 'hidden'} view-section`}>

            <section className="bg-white pt-40 pb-48 text-center text-rose-900 relative z-0 overflow-hidden">

                <div className="absolute inset-0 bg-noise opacity-10"></div>
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] -mr-40 -mt-40">
                </div>

                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 reveal">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl mx-auto">
                        Making school fees simple, flexible, and stress-free
                    </h1>
                    <p className="text-rose-700 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Apply once. Verify securely. Choose a plan. We pay your school, parents repay flexibly.
                    </p>
                </div>
            </section>

            <section className="-mt-24 relative z-10 pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        <div
                            className="bg-rose-900 p-10 rounded-[2.5rem] text-center shadow-[0_20px_40px_-15px_rgba(136,19,55,0.25)] border border-rose-800 reveal delay-100 hover:-translate-y-2 transition-transform duration-500">

                            <div
                                className="w-16 h-16 bg-rose-800 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                <Icon name="clock" className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                Quick Application
                            </h3>

                            <p className="text-rose-100 leading-relaxed font-medium text-sm">
                                Complete your application in just 5 simple steps. Get approved within 48 hours without
                                any paperwork hassle.
                            </p>
                        </div>

                        <div
                            className="bg-rose-900 p-10 rounded-[2.5rem] text-center shadow-[0_20px_40px_-15px_rgba(136,19,55,0.25)] border border-rose-800 reveal delay-200 hover:-translate-y-2 transition-transform duration-500">

                            <div
                                className="w-16 h-16 bg-rose-800 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                <Icon name="wallet" className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                Flexible Repayment
                            </h3>

                            <p className="text-rose-100 leading-relaxed font-medium text-sm">
                                Offer parents a payment plan that works for their budget. Spread repayment within a term
                                at a one-off service charge.
                            </p>
                        </div>

                        <div
                            className="bg-rose-900 p-10 rounded-[2.5rem] text-center shadow-[0_20px_40px_-15px_rgba(136,19,55,0.25)] border border-rose-800 reveal delay-300 hover:-translate-y-2 transition-transform duration-500">

                            <div
                                className="w-16 h-16 bg-rose-800 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                <Icon name="shield-check" className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                Verified Schools
                            </h3>

                            <p className="text-rose-100 leading-relaxed font-medium text-sm">
                                All partner schools are verified and accredited, ensuring quality education and
                                guaranteed uninterrupted cash flows.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-24 bg-[#F8FAFC] border-t border-slate-100 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-rose-100 rounded-full blur-[100px] parallax"
                    data-speed="0.1"></div>
                <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100/80 text-rose-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-rose-200/50">
                            <Icon name="award" className="w-4 h-4" /> Our Network
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Prestigious
                            Schools Trust Us</h2>
                        <p className="text-slate-500 text-lg">We are proud to partner with leading institutions to make
                            education accessible.</p>
                    </div>

                    <div className="relative w-full flex overflow-hidden group reveal-scale delay-100 mt-8">
                        <div className="animate-marquee marquee-wrapper items-center gap-12 pr-12 interactable">
                            <div className="flex items-center gap-12 flex-shrink-0">
                                <img src="schools/336255632_705501197985278_7764329688078938542_n.jpg"
                                    alt="Gulf Flower Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/images (1).jpg" alt="Dothan Comprehensive Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/images.jpg" alt="Foster Prime Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.48.59.jpeg"
                                    alt="Loral International Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.50.06.jpeg"
                                    alt="St Jude's Private Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.55.55.jpeg"
                                    alt="Gracewood International Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/starts.jpeg" alt="Starts international college"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                            </div>
                            <div className="flex items-center gap-12 flex-shrink-0">
                                <img src="schools/336255632_705501197985278_7764329688078938542_n.jpg"
                                    alt="Gulf Flower Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/images (1).jpg" alt="Dothan Comprehensive Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/images.jpg" alt="Foster Prime Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.48.59.jpeg"
                                    alt="Loral International Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.50.06.jpeg"
                                    alt="St Jude's Private Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/WhatsApp Image 2026-03-23 at 20.55.55.jpeg"
                                    alt="Gracewood International Schools"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                                <img src="schools/starts.jpeg" alt="Starts international college"
                                    className="h-24 w-auto object-contain mix-blend-multiply rounded-[2rem] flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <div className="space-y-16 order-2 lg:order-1">

                            <div className="relative reveal-left delay-100">
                                <div
                                    className="absolute -top-10 -left-6 text-8xl font-black text-outline-rose pointer-events-none select-none">
                                    01</div>
                                <div className="relative z-10 pl-4">
                                    <h3 className="text-2xl font-bold text-rose-900 mb-2">Create Account</h3>
                                    <p className="text-slate-500 leading-relaxed">Sign up with your school's official email
                                        or phone number to access the partner portal and get started instantly.</p>
                                </div>
                            </div>

                            <div className="relative reveal-left delay-200">
                                <div
                                    className="absolute -top-10 -left-6 text-8xl font-black text-outline-rose pointer-events-none select-none">
                                    02</div>
                                <div className="relative z-10 pl-4">
                                    <h3 className="text-2xl font-bold text-rose-900 mb-2">Fill Application</h3>
                                    <p className="text-slate-500 leading-relaxed">Provide basic details about your school,
                                        management, and student capacity in just a few easy, secure steps.</p>
                                </div>
                            </div>

                            <div className="relative reveal-left delay-300">
                                <div
                                    className="absolute -top-10 -left-6 text-8xl font-black text-outline-rose pointer-events-none select-none">
                                    03</div>
                                <div className="relative z-10 pl-4">
                                    <h3 className="text-2xl font-bold text-rose-900 mb-2">Get Approved</h3>
                                    <p className="text-slate-500 leading-relaxed">Our dedicated compliance team reviews your
                                        submission and confirms your eligibility status quickly to activate your
                                        profile.</p>
                                </div>
                            </div>

                            <div className="relative reveal-left delay-400">
                                <div
                                    className="absolute -top-10 -left-6 text-8xl font-black text-outline-rose pointer-events-none select-none">
                                    04</div>
                                <div className="relative z-10 pl-4">
                                    <h3 className="text-2xl font-bold text-rose-900 mb-2">Fees Disbursed</h3>
                                    <p className="text-slate-500 leading-relaxed">Once a parent is approved, we send the
                                        total tuition funds directly to your official school bank account.</p>
                                </div>
                            </div>

                        </div>

                        <div className="order-1 lg:order-2 text-center lg:text-right lg:pl-10 reveal-right">
                            <h2
                                className="text-5xl md:text-6xl font-extrabold text-rose-900 mb-6 tracking-tight leading-[1.1]">
                                How It Works for <br />Partner School</h2>
                            <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-md ml-auto font-medium">A simple
                                process to help your students get their tuition covered while guaranteeing your cash
                                flow.</p>
                            <div className="magnetic inline-block">
                                <a href="/school/auth">
                                    <button
                                    onClick={() => {}}
                                    className="px-10 py-4 bg-rose-900 text-white rounded-full font-bold shadow-xl hover:bg-rose-800 transition-colors interactable">Start
                                    Application</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl reveal-scale">
                    <div
                        className="max-w-5xl mx-auto bg-white border-2 border-rose-900/10 rounded-[2.5rem] p-8 md:p-14 shadow-xl">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Eligibility Criteria:</h2>
                        <p className="text-slate-600 font-medium mb-10">To be eligible to join the Skulcredit network as a
                            partner school, your institution must meet the following requirements:</p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">Your
                                    school is a registered and accredited educational institution recognized by relevant
                                    authorities.</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    can provide valid business registration documents (CAC certificate, tax
                                    identification, etc.).</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    are willing to submit school and management details for verification and background
                                    checks.</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    have a designated finance or admin representative to manage loan requests and
                                    approvals.</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    agree to verify student tuition details and payment records accurately when
                                    requested.</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    consent to Skulcredit's due diligence process, including background and compliance
                                    verification.</p>
                            </li>
                            <li className="flex items-start gap-5 group">
                                <div className="mt-1 flex-shrink-0 text-rose-800"><Icon name="check" className="w-6 h-6 stroke-[3]" /></div>
                                <p className="text-slate-700 font-medium group-hover:text-rose-900 transition-colors">You
                                    will maintain an active dashboard account to track, approve, or confirm
                                    parent/student loan applications.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>

        <section id="faq" className="py-32 bg-slate-50 relative overflow-hidden view-section">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4 reveal-left">
                        <div className="lg:sticky lg:top-32 text-left space-y-6">
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-900 rounded-full text-xs font-bold uppercase tracking-wider">
                                Support</div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Frequently
                                Asked Questions</h2>
                            <p className="text-slate-500 text-lg">Can't find the answer you're looking for? Reach out to our
                                customer support team anytime.</p>
                            <a href="#contact-us"
                                className="inline-flex items-center gap-2 text-rose-900 font-bold hover:gap-3 transition-all mt-4 border-b-2 border-rose-200 hover:border-rose-900 pb-1 interactable">
                                Contact Support <Icon name="arrow-right" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-100 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    Who can become a SkulCredit Partner School?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">Any accredited primary,
                                    secondary, or tertiary institution can apply to join our partner network. Your
                                    school must be officially registered and approved by the appropriate education board
                                    in Nigeria.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-200 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    What information do I need to provide as a parent?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">You'll need basic identification
                                    (BVN/NIN), proof of employment or stable income, the student's details, and the
                                    school's official fee invoice or admission letter.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-300 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    How long does the approval process take?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">Our automated system processes
                                    most applications within 15 minutes. Final disbursement to the school's account is
                                    guaranteed within 24 to 48 hours of your acceptance of the loan terms.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-400 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    What is the interest rate?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">There is no interest rate, but a
                                    service charge as low as 10% one-off payment depending on the tiering system.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-500 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    What is the tiering system?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">The tiering system is a ranking
                                    placement for schools in order to arrive at the appropriate service charge.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-500 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    What is the Service charge?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">This is a one-off payment made
                                    upon approval before the tuition fee is disbursed to the schools accordingly.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-[1.5rem] p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group reveal-right delay-500 interactable"
                            onClick={() => {}}>
                            <div className="flex justify-between items-center pointer-events-none">
                                <h3
                                    className="font-bold text-slate-900 text-lg group-hover:text-rose-900 transition-colors pr-4">
                                    Can I pay off my loan early?</h3>
                                <div
                                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-rose-900 group-hover:text-white transform transition-all duration-300 icon-rotate flex-shrink-0">
                                    <Icon name="chevron-down" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="max-h-0 overflow-hidden accordion-content opacity-0">
                                <p className="pt-6 leading-relaxed text-slate-600 text-md">Yes! You can liquidate or pay off
                                    your outstanding balance at any time before the end of your tenure. We do not charge
                                    any early repayment penalties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact-us" className="bg-white py-12 md:py-20">

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div
                    className="bg-[#87144B] text-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-lg relative overflow-hidden">

                    <div className="absolute w-52 md:w-72 h-52 md:h-72 bg-white/10 rounded-full blur-3xl -top-16 -right-16">
                    </div>
                    <div
                        className="absolute w-40 md:w-60 h-40 md:h-60 bg-black/20 rounded-full blur-3xl -bottom-16 -left-16">
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">

                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Join the Waitlist</h2>
                            <p className="text-white/80 text-sm md:text-base mb-6 md:mb-8">
                                We’re building a better way to pay school fees. Join now and be first in line.
                            </p>

                            <div className="space-y-3 md:space-y-4 text-sm md:text-base">

                                <div className="flex items-center gap-3 md:gap-4">
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        📞
                                    </div>
                                    <span>09168349890</span>
                                </div>

                                <div className="flex items-center gap-3 md:gap-4">
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                        ✉️
                                    </div>
                                    <span>hello@getskulcreditng.com</span>
                                </div>

                            </div>
                        </div>

                        <form action="https://formsubmit.co/hello@getskulcreditng.com" method="POST"
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

                        </form>

                    </div>
                </div>

            </div>
        </section>


        <footer className="bg-[#87144B] text-white pt-12 md:pt-16 pb-8 md:pb-10 relative overflow-hidden">

            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white rounded-full blur-3xl top-[-80px] left-[-80px]">
                </div>
                <div
                    className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-black rounded-full blur-3xl bottom-[-80px] right-[-80px]">
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12 text-sm md:text-base">

                    <div>
                        <img src="logo_white.png" className="h-16 md:h-14 mb-3 md:mb-4 ml-[-20px]" />
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                            Making education accessible through smart financing solutions.
                        </p>

                        <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">

                            <a href="mailto:hello@getskulcreditng.com" className="social">
                                <img src="https://cdn.simpleicons.org/gmail/ffffff" className="w-4 md:w-5 h-4 md:h-5" />
                            </a>

                            <a href="https://x.com/skulcredit" target="_blank" className="social">
                                <img src="https://cdn.simpleicons.org/x/ffffff" className="w-4 md:w-5 h-4 md:h-5" />
                            </a>

                            <a href="https://www.linkedin.com/company/skulcredit/" target="_blank" className="social">
                                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                                    className="w-4 md:w-5 h-4 md:h-5" />
                            </a>

                            <a href="https://www.instagram.com/skulcredit" target="_blank" className="social">
                                <img src="https://cdn.simpleicons.org/instagram/ffffff" className="w-4 md:w-5 h-4 md:h-5" />
                            </a>

                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Platform</h4>
                        <ul className="space-y-2 md:space-y-3 text-white/80 text-xs md:text-sm">
                            <li><a href="#" className="footer-link">How it Works</a></li>
                            <li><a href="#" className="footer-link">For Parents</a></li>
                            <li><a href="#" className="footer-link">For Schools</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
                        <ul className="space-y-2 md:space-y-3 text-white/80 text-xs md:text-sm">
                            <li><a href="#" className="footer-link">About</a></li>

                            <li>
                                <button onClick={() => {}} className="footer-link">
                                    Careers
                                </button>
                            </li>

                            <li>
                                <button onClick={() => {}} className="footer-link">
                                    Blog
                                </button>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Newsletter</h4>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-2 md:space-y-3">
                            <input id="emailInput" type="email" placeholder="Enter your email"
                                className="w-full px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none" />

                            <button type="submit"
                                className="w-full bg-white text-[#87144B] py-2 md:py-3 text-xs md:text-sm rounded-lg font-medium hover:scale-[1.02] transition">
                                Subscribe
                            </button>

                            <p id="emailMsg" className="text-green-300 text-xs hidden">
                                Email sent successfully!
                            </p>
                        </form>
                    </div>

                </div>

                <div
                    className="border-t border-white/20 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white/60">
                    <p>© 2026 SkulCredit. All rights reserved.</p>

                    <div className="flex gap-4 md:gap-6 mt-2 md:mt-0">
                        <a href="#" className="footer-link">Privacy</a>
                        <a href="#" className="footer-link">Terms</a>
                    </div>
                </div>

            </div>
        </footer>

    </main>

    

    

    

    </>
  );
};

export default HomePage;
