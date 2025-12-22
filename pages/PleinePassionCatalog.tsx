import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'dairy' | 'cereals' | 'juices' | 'leather' | 'catering';

const PleinePassionCatalog: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const scrollRef = useRef<HTMLDivElement>(null);

    const categories = [
        { key: 'all', label: t('pp.cat.all') },
        { key: 'dairy', label: t('pp.cat.dairy') },
        { key: 'cereals', label: t('pp.cat.cereals') },
        { key: 'juices', label: t('pp.cat.juices') },
        { key: 'leather', label: t('pp.cat.leather') },
        { key: 'catering', label: t('pp.cat.catering') },
    ];

    const products = [
        { id: 1, name: 'Lait Frais Entier', category: 'dairy', weight: '1L', image: '/images/products/milk.jpg' },
        { id: 2, name: 'Yaourt Nature', category: 'dairy', weight: '500g', image: '/images/products/yogurt.jpg' },
        { id: 3, name: 'Fromage Affiné', category: 'dairy', weight: '250g', image: '/images/products/cheese.jpg' },
        { id: 4, name: 'Crème Fraîche', category: 'dairy', weight: '200ml', image: '/images/products/milk.jpg' },
        { id: 5, name: 'Céréales Petit-Déjeuner', category: 'cereals', weight: '400g', image: '/images/products/baby-food.jpg' },
        { id: 6, name: 'Farine de Mil', category: 'cereals', weight: '1kg', image: '/images/products/baby-food.jpg' },
        { id: 7, name: 'Flocons d\'Avoine', category: 'cereals', weight: '500g', image: '/images/products/baby-food.jpg' },
        { id: 8, name: 'Jus de Bissap', category: 'juices', weight: '750ml', image: '/images/products/juice.jpg' },
        { id: 9, name: 'Jus de Bouye', category: 'juices', weight: '750ml', image: '/images/products/juice.jpg' },
        { id: 10, name: 'Jus de Gingembre', category: 'juices', weight: '500ml', image: '/images/products/juice.jpg' },
        { id: 11, name: 'Sandale Saint-Louis', category: 'leather', weight: 'Artisanal', image: '/images/products/leather-1.jpg' },
        { id: 12, name: 'Sac Signature', category: 'leather', weight: 'Artisanal', image: '/images/products/bag.jpg' },
        { id: 13, name: 'Plateau Traiteur', category: 'catering', weight: '10 pers.', image: '/images/products/cheese.jpg' },
        { id: 14, name: 'Buffet Événementiel', category: 'catering', weight: '50 pers.', image: '/images/products/cheese.jpg' },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen w-full">
            {/* Header */}
            <section className="bg-white pt-24 pb-12 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <Link to="/pleine-passion" className="text-blue-900 hover:underline text-sm mb-4 inline-block">
                        ← {t('pp.catalog.back')}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                        {t('pp.catalog.title')}
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl">
                        {t('pp.catalog.desc')}
                    </p>
                </div>
            </section>

            {/* Category Navigation - Horizontal Scroll Pills */}
            <section className="bg-white py-6 sticky top-0 z-30 border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="relative flex items-center">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 -ml-3"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Scrollable Categories */}
                        <div
                            ref={scrollRef}
                            className="flex gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveCategory(cat.key as Category)}
                                    className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === cat.key
                                        ? 'bg-blue-900 text-white shadow-lg'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-900 hover:text-blue-900'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 -mr-3"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                            >
                                {/* Image */}
                                <div className="h-52 bg-gray-100 overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Tag Badge */}
                                    <span className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {product.weight}
                                    </span>
                                </div>
                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-900 mb-2">{product.name}</h3>
                                    <button className="w-full py-2 border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
                                        {t('pp.catalog.viewbtn')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">{t('pp.catalog.cta.title')}</h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">{t('pp.catalog.cta.desc')}</p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        {t('pp.catalog.cta.btn')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PleinePassionCatalog;
