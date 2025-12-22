import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Tootank: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-yellow-50 w-full" style={{ fontFamily: "'Nunito', 'Quicksand', sans-serif" }}>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/tootank/tootank-hero-joy.jpeg"
          alt="Happy Baby"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/60"></div>

        {/* Glassmorphism Logo Card */}
        <div className="relative z-10 text-center px-6">
          <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 max-w-lg mx-auto">
            <img
              src="/images/logos/logo tootank.png"
              alt="Toot'ank"
              className="h-32 md:h-48 mx-auto mb-6"
            />
            <p className="text-tootank-green text-xl md:text-2xl font-bold tracking-wide">
              {t('tt.hero.tagline')}
            </p>
          </div>
        </div>

        {/* Bouncing Sticker */}
        <div className="absolute bottom-12 right-12 z-10">
          <div className="bg-tootank-yellow text-stone-900 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
            {t('tt.sticker')}
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
                src="/images/products/baby-food.jpg"
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
