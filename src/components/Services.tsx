import { FileText, Gavel, AlertCircle, DollarSign, HandshakeIcon, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: FileText,
      titleKey: 'services.leaseReview.title',
      descriptionKey: 'services.leaseReview.description',
      examplesKey: 'services.leaseReview.examples'
    },
    {
      icon: Gavel,
      titleKey: 'services.landlordDispute.title',
      descriptionKey: 'services.landlordDispute.description',
      examplesKey: 'services.landlordDispute.examples'
    },
    {
      icon: AlertCircle,
      titleKey: 'services.discrimination.title',
      descriptionKey: 'services.discrimination.description',
      examplesKey: 'services.discrimination.examples'
    },
    {
      icon: DollarSign,
      titleKey: 'services.securityDeposit.title',
      descriptionKey: 'services.securityDeposit.description',
      examplesKey: 'services.securityDeposit.examples'
    },
    {
      icon: HandshakeIcon,
      titleKey: 'services.contractNegotiation.title',
      descriptionKey: 'services.contractNegotiation.description',
      examplesKey: 'services.contractNegotiation.examples'
    },
    {
      icon: Home,
      titleKey: 'services.immigrationHousing.title',
      descriptionKey: 'services.immigrationHousing.description',
      examplesKey: 'services.immigrationHousing.examples'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const examples = t(service.examplesKey, { returnObjects: true }) as string[];
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(service.titleKey)}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{t(service.descriptionKey)}</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">{t('services.weHandle')}</p>
                  <ul className="space-y-1">
                    {examples.map((example: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t('services.ctaTitle')}</h3>
          <p className="text-xl mb-8 text-blue-100">
            {t('services.ctaDescription')}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg"
          >
            {t('services.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
