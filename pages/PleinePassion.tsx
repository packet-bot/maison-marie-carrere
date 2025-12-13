import React from 'react';
import { useLanguage } from '../LanguageContext';

const PleinePassion: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh]">
        <img src="https://picsum.photos/1920/1080?random=15" alt="Dairy Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-mmc-navy/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Pleine Passion</h1>
            <p className="text-xl font-light tracking-wide">{t('pp.hero.sub')}</p>
          </div>
        </div>
      </section>

      {/* Dairy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-mmc-gold uppercase tracking-widest text-xs font-bold">{t('pp.creamery.sub')}</span>
            <h2 className="text-4xl font-serif text-mmc-navy mt-2 mb-6">{t('pp.creamery.title')}</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              {t('pp.creamery.desc')}
            </p>
            <ul className="space-y-2 text-stone-600 mb-8">
              <li className="flex items-center gap-2">• {t('pp.list.1')}</li>
              <li className="flex items-center gap-2">• {t('pp.list.2')}</li>
              <li className="flex items-center gap-2">• {t('pp.list.3')}</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/600?random=20" alt="Milk Pour" className="rounded-lg shadow-lg translate-y-8" />
             <img src="https://picsum.photos/400/600?random=21" alt="Yogurt" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Fashion & Leather (Maroquinerie) - The "Lookbook" feel */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">{t('pp.fashion.sub')}</span>
            <h2 className="text-4xl font-serif text-mmc-navy mt-2">{t('pp.fashion.title')}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto mt-4">
              {t('pp.fashion.desc')}
            </p>
          </div>

          {/* Lookbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="h-[500px] overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/500/800?random=30" alt="Leather Bag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest">{t('pp.fashion.item1')}</div>
              </div>
            </div>
            <div className="group cursor-pointer md:mt-12">
               <div className="h-[500px] overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/500/800?random=31" alt="Linen Shirt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest">{t('pp.fashion.item2')}</div>
              </div>
            </div>
            <div className="group cursor-pointer">
               <div className="h-[500px] overflow-hidden mb-4 relative">
                <img src="https://picsum.photos/500/800?random=32" alt="Accessories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest">{t('pp.fashion.item3')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PleinePassion;
