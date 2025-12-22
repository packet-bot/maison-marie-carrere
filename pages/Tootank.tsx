import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Sun } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Tootank: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white w-full">
      {/* Playful Hero */}
      <section className="h-[70vh] relative bg-tootank-soft overflow-hidden flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tootank-green/20 rounded-l-[200px] hidden md:block"></div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/logos/logo tootank.png" alt="Toot'ank" className="h-32 md:h-48 mb-6" />
            <p className="text-xl text-stone-600 mb-8 font-medium">
              {t('tt.hero.desc')}
            </p>
            <Link to="/tootank/catalog" className="inline-block bg-tootank-green text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-tootank-yellow hover:text-stone-800 transition-colors transform hover:-translate-y-1">
              {t('tt.hero.btn')}
            </Link>
          </div>
          <div className="relative">
            <img src="/images/products/baby-food.jpg" alt="Happy Toddler" className="rounded-[50px] shadow-2xl border-8 border-white" />
            <div className="absolute -bottom-10 -left-10 bg-yellow-400 text-stone-900 p-6 rounded-full font-bold shadow-lg animate-bounce">
              <span className="block text-center">{t('tt.sticker')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-stone-50 hover:bg-tootank-soft transition-colors">
              <div className="w-16 h-16 bg-tootank-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-tootank-green w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t('tt.feat1.title')}</h3>
              <p className="text-stone-600">{t('tt.feat1.desc')}</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-50 hover:bg-tootank-soft transition-colors">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-yellow-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t('tt.feat2.title')}</h3>
              <p className="text-stone-600">{t('tt.feat2.desc')}</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-50 hover:bg-tootank-soft transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t('tt.feat3.title')}</h3>
              <p className="text-stone-600">{t('tt.feat3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-tootank-soft/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-800">{t('tt.fav.title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow border border-stone-100">
                <div className="h-48 bg-stone-100 rounded-xl mb-4 overflow-hidden">
                  <img src="/images/products/baby-food.jpg" alt="Baby Food Pouch" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg mb-1">{t('tt.fav.item.name')} {item}</h4>
                <p className="text-sm text-stone-500 mb-4">{t('tt.fav.item.desc')}</p>
                <button className="w-full py-2 border-2 border-tootank-green text-tootank-green font-bold rounded-lg hover:bg-tootank-green hover:text-white transition-colors">
                  {t('tt.fav.btn')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tootank;
