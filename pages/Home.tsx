import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Hero Section */}
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
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 mt-5 text-mmc-gold fade-in">{t('home.hero.sub')}</h2>
          <img
            src="/images/hero/logo-mcc2.png"
            alt="Maison Marie Carrère"
            className="w-full mb-8 fade-in"
            style={{
              maxWidth: '632px',
              filter: 'brightness(0) invert(76%) sepia(13%) saturate(1478%) hue-rotate(359deg) brightness(89%) contrast(88%)'
            }}
          />
          <p className="max-w-xl text-lg text-stone-200 mb-10 font-light fade-in">
            {t('home.hero.desc')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 fade-in">
            <Link to="/heritage" className="px-8 py-3 bg-mmc-gold text-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
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

      {/* Brand Gateway - The core navigation */}
      <section className="py-24 bg-mmc-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-mmc-gold uppercase tracking-widest text-sm font-bold">{t('home.portfolio.sub')}</span>
            <h2 className="text-5xl font-serif font-bold text-mmc-navy mt-4">{t('home.portfolio.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
            {/* Pleine Passion */}
            <div className="group relative h-[500px] overflow-hidden">
              <img
                src="/images/products/milk-pp.jpg"
                alt="Pleine Passion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mmc-navy/30 group-hover:bg-mmc-navy/50 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <img src="/images/logos/Logo pleine passion.png" alt="Pleine Passion" className="h-[164px] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs text-sm mb-6">
                  {t('home.brand.pp.desc')}
                </p>
                <Link to="/pleine-passion" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 border-b border-white pb-1 flex items-center gap-2 uppercase text-xs tracking-widest hover:text-mmc-gold hover:border-mmc-gold">
                  {t('home.brand.pp.btn')} <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sain Gourmet */}
            <div className="group relative h-[500px] overflow-hidden border-l border-r border-white/20">
              <img
                src="/images/products/yogurt.jpg"
                alt="Sain Gourmet"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <span className="text-mmc-gold text-[10px] uppercase tracking-[0.3em] mb-2">{t('home.brand.sg.sub')}</span>
                <img src="/images/logos/Logo Sain Gourmet.png" alt="Sain Gourmet" className="h-[164px] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs text-sm mb-6 text-stone-300">
                  {t('home.brand.sg.desc')}
                </p>
                <Link to="/saint-gourmet" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 border-b border-mmc-gold pb-1 flex items-center gap-2 uppercase text-xs tracking-widest text-mmc-gold">
                  {t('home.brand.sg.btn')} <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Toot'ank */}
            <div className="group relative h-[500px] overflow-hidden">
              <img
                src="/images/products/baby-food.jpg"
                alt="Toot'ank"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-tootank-green/20 group-hover:bg-tootank-green/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <img src="/images/logos/logo tootank.png" alt="Toot'ank" className="h-[164px] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs text-sm mb-6 font-medium">
                  {t('home.brand.tt.desc')}
                </p>
                <Link to="/tootank" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 bg-white text-tootank-green px-4 py-2 rounded-full uppercase text-xs tracking-widest font-bold hover:bg-tootank-yellow hover:text-white">
                  {t('home.brand.tt.btn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-mmc-navy mb-8 leading-tight">
            {t('home.quote')}
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed mb-10">
            {t('home.quote.desc')}
          </p>

        </div>
      </section>
    </div>
  );
};

export default Home;
