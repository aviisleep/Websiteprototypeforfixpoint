export function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'FixPoint Accounting & Advisory',
    description: 'Professional accounting, tax, and advisory services for individuals and business owners',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
    telephone: '+1-203-921-5537',
    email: 'info@fixpointaccounting.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'FL',
      addressLocality: 'Sarasota County',
    },
    serviceType: ['Accounting Services', 'Tax Services', 'Business Advisory'],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    sameAs: [
      'https://www.linkedin.com/company/fixpoint-accounting',
      'https://twitter.com/fixpointcpa',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image: string;
  url: string;
}

export function ArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  image,
  url,
}: ArticleStructuredDataProps) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FixPoint Accounting & Advisory',
      logo: {
        '@type': 'ImageObject',
        url: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
      },
    },
    datePublished: datePublished,
    dateModified: datePublished,
    image: image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

interface ServiceStructuredDataProps {
  name: string;
  description: string;
}

export function ServiceStructuredData({ name, description }: ServiceStructuredDataProps) {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'ProfessionalService',
      name: 'FixPoint Accounting & Advisory',
    },
    description: description,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}