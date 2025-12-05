import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Resources() {
  const { t } = useTranslation();

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('resources.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
            {faqKeys.map((key, index) => (
              <details
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors group"
              >
                <summary className="font-semibold text-slate-900 cursor-pointer flex items-start text-lg list-none">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="flex-grow">{t(`resources.faqs.${key}.question`)}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 pl-8 text-slate-600 leading-relaxed">
                  {t(`resources.faqs.${key}.answer`)}
                </div>
              </details>
            ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{t('resources.ctaTitle')}</h3>
          <p className="text-lg mb-6 text-blue-100">
            {t('resources.ctaDescription')}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
          >
            {t('resources.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
