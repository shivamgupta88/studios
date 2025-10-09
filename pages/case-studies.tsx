import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface CaseStudiesProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function CaseStudies({ siteData }: CaseStudiesProps) {
  const { config, navigation, externalLinks } = siteData;

  return (
    <Layout
      title={`Case Studies | ${config.agencyName}`}
      description="Explore our in-depth case studies and success stories from real client projects."
      keywords={[...config.metadata.keywords, 'case studies', 'success stories', 'project examples']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              In-depth analysis of our projects, challenges overcome, and results achieved.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
              <div className="text-gray-500 mb-8">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Detailed Case Studies Coming Soon</h2>
                <p className="text-lg mb-6">
                  We're preparing comprehensive case studies showcasing our work, methodologies, and the impact we've created for our clients.
                </p>
                <p className="text-md text-gray-600">
                  In the meantime, check out our portfolio to see examples of our work.
                </p>
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/#projects"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  View Our Work
                </Link>
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
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
    },
  };
};
