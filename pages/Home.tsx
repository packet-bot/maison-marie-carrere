import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Hero Section - "Couture Signature" Style */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/saint-louis-market.jpg"
            alt="Senegalese Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          {/* White Script Logo Image */}
          <img
            src="/Images et logos/hero-logo-white.png"
            alt="Maison Marie Carrère"
            className="w-[350px] md:w-[550px] h-auto drop-shadow-lg fade-in"
          />

          {/* Anchor Subtitle - EST. SAINT-LOUIS */}
          <span className="mt-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-sans fade-in">
            EST. SAINT-LOUIS
          </span>

          {/* Main Tagline - White Sans-Serif */}
          <p className="mt-2 text-sm md:text-base uppercase tracking-[0.2em] text-white font-sans font-medium mb-4 fade-in">
            {t('home.hero.sub')}
          </p>

          <p className="max-w-xl text-lg text-white/90 mb-10 font-light font-sans fade-in">
            {t('home.hero.desc')}
          </p>

          <div className="flex flex-col md:flex-row gap-4 fade-in">
            <Link to="/heritage" className="px-8 py-3 bg-[#D4AF37] text-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              {t('home.hero.btn.heritage')}
            </Link>
            <Link to="/process" className="px-8 py-3 border border-white text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors">
              {t('home.hero.btn.process')}
            </Link>
          </div>

          <div className="absolute bottom-10 animate-bounce">
            <ChevronDown className="text-white w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Brand Gateway - Museum Card Layout */}
      <section className="py-24 bg-mmc-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mmc-gold uppercase tracking-widest text-sm font-bold">{t('home.portfolio.sub')}</span>
            <h2 className="text-5xl font-serif font-bold text-mmc-navy mt-4">{t('home.portfolio.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sain Gourmet - Luxury Positioning (Serif + Gold) */}
            <div className="group flex flex-col bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* Image Section - Clean, No Overlays */}
              <div className="h-[400px] overflow-hidden">
                <img
                  src="/images/products/yogurt.jpg"
                  alt="Sain Gourmet"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content Block - White Background */}
              <div className="bg-white p-6 text-center flex-grow">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] mb-2 block font-serif">{t('home.brand.sg.sub')}</span>
                <h3 className="text-2xl font-serif uppercase tracking-wider text-[#D4AF37] mb-3">Sain Gourmet</h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {t('home.brand.sg.desc')}
                </p>
                <Link to="/sain-gourmet" className="inline-flex items-center gap-2 text-[#D4AF37] uppercase text-xs tracking-widest font-serif border-b border-[#D4AF37] pb-1 hover:text-[#b8993a] hover:border-[#b8993a] transition-colors">
                  {t('home.brand.sg.btn')} <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Pleine Passion - Fresh/Market Positioning (Sans-Serif + Navy) */}
            <div className="group flex flex-col bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* Image Section - Clean, No Overlays */}
              <div className="h-[400px] overflow-hidden">
                <img
                  src="/images/products/milk-pp.jpg"
                  alt="Pleine Passion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content Block - White Background */}
              <div className="bg-white p-6 text-center flex-grow">
                <h3 className="text-2xl font-sans font-bold text-[#1e3a5f] mb-3">Pleine Passion</h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {t('home.brand.pp.desc')}
                </p>
                <Link to="/pleine-passion" className="inline-flex items-center gap-2 text-[#1e3a5f] uppercase text-xs tracking-widest font-sans font-medium border-b border-[#1e3a5f] pb-1 hover:text-[#2d4a6f] hover:border-[#2d4a6f] transition-colors">
                  {t('home.brand.pp.btn')} <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Toot'ank - Baby/Care Positioning (Rounded + Teal) */}
            <div className="group flex flex-col bg-white shadow-lg overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* Image Section - Clean, No Overlays */}
              <div className="h-[400px] overflow-hidden rounded-t-2xl">
                <img
                  src="/images/products/baby-food.jpg"
                  alt="Toot'ank"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Content Block - White Background */}
              <div className="bg-white p-6 text-center flex-grow">
                <h3 className="text-2xl font-bold text-[#2dd4bf] mb-3" style={{ fontFamily: "'Quicksand', 'Nunito', sans-serif" }}>toot'ank</h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {t('home.brand.tt.desc')}
                </p>
                <Link to="/tootank" className="inline-flex items-center gap-2 bg-[#2dd4bf] text-white px-5 py-2 rounded-full text-xs tracking-widest font-bold hover:bg-[#14b8a6] transition-colors">
                  {t('home.brand.tt.btn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Intro - Quote Section with Improved Legibility */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-mmc-navy mb-8 leading-tight">
            {t('home.quote')}
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            {t('home.quote.desc')}
          </p>

        </div>
      </section>
    </div>
  );
};

export default Home;
