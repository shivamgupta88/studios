import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface PrivacyProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function Privacy({ siteData }: PrivacyProps) {
  const { config, navigation, externalLinks, contact } = siteData;

  return (
    <Layout
      title="Privacy Policy | agency.texttoreels.in - Data Protection & Privacy"
      description="Learn how agency.texttoreels.in collects, uses, and protects your personal information. Read our comprehensive privacy policy covering data security, GDPR compliance, and your rights."
      keywords={[...config.metadata.keywords, 'privacy policy', 'data protection', 'gdpr', 'data privacy', 'personal information']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At {config.agencyName}, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Technical data (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent on site, click patterns)</li>
                  <li>Information you provide when contacting us or requesting services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To detect, prevent, and address technical issues or fraudulent activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information from unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                  You can control cookie settings through your browser preferences. For more details, please refer to our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use third-party services (such as analytics tools, hosting providers, or payment processors) that may collect
                  and process your data. These third parties have their own privacy policies and are responsible for their practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Address:</strong> {contact.address.street}, {contact.address.city}, {contact.address.state} {contact.address.zip}, {contact.address.country}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy
                  on this page with an updated &quot;Last updated&quot; date.
                </p>
              </section>

              <div className="pt-8 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Back to Home
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
