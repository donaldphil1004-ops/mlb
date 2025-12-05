import { Menu, X, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{t('header.italy')}: +39 350 9398753</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{t('header.spain')}: +34 622 329306</span>
            </div>
          </div>
          <span className="text-blue-100">{t('header.businessHours')}</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">MLA</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">
              MEDITERRAN LEGAL ALLIANCE
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.aboutUs')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.services')}
            </button>
            <button onClick={() => scrollToSection('resources')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.resources')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.testimonials')}
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
              {t('header.news')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
              {t('header.bookConsultation')}
            </button>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-slate-600" />
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="border border-slate-300 rounded px-2 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="es">Espanol</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.aboutUs')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.services')}
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.resources')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.testimonials')}
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-slate-700 hover:text-blue-600 font-medium text-left">
                {t('header.news')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left">
                {t('header.bookConsultation')}
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <Globe className="w-5 h-5 text-slate-600" />
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="border border-slate-300 rounded px-2 py-1 text-sm"
                >
                  <option value="en">English</option>
                  <option value="es">Espanol</option>
                  <option value="it">Italiano</option>
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-4 text-sm">
          <Phone className="w-4 h-4" />
          <span className="font-medium">{t('header.emergencyLine')}: +1 (555) 123-4567</span>
        </div>
      </div> */}
    </header>
  );
}
