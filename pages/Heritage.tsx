import React from 'react';
import { useLanguage } from '../LanguageContext';

const Heritage: React.FC = () => {
  const { t, language } = useLanguage();

  // Get the first paragraph text to extract the drop cap
  const firstParagraph = t('heritage.matriarch.desc1');
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.slice(1);

  return (
    <div className="w-full">
      {/* Hero Banner - Full Width with Centered Title */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/images/hero/saint-louis-market.jpg"
          alt="Saint-Louis River"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-sans mb-4">{t('heritage.sub')}</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white drop-shadow-lg">
            {t('heritage.title')}
          </h1>
        </div>
      </section>

      {/* Text Container - Constrained Width for Readability */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-10 text-center">
            {t('heritage.matriarch.title')}
          </h2>

          {/* Story Content - Readable Typography */}
          <div className="text-gray-700 text-lg leading-relaxed font-sans">
            {/* First Paragraph with Drop Cap */}
            <p className="mb-6">
              <span className="float-left text-6xl font-serif text-[#D4AF37] mr-3 mt-1 leading-none">
                {firstLetter}
              </span>
              {restOfFirstParagraph}
            </p>

            <p className="mb-6">{t('heritage.matriarch.desc2')}</p>

            {/* Pull Quote - Magazine Style */}
            <blockquote className="my-12 py-8 border-t-2 border-b-2 border-[#D4AF37] text-center">
              <p className="text-2xl md:text-3xl font-serif italic text-[#D4AF37]">
                {t('heritage.quote')}
              </p>
            </blockquote>

            <p className="mb-6">{t('heritage.matriarch.desc3')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc4')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc5')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc6')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc7')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc8')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc9')}</p>
            <p className="mb-6">{t('heritage.matriarch.desc10')}</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mt-16 border-t border-stone-200 pt-10 max-w-md mx-auto text-center">
            <div>
              <span className="block text-5xl font-serif text-[#D4AF37] mb-2">100%</span>
              <span className="text-sm uppercase tracking-widest text-stone-500 font-sans">{t('heritage.stat.owned')}</span>
            </div>
            <div>
              <span className="block text-5xl font-serif text-[#D4AF37] mb-2">3</span>
              <span className="text-sm uppercase tracking-widest text-stone-500 font-sans">{t('heritage.stat.generations')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
