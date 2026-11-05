import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. BARRE DE NAVIGATION */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-emerald-700 transition-colors">Home</a>
          <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
          <a href="#subscription" className="hover:text-emerald-700 transition-colors">Subscription</a>
        </nav>
        <button className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors">
          Log In
        </button>
      </header>

      {/* 2. SECTION HERO */}
      <section id="home" className="relative overflow-hidden px-8 py-16 md:py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Illus/Aperçu de gauche */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center min-h-[260px] relative">
            <div className="text-center font-extrabold text-2xl tracking-widest text-slate-700 mb-2">
              HTML
            </div>
            <div className="text-center font-extrabold text-2xl tracking-widest text-emerald-700">
              CSS
            </div>
            {/* Silhouette d'illustration fictive */}
            <div className="absolute right-6 bottom-4 w-12 h-24 bg-slate-700 rounded-t-full opacity-80" />
          </div>
          <button className="mt-6 bg-[#368f8b] hover:bg-[#2e7975] text-white font-medium px-8 py-2.5 rounded-md shadow-sm transition-all">
            Try Webmaker
          </button>
        </div>

        {/* Texte de droite */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Go from idea to deployment in record time
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
            Generate your website and web application structures with optimized components. Stop wasting time on the boilerplate; focus on what makes your project unique.
          </p>
        </div>
      </section>

      {/* 3. SECTION ABOUT WEB MAKER */}
      <section id="about" className="py-12 max-w-5xl mx-auto px-6">
        {/* En-tête de section encadré */}
        <div className="border border-emerald-600/40 bg-emerald-50/50 rounded-md py-2.5 text-center mb-12">
          <h2 className="text-xl font-semibold text-slate-800">About Web Maker</h2>
        </div>

        <div className="space-y-12">
          {/* Bloc 1 : Image à gauche / Texte à droite */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 h-56 flex items-center justify-center shadow-xs">
              <div className="w-full h-full bg-emerald-100/50 rounded-lg flex items-center justify-center text-emerald-800 text-xs font-semibold">
                [ Illustration Interface & Design ]
              </div>
            </div>
            <div className="w-full md:w-1/2 text-sm text-slate-600 leading-relaxed">
              Why rewrite the same controllers and integrate the same forms for every new project? Our intuitive interface allows you to assemble your technological building blocks and generate clean, ready-to-use code.
            </div>
          </div>

          {/* Bloc 2 : Texte à gauche / Image à droite */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-sm text-slate-600 leading-relaxed">
              Designed by developers for developers. Whether you use Symfony, Go, or React, our tool adapts to your stack to maintain complete consistency in your workflow.
            </div>
            <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 h-56 flex items-center justify-center shadow-xs">
              <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 text-xs font-semibold">
                [ Illustration Code & Composants ]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION SUBSCRIPTION */}
      <section id="subscription" className="py-12 max-w-5xl mx-auto px-6">
        {/* En-tête de section encadré */}
        <div className="border border-emerald-600/40 bg-emerald-50/50 rounded-md py-2.5 text-center mb-12">
          <h2 className="text-xl font-semibold text-slate-800">Subscription</h2>
        </div>

        {/* Cartes d'abonnement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte 1 : Developpeur Solo */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-between min-h-[380px] text-center">
            <div className="w-full flex flex-col items-center">
              <span className="bg-[#368f8b] text-white text-xs font-medium px-4 py-1 rounded-full mb-6">
                Développeur Solo
              </span>
              <div className="w-24 h-20 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-xs text-slate-400">
                [ Illus ]
              </div>
              <p className="text-xs text-slate-600 mb-2">Accès à tous les générateurs de base.</p>
              <p className="text-xs text-slate-500">Exportation de code standard (Go, PHP, JS).</p>
            </div>
            <button className="w-full mt-6 bg-[#3b3b58] hover:bg-[#2d2d44] text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
              Try for 2€ / month
            </button>
          </div>

          {/* Carte 2 : Créateur Web */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-between min-h-[380px] text-center">
            <div className="w-full flex flex-col items-center">
              <span className="bg-[#368f8b] text-white text-xs font-medium px-4 py-1 rounded-full mb-6">
                Créateur Web
              </span>
              <div className="w-24 h-20 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-xs text-slate-400">
                [ Illus ]
              </div>
              <p className="text-xs text-slate-600 mb-2">Simplified Drag & Drop Interface.</p>
              <p className="text-xs text-slate-500">Conversion optimized and page templates.</p>
            </div>
            <button className="w-full mt-6 bg-[#3b3b58] hover:bg-[#2d2d44] text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
              Try for 15€ / month
            </button>
          </div>

          {/* Carte 3 : Power User */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-between min-h-[380px] text-center">
            <div className="w-full flex flex-col items-center">
              <span className="bg-[#368f8b] text-white text-xs font-medium px-4 py-1 rounded-full mb-6">
                Power User
              </span>
              <div className="w-24 h-20 bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-xs text-slate-400">
                [ Illus ]
              </div>
              <p className="text-xs text-slate-600 mb-2">Everything that's in the Developer plan.</p>
              <p className="text-xs text-slate-500">Access to advanced CLIs and automation scripts.</p>
            </div>
            <button className="w-full mt-6 bg-[#3b3b58] hover:bg-[#2d2d44] text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
              Try for 29€ / month
            </button>
          </div>

        </div>
      </section>

      {/* 5. SECTION CALL TO ACTION (Speed up workflow) */}
      <section className="py-16 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 bg-white border border-slate-200 rounded-xl p-6 h-56 flex items-center justify-center shadow-xs">
          <div className="w-full h-full bg-emerald-50/50 rounded-lg flex items-center justify-center text-slate-500 text-xs font-semibold">
            [ Illustration Dashboard & Graphiques ]
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
            Ready to speed up your workflow?
          </h2>
          <button className="bg-[#368f8b] hover:bg-[#2e7975] text-white font-medium px-8 py-3 rounded-md shadow-sm transition-all">
            Create an account
          </button>
        </div>
      </section>

      {/* 6. PIED DE PAGE (FOOTER) */}
      <footer className="bg-[#368f8b] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-xs">
          <div className="space-y-2">
            <h3 className="font-bold text-sm">Webmaker</h3>
            <p className="text-emerald-100">Make your project as fast as lightning.</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider text-emerald-200 mb-1">Link</span>
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#subscription" className="hover:underline">Subscription</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-emerald-600/50 text-[10px] text-emerald-100">
          Copyright © 2026
        </div>
      </footer>

    </div>
  );
}