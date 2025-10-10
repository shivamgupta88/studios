import { GetServerSideProps } from 'next';
import blogsData from '../data/blogs.json';
import projectsData from '../data/projects.json';

interface SitemapUrl {
  url: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
}

function generateSiteMap() {
  const baseUrl = 'https://agency.texttoreels.in';
  const currentDate = new Date().toISOString();

  // Static pages
  const pages: SitemapUrl[] = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { url: '/terms', priority: '0.5', changefreq: 'monthly' },
    { url: '/cookies', priority: '0.5', changefreq: 'monthly' },
  ];

  // Add blog posts to sitemap
  const blogPosts = blogsData.blogs.map(blog => ({
    url: `/blog/${blog.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: blog.publishDate
  }));

  // Add case studies (projects) to sitemap
  const caseStudies = projectsData.projects.map(project => ({
    url: `/case-studies/${project.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: project.publishDate
  }));

  // Combine all URLs
  const allPages = [...pages, ...blogPosts, ...caseStudies];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map((page) => {
    const lastModDate = page.lastmod || currentDate;
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;