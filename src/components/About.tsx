import { Scale, Globe2, BookOpen, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('about.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal team"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{t('about.missionTitle')}</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t('about.missionText1')}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('about.missionText2')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.specialistsTitle')}</h4>
                  <p className="text-slate-600">{t('about.specialistsDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Globe2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.multilingualTitle')}</h4>
                  <p className="text-slate-600">{t('about.multilingualDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.immigrationTitle')}</h4>
                  <p className="text-slate-600">{t('about.immigrationDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.clientTitle')}</h4>
                  <p className="text-slate-600">{t('about.clientDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t('about.credentialsTitle')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 font-bold text-lg mb-2">Attorney Sarah Chen, Esq.</div>
              <p className="text-slate-600 text-sm mb-2">{t('about.managingPartner')}</p>
              <p className="text-slate-600 text-sm">Bar Admission: CA, NY, IL | Harvard Law School | 12 years housing law experience</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-lg mb-2">Attorney Miguel Rodriguez, Esq.</div>
              <p className="text-slate-600 text-sm mb-2">{t('about.seniorPartner')}</p>
              <p className="text-slate-600 text-sm">Bar Admission: TX, FL, CA | Yale Law School | 15 years tenant rights advocacy</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-lg mb-2">Attorney Layla Hassan, Esq.</div>
              <p className="text-slate-600 text-sm mb-2">{t('about.partner')}</p>
              <p className="text-slate-600 text-sm">Bar Admission: MA, NY | Columbia Law School | 10 years housing discrimination cases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
