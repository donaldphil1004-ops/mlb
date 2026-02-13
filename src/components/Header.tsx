import { Menu, X, Shield, Building2, Copy, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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

          <nav className="hidden lg:flex items-center">
            {/* Primary Nav Links */}
            <div className="flex items-center space-x-1">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.aboutUs')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.services')}
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.resources')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.testimonials')}
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm">
                {t('header.news')}
              </button>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200 mx-3"></div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsEscrowModalOpen(true)}
                className="flex items-center gap-1.5 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm border border-blue-200"
              >
                <Shield className="w-4 h-4" />
                {t('header.escrow')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap text-sm">
                {t('header.bookConsultation')}
              </button>
            </div>

            {/* Language Selector */}
            <div className="ml-3 pl-3 border-l border-slate-200">
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="it">IT</option>
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
          <div className="lg:hidden pb-4 border-t border-slate-100">
            <nav className="flex flex-col py-2">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.aboutUs')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.services')}
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.resources')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.testimonials')}
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all">
                {t('header.news')}
              </button>

              <div className="border-t border-slate-100 my-2"></div>

              <button
                onClick={() => {
                  setIsEscrowModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="text-blue-600 hover:bg-blue-50 font-medium text-left px-2 py-3 rounded-lg transition-all flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                {t('header.escrow')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center mt-2">
                {t('header.bookConsultation')}
              </button>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600"
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

      {/* Escrow Modal */}
      {isEscrowModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{t('escrowModal.title')}</h2>
                    <p className="text-blue-100 text-sm">{t('escrowModal.subtitle')}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEscrowModalOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-slate-600 mb-6">{t('escrowModal.description')}</p>

              {/* Bank Details */}
              <div className="bg-slate-50 rounded-xl p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-slate-900">{t('escrowModal.bankDetails')}</h3>
                </div>

                <div className="space-y-4">
                  {/* Bank Name */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.bankName')}</p>
                      <p className="font-medium text-slate-900">{t('escrowModal.bankNameValue')}</p>
                    </div>
                  </div>
                  {/* Beneficiary Account Holder */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.beneficiaryAccountHolder')}</p>
                      <p className="font-medium text-slate-900">{t('escrowModal.beneficiaryAccountHolderValue')}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(t('escrowModal.beneficiaryAccountHolderValue'), 'beneficiary')}
                      className="ml-2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Copy"
                    >
                      {copiedField === 'beneficiary' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {/* Account Name */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.accountName')}</p>
                      <p className="font-medium text-slate-900">{t('escrowModal.accountNameValue')}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(t('escrowModal.accountNameValue'), 'account')}
                      className="ml-2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Copy"
                    >
                      {copiedField === 'account' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* IBAN */}
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.iban')}</p>
                      <p className="font-mono font-medium text-slate-900">{t('escrowModal.ibanValue')}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(t('escrowModal.ibanValue').replace(/\s/g, ''), 'iban')}
                      className="ml-2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Copy"
                    >
                      {copiedField === 'iban' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* SWIFT */}
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.swift')}</p>
                      <p className="font-mono font-medium text-slate-900">{t('escrowModal.swiftValue')}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(t('escrowModal.swiftValue'), 'swift')}
                      className="ml-2 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                      title="Copy"
                    >
                      {copiedField === 'swift' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Reference Note */}
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{t('escrowModal.reference')}</p>
                    <p className="text-sm text-slate-600 italic">{t('escrowModal.referenceNote')}</p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">{t('escrowModal.importantNote')}</h4>
                    <p className="text-sm text-amber-700">{t('escrowModal.importantText')}</p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsEscrowModalOpen(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t('escrowModal.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
