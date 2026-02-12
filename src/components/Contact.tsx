import { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaStatus: '',
    issueType: '',
    message: '',
    preferredLanguage: 'en'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      visaStatus: '',
      issueType: '',
      message: '',
      preferredLanguage: 'en'
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {submitStatus === 'success' ? (
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('contact.form.successMessage')}
                </h3>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('contact.form.submit')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.fullName')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.country')} *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="visaStatus" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.visaStatus')} *
                    </label>
                    <select
                      id="visaStatus"
                      name="visaStatus"
                      required
                      value={formData.visaStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.selectVisa')}</option>
                      <option value="F1">{t('contact.visaOptions.f1')}</option>
                      <option value="J1">{t('contact.visaOptions.j1')}</option>
                      <option value="H1B">{t('contact.visaOptions.h1b')}</option>
                      <option value="L1">{t('contact.visaOptions.l1')}</option>
                      <option value="O1">{t('contact.visaOptions.o1')}</option>
                      <option value="other">{t('contact.visaOptions.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="issueType" className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('contact.form.issueType')} *
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      required
                      value={formData.issueType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.selectIssue')}</option>
                      <option value="lease_review">{t('contact.issueOptions.leaseReview')}</option>
                      <option value="landlord_dispute">{t('contact.issueOptions.landlordDispute')}</option>
                      <option value="discrimination">{t('contact.issueOptions.discrimination')}</option>
                      <option value="security_deposit">{t('contact.issueOptions.securityDeposit')}</option>
                      <option value="contract_negotiation">{t('contact.issueOptions.contractNegotiation')}</option>
                      <option value="immigration_housing">{t('contact.issueOptions.immigrationHousing')}</option>
                      <option value="other">{t('contact.issueOptions.other')}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="preferredLanguage" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contact.form.preferredLanguage')}
                  </label>
                  <select
                    id="preferredLanguage"
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="en">English</option>
                    <option value="es">Espanol</option>
                    <option value="it">Italiano</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('contact.form.describeSituation')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.placeholder')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {t('contact.form.errorMessage')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    t('contact.form.submitting')
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 mt-4 text-center">
                  {t('contact.form.confidential')}
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t('contact.contactInfo.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">{t('contact.contactInfo.email')}</div>
                    <div className="text-blue-100">mla.legalteam@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">{t('contact.contactInfo.businessHours')}</div>
                    <div className="text-blue-100">
                      {t('contact.contactInfo.weekdays')}<br />09:00 - 17:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
