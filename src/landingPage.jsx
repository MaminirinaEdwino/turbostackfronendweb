import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Layers, Code2, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-800 font-sans selection:bg-[#368f8b]/20 selection:text-[#368f8b] relative overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* EFFETS DE FOND, GRILLE STUDIO ET FORMES GÉOMÉTRIQUES          */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* GRILLE DE LABORATOIRE / STUDIO (GRID PATTERN) */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b3b58 1px, transparent 1px),
              linear-gradient(to bottom, #3b3b58 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />

        {/* Lignes de repères de studio (Axe central fin) */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#368f8b]/10" />
        <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-[#368f8b]/10" />

        {/* Blob Émeraude Haut Gauche */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#368f8b]/15 rounded-full blur-3xl" />
        
        {/* Forme SVG Organique Droite */}
        <svg className="absolute top-12 -right-16 w-[500px] h-[500px] opacity-15 fill-[#368f8b]/30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-59.1C57.4,-48.9,66.8,-34.5,70.3,-19.1C73.8,-3.7,71.4,12.7,64.2,26.8C57,40.9,45,52.7,30.8,60.5C16.6,68.3,0.2,72,-16.9,69.5C-34,67,-51.8,58.3,-62.7,44.1C-73.6,29.9,-77.6,10.2,-74.6,-8.2C-71.6,-26.6,-61.6,-43.7,-47.4,-54.2C-33.2,-64.7,-16.6,-68.6,0.3,-69.1C17.2,-69.6,32,-69.3,44.7,-59.1Z" transform="translate(100 100)" />
        </svg>

        {/* Blob Slate Blue Milieu Gauche */}
        <div className="absolute top-[45%] -left-32 w-[450px] h-[450px] bg-[#3b3b58]/10 rounded-full blur-3xl" />
        
        {/* Anneau Géométrique Translucide */}
        <div className="absolute top-[60%] right-10 w-80 h-80 border-4 border-[#368f8b]/10 rounded-full" />
        <div className="absolute top-[62%] right-16 w-64 h-64 border-2 border-dashed border-[#3b3b58]/10 rounded-full" />

        {/* Blob Émeraude Bas Droit */}
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      {/* 1. BARRE DE NAVIGATION FLOTTANTE */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 px-6 lg:px-12 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#368f8b] to-emerald-400 flex items-center justify-center text-white shadow-md shadow-[#368f8b]/20">
              <Zap size={20} />
            </div>
            <span className="font-extrabold text-xl text-[#3b3b58] tracking-tight">TurboStack</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-[#368f8b] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#368f8b] transition-colors">About</a>
            <a href="#subscription" className="hover:text-[#368f8b] transition-colors">Subscription</a>
          </nav>

          <button className="text-sm font-semibold text-[#3b3b58] hover:text-[#368f8b] px-4 py-2 rounded-xl hover:bg-slate-100 transition-all cursor-pointer">
            Log In
          </button>
        </div>
      </header>

      {/* 2. SECTION HERO */}
      <section id="home" className="relative z-10 pt-12 pb-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mockup Visuel (Gauche) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-center">
            <div className="w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#368f8b] via-emerald-400 to-[#3b3b58] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative w-full bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[320px] overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-50 text-[#368f8b] text-xs font-semibold rounded-full border border-[#368f8b]/20 flex items-center gap-1.5">
                    <Terminal size={14} /> Go-Native & Pure Stack
                  </span>
                </div>
                
                <div className="text-center font-black text-4xl lg:text-5xl tracking-widest text-[#3b3b58] drop-shadow-xs mb-2">
                  HTML
                </div>
                <div className="text-center font-black text-4xl lg:text-5xl tracking-widest text-[#368f8b] drop-shadow-xs">
                  CSS
                </div>

                {/* Badge Flottant */}
                <div className="absolute right-4 bottom-4 bg-[#3b3b58] text-white p-3 rounded-xl shadow-lg flex items-center gap-2 text-xs font-medium border border-white/10">
                  <Code2 size={16} className="text-emerald-400" />
                  <span>Zero Heavy Frameworks</span>
                </div>
              </div>
            </div>

            <button className="mt-8 group flex items-center gap-2 bg-[#368f8b] hover:bg-[#2d7975] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#368f8b]/25 hover:shadow-xl hover:shadow-[#368f8b]/35 transition-all transform hover:-translate-y-0.5 cursor-pointer">
              <span>Try TurboStack</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Textes Hero (Droite) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#368f8b]/10 text-[#368f8b] text-xs font-semibold border border-[#368f8b]/20">
              <Sparkles size={14} />
              <span>Full-Stack Development Studio</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#3b3b58] leading-tight tracking-tight">
              Go from idea to deployment in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#368f8b] to-emerald-500">record time</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Generate your website and web application structures with optimized components. Stop wasting time on the boilerplate; focus on what makes your project unique.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SECTION ABOUT TURBOSTACK */}
      <section id="about" className="relative z-10 py-20 max-w-6xl mx-auto px-6">
        
        {/* Titre avec fond dégradé subtil */}
        <div className="relative mb-16 text-center">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#368f8b]/10 via-[#368f8b]/20 to-[#368f8b]/10 border border-[#368f8b]/30 rounded-2xl backdrop-blur-xs shadow-xs">
            <h2 className="text-2xl font-bold text-[#3b3b58] tracking-tight">About TurboStack</h2>
          </div>
        </div>

        <div className="space-y-16">
          {/* Bloc 1 : Image à gauche / Texte à droite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 h-64 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#368f8b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-full bg-emerald-50/60 rounded-xl border border-dashed border-[#368f8b]/40 flex flex-col items-center justify-center text-[#368f8b] gap-2 p-4 text-center">
                <Layers size={36} />
                <span className="text-xs font-semibold">Visual Database & API Modeling</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#3b3b58]">Streamlined Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Why rewrite the same controllers and integrate the same forms for every new project? Our intuitive interface allows you to assemble your technological building blocks and generate clean, ready-to-use code.
              </p>
            </div>
          </div>

          {/* Bloc 2 : Texte à gauche / Image à droite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-xl font-bold text-[#3b3b58]">Built for Modern Developers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designed by developers for developers. Whether you use Symfony, Go, or React, our tool adapts to your stack to maintain complete consistency in your workflow.
              </p>
            </div>

            <div className="order-1 md:order-2 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 h-64 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b3b58]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-[#3b3b58] gap-2 p-4 text-center">
                <Cpu size={36} />
                <span className="text-xs font-semibold">Native Standard-Library Export</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION SUBSCRIPTION */}
      <section id="subscription" className="relative z-10 py-20 max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#368f8b]/10 via-[#368f8b]/20 to-[#368f8b]/10 border border-[#368f8b]/30 rounded-2xl backdrop-blur-xs shadow-xs">
            <h2 className="text-2xl font-bold text-[#3b3b58] tracking-tight">Subscription Plans</h2>
          </div>
        </div>

        {/* Cartes Tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Carte 1 : Développeur Solo */}
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative">
            <div>
              <div className="flex justify-center mb-6">
                <span className="bg-[#368f8b] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Développeur Solo
                </span>
              </div>
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-[#3b3b58]">
                <Code2 size={28} />
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Accès à tous les générateurs de base</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Exportation de code standard (Go, PHP, JS)</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#3b3b58] hover:bg-[#2e2e46] text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
              Try for 2€ / month
            </button>
          </div>

          {/* Carte 2 : Créateur Web (Mise en avant) */}
          <div className="bg-white border-2 border-[#368f8b] rounded-3xl p-8 shadow-2xl shadow-[#368f8b]/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#368f8b] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Most Popular
            </div>
            <div>
              <div className="flex justify-center mb-6">
                <span className="bg-[#368f8b] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Créateur Web
                </span>
              </div>
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-2xl mb-6 flex items-center justify-center text-[#368f8b]">
                <Layers size={28} />
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Simplified Drag & Drop Interface</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Conversion optimized and page templates</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#368f8b] hover:bg-[#2d7975] text-white text-xs font-bold py-3.5 rounded-xl shadow-lg shadow-[#368f8b]/25 transition-all cursor-pointer">
              Try for 15€ / month
            </button>
          </div>

          {/* Carte 3 : Power User */}
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative">
            <div>
              <div className="flex justify-center mb-6">
                <span className="bg-[#368f8b] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Power User
                </span>
              </div>
              <div className="w-20 h-20 mx-auto bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-[#3b3b58]">
                <ShieldCheck size={28} />
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Everything that's in the Developer plan</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 size={16} className="text-[#368f8b] shrink-0 mt-0.5" />
                  <span>Access to advanced CLIs and automation scripts</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#3b3b58] hover:bg-[#2e2e46] text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition-all cursor-pointer">
              Try for 29€ / month
            </button>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="relative z-10 py-20 max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#3b3b58] via-[#2d2d44] to-slate-900 rounded-3xl p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10">
          
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#368f8b]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="w-full lg:w-1/2 h-56 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-emerald-300 text-xs font-semibold gap-3 backdrop-blur-xs relative z-10">
            <Zap size={40} className="text-[#368f8b]" />
            <span>TurboStack High-Speed Engine</span>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Ready to speed up your workflow?
            </h2>
            <button className="bg-[#368f8b] hover:bg-[#2d7975] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#368f8b]/30 transition-all cursor-pointer hover:scale-105 active:scale-95">
              Create an account
            </button>
          </div>

        </div>
      </section>

      {/* 6. PIED DE PAGE (FOOTER) */}
      <footer className="relative z-10 bg-[#368f8b] text-white pt-16 pb-8 px-6 lg:px-12 border-t border-emerald-600/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-emerald-300" />
              <h3 className="font-extrabold text-base tracking-tight">TurboStack</h3>
            </div>
            <p className="text-emerald-100/80 max-w-sm">
              Make your project as fast as lightning with clean code generators.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2.5">
            <span className="font-bold uppercase tracking-wider text-emerald-200 mb-1">Quick Links</span>
            <a href="#home" className="hover:text-emerald-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-200 transition-colors">About</a>
            <a href="#subscription" className="hover:text-emerald-200 transition-colors">Subscription</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-emerald-400/20 text-center text-[11px] text-emerald-100/60">
          Copyright © 2026 TurboStack. All rights reserved.
        </div>
      </footer>

    </div>
  );
}