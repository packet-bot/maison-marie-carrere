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

      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative mb-16">
          <img src="/images/hero/saint-louis-market.jpg" alt="Historical Saint Louis" className="w-full rounded-sm shadow-2xl" />
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-serif text-mmc-navy mb-8">{t('heritage.matriarch.title')}</h3>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc1')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc2')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc3')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc4')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc5')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc6')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc7')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc8')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc9')}
          </p>
          <p className="text-stone-600 leading-loose mb-6 text-lg">
            {t('heritage.matriarch.desc10')}
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12 border-t border-stone-200 pt-8 max-w-md mx-auto">
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
