import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/sections/Footer';
import { loadAllConfig } from '../../lib/loadConfig';
import caseStudiesData from '../../data/case-studies-data.json';
import { ArrowLeft, Users, Clock, TrendingUp, CheckCircle, Quote } from 'lucide-react';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  excerpt: string;
  challenge: string;
  solution: string;
  technologiesUsed: string[];
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  metrics: {
    [key: string]: string;
  };
  featured: boolean;
  publishDate: string;
}

interface CaseStudyProps {
  siteData: ReturnType<typeof loadAllConfig>;
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

export default function CaseStudyDetail({ siteData, caseStudy, relatedCaseStudies }: CaseStudyProps) {
  const { config, navigation, externalLinks } = siteData;

  return (
    <Layout
      title={`${caseStudy.title} | agency.texttoreels.in Case Studies`}
      description={caseStudy.excerpt}
      keywords={[...config.metadata.keywords, caseStudy.industry, 'case study', caseStudy.client]}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Header */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                {caseStudy.excerpt}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Client</div>
                  <div className="font-semibold text-gray-900">{caseStudy.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Team Size</div>
                  <div className="font-semibold text-gray-900">{caseStudy.teamSize}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Industry</div>
                  <div className="font-semibold text-gray-900">{caseStudy.industry}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Challenge */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {caseStudy.challenge.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                {/* Solution */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Solution</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {caseStudy.solution.split('\n\n').map((paragraph, index) => {
                      // Handle bold headings like **Phase 1:**
                      if (paragraph.includes('**')) {
                        const parts = paragraph.split('**');
                        return (
                          <div key={index} className="space-y-2">
                            {parts.map((part, i) =>
                              i % 2 === 1 ? (
                                <h3 key={i} className="text-xl font-bold text-gray-900 mt-4">{part}</h3>
                              ) : part.trim() ? (
                                <p key={i}>{part}</p>
                              ) : null
                            )}
                          </div>
                        );
                      }

                      // Handle bullet points
                      if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                        return (
                          <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                            {items.map((item, i) => (
                              <li key={i}>{item.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }

                      return <p key={index}>{paragraph}</p>;
                    })}
                  </div>
                </section>

                {/* Technologies */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.technologiesUsed.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Results */}
                <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Results & Impact</h2>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-lg">{result}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Testimonial */}
                <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                  <Quote className="w-12 h-12 mb-4 opacity-50" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    &quot;{caseStudy.testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">{caseStudy.testimonial.author}</div>
                      <div className="text-sm opacity-90">{caseStudy.testimonial.position}</div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Key Metrics
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(caseStudy.metrics).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href="/#contact"
                      className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all text-center"
                    >
                      Start Your Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedCaseStudies.map((related) => (
                    <Link
                      key={related.id}
                      href={`/case-studies/${related.slug}`}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                    >
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {related.industry}
                      </span>
                      <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{related.client}</span>
                        <span>•</span>
                        <span>{related.duration}</span>
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
  const paths = caseStudiesData.caseStudies.map((cs) => ({
    params: { slug: cs.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const siteData = loadAllConfig();
  const caseStudy = caseStudiesData.caseStudies.find((cs) => cs.slug === params?.slug);

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  // Get related case studies (same industry, excluding current)
  const relatedCaseStudies = caseStudiesData.caseStudies
    .filter((cs) => cs.industry === caseStudy.industry && cs.slug !== caseStudy.slug)
    .slice(0, 2);

  return {
    props: {
      siteData,
      caseStudy,
      relatedCaseStudies,
    },
  };
};
