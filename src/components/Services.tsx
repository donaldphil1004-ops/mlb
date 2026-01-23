import { FileText, Gavel, AlertCircle, DollarSign, HandshakeIcon, Home, Shield, Building2, Copy, Check, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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

        {/* Escrow / Client Trust Account Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('services.escrow.title')}</h3>
                <p className="text-blue-100 text-lg max-w-xl">
                  {t('services.escrow.description')}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEscrowModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg shadow-lg whitespace-nowrap flex items-center gap-2"
            >
              <Building2 className="w-5 h-5" />
              {t('services.escrow.button')}
            </button>
          </div>
        </div>
      </div>

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
    </section>
  );
}
