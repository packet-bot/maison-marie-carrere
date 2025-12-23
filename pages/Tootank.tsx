import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Tootank: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-yellow-50 w-full" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[85vh] md:min-h-screen w-full flex items-center overflow-hidden">
        {/* Background Image - with negative space */}
        {/* Mobile: position right to show the subject (mother & baby on the right side of the image) */}
        {/* Desktop: center the image for the full composition */}
        <div
          className="absolute inset-0 bg-cover bg-[center_right_-132px] sm:bg-[center_right_-2rem] md:bg-center"
          style={{ backgroundImage: "url('/images/tootank/tootank-hero-negative-space.jpeg')" }}
        />
        {/* Subtle overlay for text readability - slightly stronger on mobile */}
        <div className="absolute inset-0 bg-white/30 md:bg-white/20" />

        {/* Content - Left aligned on the negative space */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-16 w-full pt-20 md:pt-0">
          <div className="max-w-xs sm:max-w-sm md:max-w-xl">
            {/* Toot'ank Logo v2 - Teal #2dd4bf */}
            <img
              src="/images/logos/Tootank logo v2.png"
              alt="Toot'ank"
              className="h-auto max-w-md w-full object-contain mb-6"
              style={{
                filter: 'brightness(0) saturate(100%) invert(73%) sepia(52%) saturate(456%) hue-rotate(118deg) brightness(95%) contrast(91%) drop-shadow(0 2px 4px rgba(255,255,255,0.8)) drop-shadow(0 0 8px rgba(255,255,255,0.5))'
              }}
            />
            {/* Tagline - Deep teal for readability on light bg */}
            <p
              className="text-teal-900 text-xl md:text-2xl font-bold tracking-wide mb-8"
              style={{ textShadow: '0 1px 3px rgba(255,255,255,0.9), 0 0 8px rgba(255,255,255,0.6)' }}
            >
              {t('tt.hero.tagline')}
            </p>
            {/* CTA Button - Pastel Yellow */}
            <Link
              to="/tootank/catalog"
              className="inline-block bg-yellow-400 text-yellow-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all"
            >
              {t('tt.hero.btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== NUTRITION SECTION ==================== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/images/tootank/tootank-nutrition-jar.jpeg"
                alt="Baby Food Jar"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative Circle */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-tootank-yellow/30 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tootank-green/20 rounded-full -z-10"></div>
            </div>

            {/* Right: Text */}
            <div className="lg:pl-8">
              <span className="text-tootank-green uppercase tracking-widest text-sm font-bold mb-4 block">
                {t('tt.nutrition.sub')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {t('tt.nutrition.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                {t('tt.nutrition.desc')}
              </p>
              <Link
                to="/tootank/catalog"
                className="inline-block bg-tootank-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-tootank-yellow hover:text-stone-800 transition-colors"
              >
                {t('tt.nutrition.btn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LIFESTYLE SECTION ==================== */}
      <section className="py-24 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:pr-8 order-2 lg:order-1">
              <span className="text-tootank-green uppercase tracking-widest text-sm font-bold mb-4 block">
                {t('tt.lifestyle.sub')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {t('tt.lifestyle.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                {t('tt.lifestyle.desc')}
              </p>
              <Link
                to="/tootank/catalog"
                className="inline-block bg-tootank-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-tootank-yellow hover:text-stone-800 transition-colors"
              >
                {t('tt.lifestyle.btn')}
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/images/tootank/tootank-fashion-nursery.jpeg"
                alt="Baby Nursery"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Decorative Circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200/50 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tootank-yellow/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMMUNITY/COACHING SECTION ==================== */}
      <section className="py-20 bg-tootank-green">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="text-white/70 uppercase tracking-widest text-sm font-bold mb-4 block">
            {t('tt.community.sub')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
            {t('tt.community.title')}
          </h2>
          <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('tt.community.desc')}
          </p>
          <Link
            to="/journal"
            className="inline-block bg-white text-tootank-green px-10 py-4 rounded-full font-bold shadow-lg hover:bg-tootank-yellow hover:text-stone-800 transition-colors"
          >
            {t('tt.community.btn')}
          </Link>
        </div>
      </section>

      {/* ==================== FAVORITES TEASER ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800">{t('tt.fav.title')}</h2>
            <p className="text-stone-500 mt-2">{t('tt.fav.sub')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-yellow-50 rounded-3xl p-4 shadow-sm hover:shadow-xl transition-shadow border border-stone-100">
                <div className="h-48 bg-stone-100 rounded-2xl mb-4 overflow-hidden">
                  <img src="/images/products/baby-food.jpg" alt="Baby Food Pouch" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg mb-1 text-stone-800">{t('tt.fav.item.name')} {item}</h4>
                <p className="text-sm text-stone-500 mb-4">{t('tt.fav.item.desc')}</p>
                <button className="w-full py-2 border-2 border-tootank-green text-tootank-green font-bold rounded-full hover:bg-tootank-green hover:text-white transition-colors">
                  {t('tt.fav.btn')}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/tootank/catalog"
              className="inline-block bg-tootank-green text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-tootank-yellow hover:text-stone-800 transition-colors"
            >
              {t('tt.hero.btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tootank;
