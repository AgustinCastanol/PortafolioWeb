import React from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  pathname?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const DEFAULT_SEO = {
  title: 'Agustín Castañol - Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Angular, TypeScript, and modern web technologies. Building exceptional digital experiences.',
  image: '/og-image.png',
  type: 'website' as const,
  siteName: 'Agustín Castañol Portfolio',
};

const SITE_URL = 'https://agustincastañol.com';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  type = DEFAULT_SEO.type,
  pathname = '',
  author = 'Agustín Castañol',
  publishedTime,
  modifiedTime,
}) => {
  const seo = {
    title: title ? `${title} | ${DEFAULT_SEO.title}` : DEFAULT_SEO.title,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${pathname}`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agustín Castañol',
    url: SITE_URL,
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/agustincastañol',
      'https://linkedin.com/in/agustincastañol',
      'https://twitter.com/agustincastañol',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: ['React', 'Angular', 'TypeScript', 'Node.js', 'JavaScript', 'Web Development'],
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      {publishedTime && <meta name="publishdate" content={publishedTime} />}
      {modifiedTime && <meta name="revised" content={modifiedTime} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      {type === 'article' && author && <meta property="article:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />
      {author && <meta property="twitter:creator" content={author} />}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* JSON-LD Schema.org */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};

export default SEO;
