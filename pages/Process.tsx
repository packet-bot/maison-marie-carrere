import React from 'react';
import { Shield, Leaf, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-stone-50">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src="/images/process/process-farm-cows.jpeg"
          alt="Farm Cows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-wide">
            {t('process.hero.title')}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            {t('process.hero.sub')}
          </p>
        </div>
      </section>

      {/* ==================== STEP 1: LA SOURCE ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/images/process/process-milk-tank.jpeg"
                alt="Milk Tank"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Step Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-mmc-gold text-white flex items-center justify-center rounded-full font-bold text-2xl shadow-lg">
                1
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="text-mmc-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {t('process.step1.sub')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-mmc-navy mb-6">
                {t('process.step1.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {t('process.step1.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STEP 2: LA TRANSFORMATION ==================== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              <span className="text-mmc-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {t('process.step2.sub')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-mmc-navy mb-6">
                {t('process.step2.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {t('process.step2.desc')}
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/images/process/process-lab-hygiene.jpeg"
                alt="Lab Hygiene"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Step Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-mmc-navy text-white flex items-center justify-center rounded-full font-bold text-2xl shadow-lg">
                2
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STEP 3: LA SÉLECTION ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="/images/process/process-quality-check.jpeg"
                alt="Quality Check"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Step Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-tootank-green text-white flex items-center justify-center rounded-full font-bold text-2xl shadow-lg">
                3
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="text-mmc-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {t('process.step3.sub')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-mmc-navy mb-6">
                {t('process.step3.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {t('process.step3.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATION BADGES ==================== */}
      <section className="py-16 bg-mmc-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-mmc-gold" />
              <span className="text-sm md:text-base font-semibold tracking-wide">
                {t('process.badge.hygiene')}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8 text-tootank-green" />
              <span className="text-sm md:text-base font-semibold tracking-wide">
                {t('process.badge.natural')}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-white" />
              <span className="text-sm md:text-base font-semibold tracking-wide">
                {t('process.badge.nopreserv')}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
