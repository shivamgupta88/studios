import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';
import projectsData from '../data/projects.json';
import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  excerpt: string;
  metrics: {
    [key: string]: string;
  };
  featured: boolean;
}

interface CaseStudiesProps {
  siteData: ReturnType<typeof loadAllConfig>;
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ siteData, caseStudies }: CaseStudiesProps) {
  const { config, navigation, externalLinks } = siteData;

  const featured = caseStudies.filter(cs => cs.featured);
  const regular = caseStudies.filter(cs => !cs.featured);

  return (
    <Layout
      title="Case Studies | agency.texttoreels.in - Real Client Success Stories & Project Examples"
      description="Explore in-depth case studies showcasing our web development, mobile app, blockchain, and AI integration projects. See how we've helped clients transform their ideas into successful digital products."
      keywords={[...config.metadata.keywords, 'case studies', 'success stories', 'project examples', 'client portfolio', 'project case studies']}
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
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real-world projects, real results. Discover how we help businesses achieve their digital goals.
            </p>
          </div>

          {/* Featured Case Studies */}
          {featured.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Success Stories</h2>
              <div className="space-y-8">
                {featured.map((cs) => (
                  <article key={cs.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                      {/* Content */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            {cs.industry}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold mb-3 text-gray-900">
                          {cs.title}
                        </h3>

                        <p className="text-gray-600 mb-4 text-lg">
                          {cs.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{cs.client}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{cs.duration}</span>
                          </div>
                        </div>

                        <Link
                          href={`/case-studies/${cs.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Metrics */}
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          Key Metrics
                        </h4>
                        <div className="space-y-4">
                          {Object.entries(cs.metrics).slice(0, 4).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-2xl font-bold text-blue-600">{value}</div>
                              <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Case Studies */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regular.map((cs) => (
                <article key={cs.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {cs.industry}
                    </span>

                    <h3 className="text-2xl font-bold mt-4 mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cs.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {cs.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{cs.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{cs.duration}</span>
                      </div>
                    </div>

                    {/* Mini Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-gray-50 rounded-lg">
                      {Object.entries(cs.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help transform your business with custom software solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
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
      caseStudies: projectsData.projects,
    },
  };
};
