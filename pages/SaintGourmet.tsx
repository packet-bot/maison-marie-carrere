import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const SaintGourmet: React.FC = () => {
  const { t } = useLanguage();
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Scroll-linked fade effect for hero logo
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 300;
      const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chocolate collection flavors
  const chocolateFlavors = [
    { key: 'praline', name: t('sg.collection.praline'), color: 'bg-amber-900' },
    { key: 'moringa', name: t('sg.collection.moringa'), color: 'bg-emerald-800' },
    { key: 'bissap', name: t('sg.collection.bissap'), color: 'bg-rose-900' },
    { key: 'cafe', name: t('sg.collection.cafe'), color: 'bg-stone-800' },
    { key: 'blanc', name: t('sg.collection.blanc'), color: 'bg-amber-100' },
  ];

  return (
    <div className="bg-[#051F1A] text-gray-300 w-full">
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/images/sain-gourmet/sain-gourmet-hero.jpeg"
          alt="Sain Gourmet Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Base Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Gradient Scrim for Logo Readability - behind logo, on top of image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"
          style={{ opacity: scrollOpacity }}
        ></div>

        {/* Centered Logo - Fades on Scroll */}
        <div
          className="relative z-10 text-center px-6 transition-opacity duration-100"
          style={{ opacity: scrollOpacity }}
        >
          <img
            src="/images/logos/Logo Sain Gourmet.png"
            alt="Sain Gourmet"
            className="h-48 md:h-72 mx-auto"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.8)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}
          />
        </div>

        {/* Au Lait Frais Badge - Stays Visible */}
        <div className="absolute bottom-8 right-8 z-10">
          <div className="border border-[#D4AF37] rounded-full px-4 py-2 text-[#D4AF37] text-xs tracking-widest uppercase backdrop-blur-sm bg-black/30">
            Au Lait Frais
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: CHOCOLATE COLLECTION ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
              {t('sg.collection.title')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {t('sg.collection.desc')}
            </p>
            <a
              href="#/sain-gourmet/catalog"
              className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 uppercase tracking-widest text-sm font-bold rounded hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              {t('sg.hero.btn')}
            </a>
          </div>

          {/* Collection Grid with Feature Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left: Feature Image */}
            <div className="relative">
              <img
                src="/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg"
                alt="Le Carré Collection"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.15)]"></div>
            </div>

            {/* Right: Flavor Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {chocolateFlavors.map((flavor) => (
                <div
                  key={flavor.key}
                  className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 text-center hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className={`w-12 h-12 ${flavor.color} rounded-full mx-auto mb-4 shadow-lg border-2 border-[#D4AF37] group-hover:scale-110 transition-transform`}></div>
                  <h4 className="text-[#D4AF37] font-semibold text-sm tracking-wide">
                    {flavor.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div >
      </section >

      {/* ==================== SECTION 3: HAUTE BOUCHERIE ==================== */}
      < section className="py-24 px-6 bg-[#0a0a0a]" >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image with Gold Glow */}
            <div className="relative">
              <img
                src="/images/sain-gourmet/Sain-gourmet-feast-capon.jpeg"
                alt="Festive Table"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Gold glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_80px_rgba(212,175,55,0.2)]"></div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:pl-8">
              <span className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold mb-4 block">
                {t('sg.boucherie.sub')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">
                {t('sg.boucherie.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {t('sg.boucherie.desc')}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 uppercase tracking-widest text-sm font-bold rounded hover:bg-[#D4AF37] hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('sg.boucherie.btn')}
              </a>
            </div>
          </div>
        </div>
      </section >

      {/* ==================== SECTION 4: CORPORATE GIFTING ==================== */}
      < section className="py-32 px-6 relative overflow-hidden" >
        {/* Subtle texture overlay */}
        < div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div >

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[#D4AF37] tracking-widest uppercase text-xs font-bold mb-4 block">
            {t('sg.corporate.sub')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">
            {t('sg.corporate.title')}
          </h2>
          <p className="text-gray-300 leading-relaxed text-xl mb-10 max-w-2xl mx-auto">
            {t('sg.corporate.desc')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D4AF37] text-black px-10 py-4 uppercase tracking-widest text-sm font-bold rounded hover:bg-[#b8962f] transition-colors"
          >
            {t('sg.corporate.btn')}
          </a>
        </div>
      </section >
    </div >
  );
};

export default SaintGourmet;
