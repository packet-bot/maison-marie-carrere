import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'lait' | 'fromages' | 'glaces' | 'boulangerie' | 'traiteur' | 'fastfood';

const PleinePassionCatalog: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const scrollRef = useRef<HTMLDivElement>(null);

    const categories = [
        { key: 'all', label: t('pp.cat.all'), icon: '🌟' },
        { key: 'lait', label: t('pp.cat.lait'), icon: '🥛' },
        { key: 'fromages', label: t('pp.cat.fromages'), icon: '🧀' },
        { key: 'glaces', label: t('pp.cat.glaces'), icon: '🍦' },
        { key: 'boulangerie', label: t('pp.cat.boulangerie'), icon: '🥐' },
        { key: 'traiteur', label: t('pp.cat.traiteur'), icon: '🥟' },
        { key: 'fastfood', label: t('pp.cat.fastfood'), icon: '🍔' },
    ];

    const products = [
        // Lait & Yaourts
        { id: 1, name: 'Lait Nature', category: 'lait', price: '1 500 XOF', unit: '/litre', image: '/images/products/milk.jpg' },
        { id: 2, name: 'Lait Vanille', category: 'lait', price: '1 500 XOF', unit: '/litre', image: '/images/products/milk.jpg' },
        { id: 3, name: 'Lait Chocolaté', category: 'lait', price: '2 000 XOF', unit: '/litre', image: '/images/products/milk.jpg' },
        { id: 4, name: 'Yaourt à Boire', category: 'lait', price: '1 000 XOF', unit: '/250ml', image: '/images/products/yogurt.jpg' },
        { id: 5, name: 'Yaourt Gourmand', category: 'lait', price: '500 XOF', unit: '/150g', image: '/images/products/yogurt.jpg' },
        { id: 6, name: 'Yaourt sur Lit de Fruit', category: 'lait', price: '500 XOF', unit: '/250ml', image: '/images/products/yogurt.jpg' },
        { id: 7, name: 'Zerik', category: 'lait', price: '500 XOF', unit: '/250ml', image: '/images/products/yogurt.jpg' },
        // Fromages
        { id: 8, name: 'Fromage Moringa', category: 'fromages', price: '13 000 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        { id: 9, name: 'Fromage Zaatar', category: 'fromages', price: '13 000 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        { id: 10, name: 'Fromage Thym-Cumin', category: 'fromages', price: '13 000 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        { id: 11, name: 'Fromage Mangue-Passion', category: 'fromages', price: '13 000 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        { id: 12, name: 'Labné', category: 'fromages', price: '11 500 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        { id: 13, name: 'Fromage Blanc Nature', category: 'fromages', price: '10 000 XOF', unit: '/kg', image: '/images/products/cheese.jpg' },
        // Glaces
        { id: 14, name: 'Glace Boule', category: 'glaces', price: '1 500 XOF', unit: '', image: '/images/products/milk.jpg' },
        { id: 15, name: 'Glace Pot PM', category: 'glaces', price: '500 XOF', unit: '', image: '/images/products/milk.jpg' },
        { id: 16, name: 'Glace Pot MM', category: 'glaces', price: '1 000 XOF', unit: '', image: '/images/products/milk.jpg' },
        { id: 17, name: 'Glace Pot GM', category: 'glaces', price: '2 000 XOF', unit: '', image: '/images/products/milk.jpg' },
        { id: 18, name: 'Glace Barquette 500g', category: 'glaces', price: '4 000 XOF', unit: '', image: '/images/products/milk.jpg' },
        // Boulangerie
        { id: 19, name: 'Pains Spéciaux', category: 'boulangerie', price: '800 XOF', unit: '/pack de 4', image: '/images/products/baby-food.jpg' },
        { id: 20, name: 'Beignet Gourmet', category: 'boulangerie', price: '200 XOF', unit: '/pièce', image: '/images/products/baby-food.jpg' },
        { id: 21, name: 'Beignet Fourré', category: 'boulangerie', price: '250 XOF', unit: '/pièce', image: '/images/products/baby-food.jpg' },
        // Traiteur
        { id: 22, name: 'Fataya Gourmand', category: 'traiteur', price: '200 XOF', unit: '/pièce', image: '/images/products/cheese.jpg' },
        { id: 23, name: 'Pastel Poisson', category: 'traiteur', price: '200 XOF', unit: '/pièce', image: '/images/products/cheese.jpg' },
        { id: 24, name: 'Nems Poulet/Viande', category: 'traiteur', price: '200 XOF', unit: '/pièce', image: '/images/products/cheese.jpg' },
        { id: 25, name: 'Nems Crevettes', category: 'traiteur', price: '300 XOF', unit: '/pièce', image: '/images/products/cheese.jpg' },
        { id: 26, name: 'Rissole Crevette', category: 'traiteur', price: '350 XOF', unit: '/pièce', image: '/images/products/cheese.jpg' },
        // Fast Food
        { id: 27, name: 'Tacos Mini', category: 'fastfood', price: '500 XOF', unit: '', image: '/images/products/baby-food.jpg' },
        { id: 28, name: 'Tacos Maxi', category: 'fastfood', price: '2 000 XOF', unit: '', image: '/images/products/baby-food.jpg' },
        { id: 29, name: 'Hamburger Mini', category: 'fastfood', price: '500 XOF', unit: '', image: '/images/products/baby-food.jpg' },
        { id: 30, name: 'Hamburger Maxi', category: 'fastfood', price: '2 000 XOF', unit: '', image: '/images/products/baby-food.jpg' },
        { id: 31, name: 'Chawarma Mini', category: 'fastfood', price: '500 XOF', unit: '', image: '/images/products/baby-food.jpg' },
        { id: 32, name: 'Chawarma Maxi', category: 'fastfood', price: '1 800 XOF', unit: '', image: '/images/products/baby-food.jpg' },
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
                                    className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === cat.key
                                        ? 'bg-blue-900 text-white shadow-lg'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-900 hover:text-blue-900'
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    <span>{cat.label}</span>
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
                                </div>
                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-900 mb-1">{product.name}</h3>
                                    <p className="text-blue-600 font-bold text-lg mb-3">
                                        {product.price}<span className="text-gray-400 text-sm font-normal">{product.unit}</span>
                                    </p>
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
