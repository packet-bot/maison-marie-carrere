import React from 'react';
import { useLanguage } from '../LanguageContext';

const Journal: React.FC = () => {
  const { t } = useLanguage();
  
  const articles = [
    {
      id: 1,
      date: "Dec 10, 2025",
      title: t('journal.art1.title'),
      image: "/images/about/fair-market.jpg",
      excerpt: t('journal.art1.desc')
    },
    {
      id: 2,
      date: "Nov 22, 2025",
      title: t('journal.art2.title'),
      image: "/images/hero/saint-louis-market.jpg",
      excerpt: t('journal.art2.desc')
    },
    {
      id: 3,
      date: "Oct 05, 2025",
      title: t('journal.art3.title'),
      image: "/images/process/factory.jpg",
      excerpt: t('journal.art3.desc')
    }
  ];

  return (
    <div className="pt-24 pb-24 w-full bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-mmc-navy mb-12 text-center">{t('journal.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <article key={article.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-mmc-gold uppercase tracking-widest">{article.date}</span>
                <h3 className="text-2xl font-serif text-mmc-navy mt-3 mb-4 group-hover:text-mmc-gold transition-colors">{article.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{article.excerpt}</p>
                <div className="mt-6 pt-6 border-t border-stone-100 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{t('journal.readmore')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
