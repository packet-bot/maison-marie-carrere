import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

// Category type
type Category = 'all' | 'nutrition' | 'mode' | 'mobilier' | 'conseils';

const TootankCatalog: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    // Categories with icons
    const categories = [
        { key: 'all', label: t('tt.cat.all'), icon: '🌟' },
        { key: 'nutrition', label: t('tt.cat.nutrition'), icon: '🥣' },
        { key: 'mode', label: t('tt.cat.mode'), icon: '👗' },
        { key: 'mobilier', label: t('tt.cat.mobilier'), icon: '🧸' },
        { key: 'conseils', label: t('tt.cat.conseils'), icon: '🎓' },
    ];

    // Products catalog
    const products = [
        { id: 1, name: 'Purée de Patate Douce', category: 'nutrition', tag: 'Dès 6 mois', image: '/images/products/baby-food.jpg' },
        { id: 2, name: 'Céréales Moringa', category: 'nutrition', tag: 'Dès 8 mois', image: '/images/products/baby-food.jpg' },
        { id: 3, name: 'Compote Mangue-Banane', category: 'nutrition', tag: 'Dès 6 mois', image: '/images/products/baby-food.jpg' },
        { id: 4, name: 'Bouillie Mil & Arachide', category: 'nutrition', tag: 'Dès 12 mois', image: '/images/products/baby-food.jpg' },
        { id: 5, name: 'Body Coton Bio', category: 'mode', tag: '0-24 mois', image: '/images/products/baby-food.jpg' },
        { id: 6, name: 'Pyjama Wax', category: 'mode', tag: '3-36 mois', image: '/images/products/baby-food.jpg' },
        { id: 7, name: 'Lange en Coton', category: 'mode', tag: 'Taille unique', image: '/images/products/baby-food.jpg' },
        { id: 8, name: 'Berceau Artisanal', category: 'mobilier', tag: '0-12 mois', image: '/images/products/baby-food.jpg' },
        { id: 9, name: 'Tapis d\'Éveil', category: 'mobilier', tag: 'Dès la naissance', image: '/images/products/baby-food.jpg' },
        { id: 10, name: 'Hochet Bois', category: 'mobilier', tag: 'Dès 3 mois', image: '/images/products/baby-food.jpg' },
        { id: 11, name: 'Atelier Diversification', category: 'conseils', tag: 'Parents', image: '/images/products/baby-food.jpg' },
        { id: 12, name: 'Coaching Sommeil', category: 'conseils', tag: 'Bébés 0-24m', image: '/images/products/baby-food.jpg' },
    ];

    // Filter products
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="bg-white w-full min-h-screen">
            {/* Hero Header */}
            <section className="bg-tootank-soft pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <Link to="/tootank" className="text-tootank-green hover:underline text-sm mb-4 inline-block">
                        ← {t('tt.catalog.back')}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                        {t('tt.catalog.title')}
                    </h1>
                    <p className="text-stone-600 text-lg max-w-2xl">
                        {t('tt.catalog.desc')}
                    </p>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="py-8 bg-white border-b border-stone-100 sticky top-0 z-30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key as Category)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === cat.key
                                    ? 'bg-tootank-green text-white shadow-lg'
                                    : 'bg-stone-100 text-stone-600 hover:bg-tootank-soft'
                                    }`}
                            >
                                <span className="text-xl">{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group"
                            >
                                {/* Image */}
                                <div className="h-52 bg-stone-100 overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Tag Badge */}
                                    <span className="absolute top-3 left-3 bg-tootank-yellow text-stone-800 text-xs font-bold px-3 py-1 rounded-full">
                                        {product.tag}
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-stone-800 mb-2">{product.name}</h3>
                                    <button className="w-full py-2 border-2 border-tootank-green text-tootank-green font-bold rounded-lg hover:bg-tootank-green hover:text-white transition-colors">
                                        {t('tt.catalog.viewbtn')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-tootank-green text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">{t('tt.catalog.cta.title')}</h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">{t('tt.catalog.cta.desc')}</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-tootank-green px-8 py-4 rounded-full font-bold hover:bg-tootank-yellow hover:text-stone-800 transition-colors"
                    >
                        {t('tt.catalog.cta.btn')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TootankCatalog;
