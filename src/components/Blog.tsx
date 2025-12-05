import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Blog() {
  const { t, i18n } = useTranslation();

  const getLocale = () => {
    switch (i18n.language) {
      case 'es': return 'es-ES';
      case 'it': return 'it-IT';
      default: return 'en-US';
    }
  };

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('blog.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <Link to={`/article/${article.id}`}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={t(article.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {t(article.categoryKey)}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString(getLocale(), { year: 'numeric', month: 'long', day: 'numeric' })}
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <Link to={`/article/${article.id}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {t(article.titleKey)}
                  </h3>
                </Link>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {t(article.excerptKey)}
                </p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors group"
                >
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('blog.subscribeTitle')}</h3>
              <p className="text-slate-600">{t('blog.subscribeDescription')}</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={t('blog.emailPlaceholder')}
                className="flex-grow md:w-80 px-4 py-3 border border-slate-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
                {t('blog.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
