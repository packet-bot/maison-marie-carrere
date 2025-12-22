import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

type Category = 'all' | 'chocolats' | 'boucherie' | 'cadeaux';

const SainGourmetCatalog: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const categories = [
        { key: 'all', label: t('sg.cat.all') },
        { key: 'chocolats', label: t('sg.cat.chocolats') },
        { key: 'boucherie', label: t('sg.cat.boucherie') },
        { key: 'cadeaux', label: t('sg.cat.cadeaux') },
    ];

    const products = [
        { id: 1, name: 'Le Carré Praliné Cajou', category: 'chocolats', desc: 'Chocolat noir, praliné cajou local', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 2, name: 'Le Carré Moringa', category: 'chocolats', desc: 'Chocolat lait, poudre de moringa', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 3, name: 'Le Carré Bissap', category: 'chocolats', desc: 'Chocolat blanc, essence de bissap', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 4, name: 'Le Carré Café Touba', category: 'chocolats', desc: 'Chocolat noir 70%, café touba', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 5, name: 'Chapon Farci', category: 'boucherie', desc: 'Volaille fermière, farce aux marrons', image: '/images/sain-gourmet/Sain-gourmet-feast-capon.jpeg' },
        { id: 6, name: 'Foie Gras Entier', category: 'boucherie', desc: 'Canard élevé à Ndiawdoune', image: '/images/sain-gourmet/Sain-gourmet-feast-capon.jpeg' },
        { id: 7, name: 'Magret Fumé', category: 'boucherie', desc: 'Fumage artisanal au bois fruitier', image: '/images/sain-gourmet/Sain-gourmet-feast-capon.jpeg' },
        { id: 8, name: 'Coffret Prestige', category: 'cadeaux', desc: 'Assortiment chocolats & foie gras', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 9, name: 'Coffret Le Carré', category: 'cadeaux', desc: '20 pièces, 5 saveurs', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
        { id: 10, name: 'Coffret Corporate', category: 'cadeaux', desc: 'Personnalisable, à partir de 50 unités', image: '/images/sain-gourmet/sain-gourmet-collection-group.jpg.jpeg' },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#051F1A] min-h-screen w-full text-gray-300">
            {/* Header */}
            <section className="pt-28 pb-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <Link to="/sain-gourmet" className="text-[#D4AF37] hover:underline text-sm mb-6 inline-block">
                        ← {t('sg.catalog.back')}
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-4">
                        {t('sg.catalog.title')}
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('sg.catalog.desc')}
                    </p>
                </div>
            </section>

            {/* Category Navigation - Minimalist Text Links */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key as Category)}
                                className={`text-sm uppercase tracking-[0.2em] font-semibold transition-all border-b-2 pb-1 ${activeCategory === cat.key
                                    ? 'text-[#D4AF37] border-[#D4AF37]'
                                    : 'text-gray-500 border-transparent hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid - Luxury Gallery */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/5 border border-[#D4AF37]/30 rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all group"
                            >
                                {/* Image */}
                                <div className="h-52 overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Tag Badge */}
                                    <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {product.category === 'chocolats' ? 'Chocolat' : product.category === 'boucherie' ? 'Festif' : 'Cadeau'}
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-serif text-lg text-[#D4AF37] mb-2">{product.name}</h3>
                                    <button className="w-full py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-colors">
                                        {t('sg.catalog.viewbtn')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">{t('sg.catalog.cta.title')}</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t('sg.catalog.cta.desc')}</p>
                    <Link
                        to="/contact"
                        className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 uppercase tracking-widest text-sm font-bold rounded hover:bg-[#D4AF37] hover:text-black transition-colors"
                    >
                        {t('sg.catalog.cta.btn')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SainGourmetCatalog;
