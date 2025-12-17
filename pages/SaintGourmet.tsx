import React from 'react';
import { useLanguage } from '../LanguageContext';

const SaintGourmet: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-black text-white w-full">
      {/* Luxury Hero */}
      <section className="h-[80vh] relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-60">
           <img src="/images/products/yogurt.jpg" alt="Pastry Art" className="w-full h-full object-cover" />
        </div>
        <div className="z-10 text-center px-6 border-y border-mmc-gold/50 py-12 bg-black/40 backdrop-blur-sm">
          <span className="block text-mmc-gold tracking-[0.4em] text-xs font-bold mb-4">{t('sg.hero.sub')}</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-2">Saint Gourmet</h1>
          <p className="font-serif italic text-mmc-gold text-xl">{t('sg.hero.title')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-2xl font-serif leading-relaxed text-stone-300">
          <span className="text-6xl text-mmc-gold float-left mr-4 pt-2">E</span>
          {t('sg.intro')}
        </p>
      </section>

      {/* Products Grid - High End Editorial Style */}
      <section className="py-12 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-serif text-mmc-gold mb-6">{t('sg.prod1.title')}</h3>
            <p className="text-stone-400 mb-8 leading-relaxed">
              {t('sg.prod1.desc')}
            </p>
            <button className="border border-mmc-gold text-mmc-gold px-8 py-3 uppercase tracking-widest text-xs hover:bg-mmc-gold hover:text-black transition-colors">
              {t('sg.prod.btn')}
            </button>
          </div>
          <div className="order-1 md:order-2 h-[600px] overflow-hidden">
            <img src="/images/products/cheese.jpg" alt="Luxury Eclair" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[600px] overflow-hidden">
            <img src="/images/products/yogurt.jpg" alt="Macarons" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </div>
          <div>
            <h3 className="text-4xl font-serif text-mmc-gold mb-6">{t('sg.prod2.title')}</h3>
            <p className="text-stone-400 mb-8 leading-relaxed">
              {t('sg.prod2.desc')}
            </p>
             <button className="border border-mmc-gold text-mmc-gold px-8 py-3 uppercase tracking-widest text-xs hover:bg-mmc-gold hover:text-black transition-colors">
              {t('sg.prod.btn')}
            </button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-stone-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
           <p className="font-serif italic text-3xl text-mmc-gold">{t('sg.quote')}</p>
        </div>
      </section>
    </div>
  );
};

export default SaintGourmet;
