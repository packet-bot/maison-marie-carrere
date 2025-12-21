import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Instagram, Linkedin, Facebook, Mail, Phone, ExternalLink } from 'lucide-react';
import Home from './pages/Home';
import Heritage from './pages/Heritage';
import Process from './pages/Process';
import SaintGourmet from './pages/SaintGourmet';
import Tootank from './pages/Tootank';
import PleinePassion from './pages/PleinePassion';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import { LanguageProvider, useLanguage } from './LanguageContext';

// --- Shared Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Determine if we are on the Sain Gourmet page for special luxury styling
  const isLuxury = location.pathname.includes('sain-gourmet');
  const isHome = location.pathname === '/';
  const isPleinePassion = location.pathname.includes('pleine-passion');
  const isProcess = location.pathname.includes('process');
  const isHeritage = location.pathname.includes('heritage');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled
    ? isLuxury ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-mmc-gold/30' : 'bg-white/95 backdrop-blur-md py-4 shadow-md'
    : 'bg-transparent py-6'
    }`;

  const textClass = isScrolled
    ? isLuxury ? 'text-mmc-gold' : 'text-[#E87C3E]'
    : isLuxury ? 'text-mmc-gold' : ((isHome || isPleinePassion || isProcess || isHeritage) ? 'text-white' : 'text-mmc-navy');

  // Logo Logic
  // We use the single black logo and adapt it using CSS filters.
  const logoSrc = "/logo MCC wide 2.png";

  // Filters to recolor the black logo image
  let logoFilter = "";
  if (isLuxury) {
    // Gold (#C5A059)
    logoFilter = "invert(76%) sepia(13%) saturate(1478%) hue-rotate(359deg) brightness(89%) contrast(88%)";
  } else if ((isHome || isPleinePassion || isProcess || isHeritage) && !isScrolled) {
    // White
    logoFilter = "brightness(0) invert(1)";
  } else if (isScrolled) {
    // Orange (#E87C3E) when scrolled on non-luxury pages
    logoFilter = "invert(58%) sepia(68%) saturate(640%) hue-rotate(342deg) brightness(95%) contrast(92%)";
  } else {
    // Navy (#0F172A) - transformed from black
    logoFilter = "invert(8%) sepia(36%) saturate(1176%) hue-rotate(186deg) brightness(92%) contrast(96%)";
  }

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <Link to="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="Maison Marie Carrère"
            style={{ filter: logoFilter, marginTop: '-8px' }}
            className="w-auto h-12 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 items-center font-medium text-sm tracking-wide ${textClass}`}>
          <Link to="/heritage" className="hover:opacity-70 transition-opacity">{t('nav.heritage')}</Link>
          <div className="group relative py-2">
            <span className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1">
              {t('nav.brands')} <ChevronRight size={14} className="rotate-90" />
            </span>
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl border-t-2 border-mmc-gold rounded-b-md py-3 flex flex-col">
                <Link to="/pleine-passion" className="px-6 py-2 hover:bg-stone-50 text-mmc-navy block">{t('nav.pp')}</Link>
                <Link to="/sain-gourmet" className="px-6 py-2 hover:bg-black hover:text-mmc-gold text-mmc-navy block transition-colors">{t('nav.sg')}</Link>
                <Link to="/tootank" className="px-6 py-2 hover:bg-tootank-soft text-mmc-navy block">{t('nav.tt')}</Link>
              </div>
            </div>
          </div>
          <Link to="/process" className="hover:opacity-70 transition-opacity">{t('nav.process')}</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity">{t('nav.journal')}</Link>
          <Link to="/contact" className={`px-5 py-2 border ${isLuxury ? 'border-mmc-gold text-mmc-gold hover:bg-mmc-gold hover:text-black' : isScrolled ? 'border-[#E87C3E] text-[#E87C3E] hover:bg-[#E87C3E] hover:text-white' : 'border-current hover:bg-mmc-navy hover:text-white'} transition-all uppercase text-xs tracking-widest`}>
            {t('nav.contact')}
          </Link>
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : language === 'en' ? 'wo' : 'fr')}
            className={`ml-4 flex items-center text-xs tracking-widest hover:opacity-70 transition-opacity`}
          >
            <span className={language === 'fr' ? 'font-bold' : 'opacity-50'}>FR</span>
            <span className="mx-1">/</span>
            <span className={language === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
            <span className="mx-1">/</span>
            <span className={language === 'wo' ? 'font-bold text-[#D4AF37]' : 'opacity-50'}>WO</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : language === 'en' ? 'wo' : 'fr')}
            className={`text-xs tracking-widest ${textClass}`}
          >
            <span className={language === 'fr' ? 'font-bold' : 'opacity-50'}>FR</span> / <span className={language === 'en' ? 'font-bold' : 'opacity-50'}>EN</span> / <span className={language === 'wo' ? 'font-bold text-[#D4AF37]' : 'opacity-50'}>WO</span>
          </button>
          <button className={`${textClass}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-mmc-navy z-40 flex flex-col justify-center items-center space-y-8 text-white text-xl font-serif md:hidden">
          <Link to="/heritage">{t('nav.heritage')}</Link>
          <Link to="/pleine-passion">{t('nav.pp')}</Link>
          <Link to="/sain-gourmet" className="text-mmc-gold">{t('nav.sg')}</Link>
          <Link to="/tootank">{t('nav.tt')}</Link>
          <Link to="/process">{t('nav.process')}</Link>
          <Link to="/journal">{t('nav.journal')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-mmc-navy text-white pt-20 pb-10 border-t-4 border-mmc-gold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="font-serif text-2xl tracking-widest text-mmc-gold">MAISON MARIE CARRÈRE</h3>
          <p className="text-stone-400 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-300">{t('footer.brands')}</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li><Link to="/pleine-passion" className="hover:text-white transition-colors">{t('nav.pp')}</Link></li>
            <li><Link to="/sain-gourmet" className="hover:text-mmc-gold transition-colors">{t('nav.sg')}</Link></li>
            <li><Link to="/tootank" className="hover:text-tootank-green transition-colors">{t('nav.tt')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-300">{t('footer.links')}</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li><Link to="/heritage" className="hover:text-white transition-colors">{t('nav.heritage')}</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">{t('nav.process')}</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">{t('nav.journal')}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-300">{t('footer.contact')}</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-mmc-gold" /> Dakar, Senegal</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-mmc-gold" /> contact@maisonmariecarrere.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-mmc-gold" /> +221 33 800 00 00</li>
            <li className="flex gap-4 pt-4">
              <Instagram className="hover:text-mmc-gold cursor-pointer" />
              <Linkedin className="hover:text-mmc-gold cursor-pointer" />
              <Facebook className="hover:text-mmc-gold cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} {t('footer.rights')}
      </div>
    </footer>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/process" element={<Process />} />
              <Route path="/sain-gourmet" element={<SaintGourmet />} />
              <Route path="/tootank" element={<Tootank />} />
              <Route path="/pleine-passion" element={<PleinePassion />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
