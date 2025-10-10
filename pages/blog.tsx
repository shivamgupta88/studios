import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';
import blogsData from '../data/blogs.json';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishDate: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

interface BlogProps {
  siteData: ReturnType<typeof loadAllConfig>;
  blogs: Blog[];
}

export default function Blog({ siteData, blogs }: BlogProps) {
  const { config, navigation, externalLinks } = siteData;

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <Layout
      title="Blog & Insights | agency.texttoreels.in - Latest Tech Articles & Development Guides"
      description="Read latest articles, tutorials, and insights on web development, mobile apps, blockchain, AI integration, and software engineering best practices from our expert team."
      keywords={[...config.metadata.keywords, 'blog', 'tech articles', 'development insights', 'software development blog', 'coding tutorials']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights, tutorials, and best practices from our development team
            </p>
          </div>

          {/* Featured Posts */}
          {featuredBlogs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog) => (
                  <article key={blog.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>

                    <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer
        tagline={config.tagline}
        description={config.description}
        links={navigation.footer}
        socials={externalLinks.socialMedia}
        copyright={`© ${new Date().getFullYear()} ${config.agencyName}. All rights reserved.`}
        legalLinks={navigation.footer.legal}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const siteData = loadAllConfig();

  return {
    props: {
      siteData,
      blogs: blogsData.blogs,
    },
  };
};
