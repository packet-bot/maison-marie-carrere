import React from 'react';
import { Droplet, Thermometer, Truck, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      <div className="bg-stone-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-serif mb-4">{t('process.title')}</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">{t('process.sub')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
             <img src="/images/hero/farm.jpg" alt="Farming" className="rounded-lg shadow-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-12 h-12 bg-mmc-gold text-white flex items-center justify-center rounded-full font-bold text-xl mb-6">1</div>
            <h3 className="text-3xl font-serif text-mmc-navy mb-4">{t('process.step1.title')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('process.step1.desc')}
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
             <img src="/images/process/lab.jpg" alt="Laboratory" className="rounded-lg shadow-xl grayscale contrast-125" />
          </div>
          <div className="w-full md:w-1/2">
             <div className="w-12 h-12 bg-mmc-navy text-white flex items-center justify-center rounded-full font-bold text-xl mb-6">2</div>
            <h3 className="text-3xl font-serif text-mmc-navy mb-4">{t('process.step2.title')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('process.step2.desc')}
            </p>
             <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2 text-sm font-bold text-stone-500"><Thermometer size={16}/> {t('process.step2.temp')}</div>
                <div className="flex items-center gap-2 text-sm font-bold text-stone-500"><Droplet size={16}/> {t('process.step2.steril')}</div>
             </div>
          </div>
        </div>

         {/* Step 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <img src="/images/process/factory.jpg" alt="Logistics" className="rounded-lg shadow-xl" />
          </div>
          <div className="w-full md:w-1/2">
             <div className="w-12 h-12 bg-tootank-green text-white flex items-center justify-center rounded-full font-bold text-xl mb-6">3</div>
            <h3 className="text-3xl font-serif text-mmc-navy mb-4">{t('process.step3.title')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('process.step3.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
