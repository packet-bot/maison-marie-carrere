import React from 'react';
import { useLanguage } from '../LanguageContext';

const Heritage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 w-full">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <span className="text-mmc-gold uppercase tracking-widest text-xs font-bold">{t('heritage.sub')}</span>
        <h1 className="text-5xl md:text-6xl font-serif text-mmc-navy mt-4 mb-8">{t('heritage.title')}</h1>
        <div className="w-24 h-1 bg-mmc-gold mx-auto mb-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="relative">
          <img src="/images/hero/saint-louis-market.jpg" alt="Historical Saint Louis" className="w-full rounded-sm shadow-2xl" />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
            <p className="font-serif italic text-stone-600">{t('heritage.quote')}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-serif text-mmc-navy mb-6">{t('heritage.matriarch.title')}</h3>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc1')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc2')}
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8 border-t border-stone-200 pt-8">
            <div>
              <span className="block text-4xl font-serif text-mmc-gold mb-2">100%</span>
              <span className="text-sm uppercase tracking-widest text-stone-500">{t('heritage.stat.owned')}</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-mmc-gold mb-2">3</span>
              <span className="text-sm uppercase tracking-widest text-stone-500">{t('heritage.stat.generations')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
