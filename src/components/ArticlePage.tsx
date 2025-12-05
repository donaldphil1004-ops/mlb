import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  const article = articles.find(a => a.id === id);

  const getLocale = () => {
    switch (i18n.language) {
      case 'es': return 'es-ES';
      case 'it': return 'it-IT';
      default: return 'en-US';
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacer */}
      <div className="h-32"></div>

      {/* Article Header */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('blog.backToHome') || 'Back to Home'}
          </Link>

          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {t(article.categoryKey)}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {t(article.titleKey)}
          </h1>

          <div className="flex items-center space-x-6 text-slate-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(article.date).toLocaleDateString(getLocale(), {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <img
          src={article.image}
          alt={t(article.titleKey)}
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {t(article.excerptKey)}
          </p>

          {/* Article body content */}
          <div className="text-slate-700 leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              {t('blog.articleContent.overview') || 'Overview'}
            </h2>
            <p>
              {t(`${article.contentKey}.p1`) || t(article.excerptKey)}
            </p>
            <p>
              {t(`${article.contentKey}.p2`) || 'Our legal team has extensive experience helping international residents navigate complex housing situations. We understand the unique challenges faced by students and professionals from abroad.'}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              {t('blog.articleContent.keyPoints') || 'Key Points'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t(`${article.contentKey}.point1`) || 'Understanding your rights as an international tenant'}</li>
              <li>{t(`${article.contentKey}.point2`) || 'Steps to take when facing housing issues'}</li>
              <li>{t(`${article.contentKey}.point3`) || 'Legal protections available to you'}</li>
              <li>{t(`${article.contentKey}.point4`) || 'How to document and report violations'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
              {t('blog.articleContent.conclusion') || 'Conclusion'}
            </h2>
            <p>
              {t(`${article.contentKey}.conclusion`) || 'If you are experiencing any housing-related issues, do not hesitate to reach out to our team. We are here to help you understand your rights and take the necessary steps to protect yourself.'}
            </p>
          </div>
        </div>

        {/* Share and CTA */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              {t('blog.shareArticle') || 'Share this article'}
            </button>

            <Link
              to="/#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('header.bookConsultation')}
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {t('blog.relatedArticles') || 'Related Articles'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.id}`}
                  className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedArticle.image}
                    alt={t(relatedArticle.titleKey)}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">
                      {t(relatedArticle.categoryKey)}
                    </span>
                    <h4 className="font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {t(relatedArticle.titleKey)}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
