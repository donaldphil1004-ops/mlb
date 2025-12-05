export interface Article {
  id: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  categoryKey: string;
  image: string;
  readTime: string;
  contentKey: string;
}

export const articles: Article[] = [
  {
    id: 'new-tenant-protection-laws-2024',
    titleKey: 'blog.articles.a1.title',
    excerptKey: 'blog.articles.a1.excerpt',
    date: '2024-01-15',
    categoryKey: 'blog.categories.legalUpdates',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min',
    contentKey: 'blog.articles.a1.content'
  },
  {
    id: 'security-deposit-rights-international-students',
    titleKey: 'blog.articles.a2.title',
    excerptKey: 'blog.articles.a2.excerpt',
    date: '2024-01-10',
    categoryKey: 'blog.categories.tenantRights',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min',
    contentKey: 'blog.articles.a2.content'
  },
  {
    id: 'housing-discrimination-visa-status-court-victory',
    titleKey: 'blog.articles.a3.title',
    excerptKey: 'blog.articles.a3.excerpt',
    date: '2024-01-05',
    categoryKey: 'blog.categories.caseResults',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min',
    contentKey: 'blog.articles.a3.content'
  },
  {
    id: 'document-habitability-issues-rental',
    titleKey: 'blog.articles.a4.title',
    excerptKey: 'blog.articles.a4.excerpt',
    date: '2023-12-28',
    categoryKey: 'blog.categories.howToGuide',
    image: 'https://images.pexels.com/photos/5847523/pexels-photo-5847523.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min',
    contentKey: 'blog.articles.a4.content'
  },
  {
    id: 'understanding-lease-terms-red-flags',
    titleKey: 'blog.articles.a5.title',
    excerptKey: 'blog.articles.a5.excerpt',
    date: '2023-12-20',
    categoryKey: 'blog.categories.leaseReview',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '10 min',
    contentKey: 'blog.articles.a5.content'
  },
  {
    id: 'eviction-protection-f1-status-changes',
    titleKey: 'blog.articles.a6.title',
    excerptKey: 'blog.articles.a6.excerpt',
    date: '2023-12-15',
    categoryKey: 'blog.categories.immigrationHousing',
    image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min',
    contentKey: 'blog.articles.a6.content'
  }
];
