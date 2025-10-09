import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface CookiesProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function Cookies({ siteData }: CookiesProps) {
  const { config, navigation, externalLinks, contact } = siteData;

  return (
    <Layout
      title={`Cookie Policy | ${config.agencyName}`}
      description="Learn about how we use cookies and similar technologies on our website."
      keywords={[...config.metadata.keywords, 'cookie policy', 'cookies', 'tracking']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website.
                  They help websites remember information about your visit, making your next visit easier and the site more useful to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {config.agencyName} uses cookies and similar technologies for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how visitors use our site</li>
                  <li>Performance cookies to improve site speed and user experience</li>
                  <li>Preference cookies to remember your settings and choices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Strictly Necessary Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies are essential for the website to function properly. They enable basic features like page navigation
                      and access to secure areas. The website cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Performance Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often.
                      This data helps us improve how our website works and optimize the user experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Functionality Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies allow the website to remember choices you make (such as your preferred language or region) and
                      provide enhanced, more personalized features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Analytics Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use analytics services to help us understand how visitors interact with our website. These tools may use cookies
                      to collect information in an anonymous form, including the number of visitors, where visitors have come from, and
                      the pages they visited.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  In addition to our own cookies, we may use third-party services that set cookies on your device. These services help us
                  with website analytics, performance monitoring, and other features. Third-party cookies are subject to the respective
                  privacy policies of these external services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You have the right to control how cookies are used. Here's how you can manage them:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect your experience on our website.</li>
                  <li><strong>Opt-Out Tools:</strong> Some third-party analytics services offer opt-out tools that prevent them from collecting data about your visits.</li>
                  <li><strong>Cookie Preferences:</strong> When you first visit our website, you may be given the option to accept or decline non-essential cookies.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Please note that disabling cookies may affect the functionality and features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browser-Specific Instructions</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices.
                  We will notify you of any significant changes by updating the "Last updated" date at the top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about our use of cookies or this policy, please contact us:
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
