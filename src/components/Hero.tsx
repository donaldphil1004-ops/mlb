import { Shield, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('hero.badge')}
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t('hero.title')}
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('hero.freeConsultation')}
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold text-lg"
              >
                {t('hero.ourServices')}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">{t('hero.casesWon')}</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">1200+</div>
                <div className="text-sm text-slate-600">{t('hero.clientsServed')}</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">{t('hero.yearsExperience')}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal consultation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm text-slate-600 mb-2">{t('hero.trustedBy')}</p>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌍</span>
                <span className="font-semibold text-slate-900">{t('hero.countries')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
