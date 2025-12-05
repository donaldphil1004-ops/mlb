import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Wei Zhang',
      country: 'China',
      status: 'PhD Student, MIT',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'My landlord tried to keep my entire security deposit claiming excessive damage. Attorney Chen helped me recover the full amount plus interest within two weeks. She explained everything in Mandarin which made me feel comfortable throughout the process.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      status: 'Software Engineer, Google',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'When my landlord refused to rent to me because of my H-1B visa status, I didn\'t know what to do. This firm not only helped me understand my rights but successfully negotiated with the landlord. I moved in within a month and received compensation for the discrimination.',
      rating: 5
    },
    {
      name: 'Carlos Mendoza',
      country: 'Mexico',
      status: 'MBA Student, Stanford',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Attorney Rodriguez reviewed my lease before I signed and found several problematic clauses that would have cost me thousands. His negotiation skills saved me from unfair early termination fees. Worth every penny and more.',
      rating: 5
    },
    {
      name: 'Sarah Al-Rashid',
      country: 'Saudi Arabia',
      status: 'Medical Resident, Johns Hopkins',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'My apartment had severe mold issues and the landlord ignored my complaints for months. Attorney Hassan took my case and within days, repairs began. She also helped me get compensation for my health issues. Professional, compassionate, and effective.',
      rating: 5
    },
    {
      name: 'Jun Park',
      country: 'South Korea',
      status: 'Research Analyst, Bloomberg',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'I faced illegal eviction while working remotely during the pandemic. The team responded immediately, even on a weekend, and stopped the eviction. They fought for my rights and helped me understand the legal system. Highly recommend to all international workers.',
      rating: 5
    },
    {
      name: 'Amara Okafor',
      country: 'Nigeria',
      status: 'Postdoc, UC Berkeley',
      image: 'https://images.pexels.com/photos/3781545/pexels-photo-3781545.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The firm helped me negotiate a lease reduction when my funding was delayed. They were understanding of international student challenges and found a solution that worked for everyone. Their empathy combined with legal expertise is unmatched.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.status}</div>
                  <div className="text-xs text-slate-500">{t('testimonials.from')} {testimonial.country}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl shadow-lg px-12 py-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm text-slate-600">{t('testimonials.averageRating')}</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">850+</div>
              <div className="text-sm text-slate-600">{t('testimonials.reviews')}</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-slate-600">{t('testimonials.successRate')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
