import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  twitterHandle?: string;
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/og-image.jpg',
  ogUrl = 'https://agency.texttoreels.in',
  twitterHandle = '@agencytexttoreels',
}: SEOProps) {
  const siteTitle = title
    ? `${title} | agency.texttoreels.in`
    : 'agency.texttoreels.in | Web, Mobile & Blockchain Development';

  const siteDescription = description ||
    'Full-stack software agency specializing in web development, mobile apps, MVP building, blockchain solutions, and AI integrations. We turn your ideas into scalable digital products.';

  const siteKeywords = keywords.length > 0
    ? keywords.join(', ')
    : 'software development agency, hire developers, build MVP, web development services, mobile app development, blockchain development, AI integration services';

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Your Agency" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={ogUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="agency.texttoreels.in" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* Favicon - TTR Logo */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
    </Head>
  );
}
