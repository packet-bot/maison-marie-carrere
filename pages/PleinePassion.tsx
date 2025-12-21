import React from 'react';
import { useLanguage } from '../LanguageContext';

const PleinePassion: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Hero - Logo floating on composed image */}
      <section className="relative h-screen w-full">
        <img
          src="/images/pleine-passion/pleine-passion-hero-pour.jpeg"
          alt="Milk Pour"
          className="w-full h-full object-cover"
        />
        {/* Scrim gradient for text readability */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Logo floating directly - no card background */}
          <div className="text-center">
            <img
              src="/images/logos/Logo pleine passion.png"
              alt="Pleine Passion"
              className="h-40 md:h-56 mx-auto mb-4 drop-shadow-xl"
            />
            <p className="text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{t('pp.hero.sub')}</p>
          </div>
        </div>
      </section>

      {/* Task 2: Product Grid - Freshness You Can Taste */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-mmc-gold uppercase tracking-widest text-xs font-bold">{t('pp.creamery.sub')}</span>
          <h2 className="text-4xl font-serif text-blue-900 font-semibold mt-2 mb-6">{t('pp.creamery.title')}</h2>
          <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {t('pp.creamery.desc')}
          </p>
        </div>

        {/* Product Grid with Portrait Aspect Ratio (4:5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/pleine-passion/pleine-passion-cheese-rustic.jpeg"
                alt="Artisan Cheese"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-blue-900 font-semibold text-lg mt-4 text-center">{t('pp.list.1')}</h3>
          </div>
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/pleine-passion/pleine-passion-ngalakh-dessert.jpeg"
                alt="Ngalakh Dessert"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-blue-900 font-semibold text-lg mt-4 text-center">{t('pp.list.2')}</h3>
          </div>
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/pleine-passion/pleine-passion-mbaanik-farm.jpeg"
                alt="Mbaanik Farm Fresh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-blue-900 font-semibold text-lg mt-4 text-center">{t('pp.list.3')}</h3>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE GRANARY (Cereals) - Image Left / Text Right */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="/images/pleine-passion/pleine-passion-cereals-banner.jpeg"
                alt="Cereals and Grains"
                className="w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
            {/* Right: Text */}
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl font-serif text-blue-900 font-semibold mb-3">{t('pp.granary.title')}</h2>
                <p className="text-mmc-gold font-semibold tracking-wide mb-6">{t('pp.granary.sub')}</p>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {t('pp.granary.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ORCHARD (Juices & Jams) - Text Left / Image Right (Zig-Zag) */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="flex items-center">
              <div>
                <h2 className="text-4xl font-serif text-blue-900 font-semibold mb-6">{t('pp.orchard.title')}</h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {t('pp.orchard.desc')}
                </p>
              </div>
            </div>
            {/* Right: Image */}
            <div>
              <img
                src="/images/pleine-passion/pleine-passion-juice-banner.jpeg"
                alt="Fresh Juices"
                className="w-full h-[500px] object-cover object-bottom rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fashion & Leather (Lifestyle Section) */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">{t('pp.fashion.sub')}</span>
            <h2 className="text-4xl font-serif text-blue-900 font-semibold mt-2">{t('pp.fashion.title')}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto mt-4">
              {t('pp.fashion.desc')}
            </p>
          </div>

          {/* Lookbook Grid with corrected labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sandals -> The Saint-Louis Sandal */}
            <div className="group cursor-pointer">
              <div className="h-[500px] overflow-hidden mb-4 relative rounded-2xl">
                <img src="/images/products/leather-1.jpg" alt="Saint-Louis Sandal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 bg-blue-900 text-white px-4 py-2 text-sm font-bold uppercase tracking-widest rounded">{t('pp.fashion.item1')}</div>
              </div>
            </div>
            {/* Tote Bag -> The Signature Tote */}
            <div className="group cursor-pointer md:mt-12">
              <div className="h-[500px] overflow-hidden mb-4 relative rounded-2xl">
                <img src="/images/products/bag.jpg" alt="Signature Tote" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 bg-blue-900 text-white px-4 py-2 text-sm font-bold uppercase tracking-widest rounded">{t('pp.fashion.item2')}</div>
              </div>
            </div>
            {/* Backpack -> The Nomad Backpack */}
            <div className="group cursor-pointer">
              <div className="h-[500px] overflow-hidden mb-4 relative rounded-2xl">
                <img src="/images/products/leather-2.jpg" alt="Nomad Backpack" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 bg-blue-900 text-white px-4 py-2 text-sm font-bold uppercase tracking-widest rounded">{t('pp.fashion.item3')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CATERING & EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="self-center lg:pr-8">
              <span className="text-mmc-gold uppercase tracking-widest text-xs font-bold">{t('pp.catering.sub')}</span>
              <h2 className="text-4xl font-serif text-blue-900 font-semibold mt-2 mb-6">{t('pp.catering.title')}</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                {t('pp.catering.desc')}
              </p>
              <a
                href="#"
                className="inline-block bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm rounded hover:bg-blue-800 transition-colors"
              >
                {t('pp.catering.btn')}
              </a>
            </div>

            {/* Right: Image Collage */}
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="/images/pleine-passion/pleine-passion-catering-cocktail.jpeg"
                alt="Cocktail Catering"
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <img
                src="/images/pleine-passion/pleine-passion-catering-garden.jpeg"
                alt="Garden Party Catering"
                className="w-full h-64 object-cover rounded-lg shadow-xl translate-y-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PleinePassion;
