import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface TermsProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function Terms({ siteData }: TermsProps) {
  const { config, navigation, externalLinks, contact } = siteData;

  return (
    <Layout
      title="Terms of Service | agency.texttoreels.in - Legal Terms & Conditions"
      description="Read our terms of service covering software development agreements, client responsibilities, payment terms, intellectual property rights, and service warranties for agency.texttoreels.in."
      keywords={[...config.metadata.keywords, 'terms of service', 'terms and conditions', 'legal', 'service agreement', 'contract terms']}
    >
      <Navbar
        agencyName={config.agencyName}
        navigation={navigation}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using the services provided by {config.agencyName}, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using
                  or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  {config.agencyName} provides software development services including but not limited to web development, mobile app
                  development, blockchain solutions, AI/ML integrations, and related consulting services. The specific scope, deliverables,
                  timeline, and pricing for each project will be outlined in a separate service agreement or statement of work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Unless otherwise specified in your service agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>You are granted a non-exclusive, non-transferable license to use the deliverables for their intended purpose</li>
                  <li>You may not reproduce, duplicate, copy, sell, or exploit any portion of our proprietary methods or processes without written permission</li>
                  <li>All intellectual property rights in custom-developed work will be transferred to you upon full payment, unless otherwise agreed</li>
                  <li>We retain ownership of any pre-existing intellectual property, tools, or frameworks used in the development process</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide timely feedback, information, and materials necessary for project completion</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Ensure you have the right to use any materials, content, or assets you provide to us</li>
                  <li>Comply with all applicable laws and regulations in your use of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Payment terms will be specified in your service agreement. Generally, we require an upfront deposit before starting work,
                  with the remaining balance due upon completion or according to agreed milestones. Late payments may result in suspension
                  of services and may incur additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  We treat all client information as confidential and will not disclose it to third parties without your consent,
                  except as required by law. We may showcase completed projects in our portfolio unless you request otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranties and Disclaimers</h2>
                <p className="text-gray-600 leading-relaxed">
                  We strive to deliver high-quality services, but we cannot guarantee that our services will be error-free or uninterrupted.
                  Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We will make reasonable efforts
                  to fix bugs and issues identified during an agreed warranty period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall {config.agencyName} be liable for any indirect, incidental, special, consequential, or punitive damages
                  arising out of or related to your use of our services. Our total liability shall not exceed the amount paid by you for the
                  specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate a project agreement according to the terms specified in the service agreement.
                  Upon termination, you will be responsible for payment for all work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of {contact.address.country},
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting
                  to this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
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
