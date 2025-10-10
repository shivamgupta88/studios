import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { loadAllConfig } from '../../lib/loadConfig';
import blogsData from '../../data/blogs.json';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

interface BlogPostProps {
  siteData: ReturnType<typeof loadAllConfig>;
  blog: Blog;
  relatedBlogs: Blog[];
}

export default function BlogPost({ siteData, blog, relatedBlogs }: BlogPostProps) {
  const { config, navigation, externalLinks } = siteData;

  return (
    <Layout
      title={`${blog.title} | agency.texttoreels.in Blog`}
      description={blog.excerpt}
      keywords={[...config.metadata.keywords, ...blog.tags]}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <div>
                    <div className="font-semibold text-gray-900">{blog.author}</div>
                    <div className="text-sm">{blog.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {blog.content.split('\n\n').map((paragraph, index) => {
                  // Handle headings
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold mt-12 mb-4 text-gray-900">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold mt-8 mb-3 text-gray-900">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }

                  // Handle code blocks
                  if (paragraph.startsWith('```')) {
                    const code = paragraph.replace(/```\w*\n?/g, '');
                    return (
                      <pre key={index} className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6">
                        <code>{code}</code>
                      </pre>
                    );
                  }

                  // Handle bullet points
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-6 text-gray-700">
                        {items.map((item, i) => (
                          <li key={i} className="ml-4">{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }

                  // Regular paragraphs
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 font-medium">Tags:</span>
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      href={`/blog/${relatedBlog.slug}`}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                    >
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {relatedBlog.category}
                      </span>
                      <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-4 text-xs text-gray-500">
                        <span>{relatedBlog.author}</span>
                        <span>•</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogsData.blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const siteData = loadAllConfig();
  const blog = blogsData.blogs.find((b) => b.slug === params?.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blogsData.blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 2);

  return {
    props: {
      siteData,
      blog,
      relatedBlogs,
    },
  };
};
