import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MEDITERRAN LEGAL ALLIANCE</h3>
            <p className="text-slate-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t('footer.aboutUs')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t('footer.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t('footer.resources')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t('footer.newsUpdates')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li>{t('footer.leaseReview')}</li>
              <li>{t('footer.landlordDisputes')}</li>
              <li>{t('footer.housingDiscrimination')}</li>
              <li>{t('footer.securityDeposit')}</li>
              <li>{t('footer.contractNegotiations')}</li>
              <li>{t('footer.immigrationHousing')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start text-slate-400">
              </div>
              <div className="flex items-start text-slate-400">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <div>mla.legalteam@gmail.com</div>
              </div>
              <div className="flex items-start text-slate-400">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-sm">{t('17 New St Gardens, Portobello, Dublin 8, D08 E8X6, Germany')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                {t('footer.accessibility')}
              </a>
            </div>
          </div>
          <div className="text-slate-500 text-xs mt-4 text-center">
            {t('footer.disclaimer')}
          </div>
        </div>
      </div>
    </footer>
  );
}
