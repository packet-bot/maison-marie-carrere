import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-mmc-navy text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-mmc-gold uppercase tracking-widest text-xs font-bold">{t('contact.sub')}</span>
          <h1 className="text-5xl font-serif mt-4 mb-8">{t('contact.title')}</h1>
          <p className="text-stone-400 text-lg leading-relaxed mb-12">
            {t('contact.desc')}
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif text-white mb-2">{t('contact.hq')}</h3>
              <p className="text-stone-400">123 Corniche Ouest, Dakar, Senegal</p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">{t('contact.b2b')}</h3>
              <p className="text-stone-400">b2b@maisonmariecarrere.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white text-stone-900 p-8 md:p-12 rounded-sm shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">{t('contact.form.fname')}</label>
                <input type="text" className="w-full border-b border-stone-300 py-2 focus:border-mmc-navy outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">{t('contact.form.lname')}</label>
                <input type="text" className="w-full border-b border-stone-300 py-2 focus:border-mmc-navy outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">{t('contact.form.email')}</label>
              <input type="email" className="w-full border-b border-stone-300 py-2 focus:border-mmc-navy outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">{t('contact.form.dept')}</label>
              <select className="w-full border-b border-stone-300 py-2 focus:border-mmc-navy outline-none bg-transparent">
                <option>{t('contact.dept.1')}</option>
                <option>{t('contact.dept.2')}</option>
                <option>{t('contact.dept.3')}</option>
                <option>{t('contact.dept.4')}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">{t('contact.form.msg')}</label>
              <textarea rows={4} className="w-full border-b border-stone-300 py-2 focus:border-mmc-navy outline-none transition-colors"></textarea>
            </div>
            <button className="w-full bg-mmc-navy text-white py-4 uppercase tracking-widest font-bold text-xs hover:bg-mmc-gold hover:text-black transition-colors">
              {t('contact.form.btn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
