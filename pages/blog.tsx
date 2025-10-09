import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface BlogProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function Blog({ siteData }: BlogProps) {
  const { config, navigation, externalLinks } = siteData;

  return (
    <Layout
      title={`Blog | ${config.agencyName}`}
      description="Read our latest articles, insights, and technical guides."
      keywords={[...config.metadata.keywords, 'blog', 'tech articles', 'development insights']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Stay updated with the latest trends, tutorials, and insights from our team.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
              <div className="text-gray-500 mb-8">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Coming Soon</h2>
                <p className="text-lg">
                  We&apos;re working on bringing you valuable content. Check back soon for articles, tutorials, and industry insights.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </Link>
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
