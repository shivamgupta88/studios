import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TechStack from '../components/sections/TechStack';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import { loadAllConfig } from '../lib/loadConfig';

interface HomeProps {
  siteData: ReturnType<typeof loadAllConfig>;
}

export default function Home({ siteData }: HomeProps) {
  const { config, contact, externalLinks, navigation, uiText, legacyContent } = siteData;

  return (
    <Layout
      title={config.metadata.defaultTitle}
      description={config.metadata.defaultDescription}
      keywords={config.metadata.keywords}
    >
      <Hero
        headline={legacyContent.hero.headline}
        subheadline={legacyContent.hero.subheadline}
        ctaPrimary={legacyContent.hero.ctaPrimary}
        ctaSecondary={legacyContent.hero.ctaSecondary}
      />

      <About
        heading={legacyContent.about.heading}
        subheading={legacyContent.about.subheading}
        content={legacyContent.about.content}
        experience={legacyContent.about.experience}
        projects={legacyContent.about.projects}
        clients={legacyContent.about.clients}
      />

      <Services services={legacyContent.services} uiText={uiText.services} />

      <Projects projects={legacyContent.projects} />

      <WhyChooseUs reasons={legacyContent.whyChooseUs} />

      <TechStack
        techStack={legacyContent.techStack}
        metadata={legacyContent.techStackSection}
      />

      <Testimonials testimonials={legacyContent.testimonials} />

      <FAQ faqs={legacyContent.faqs} />

      <Contact
        heading={contact.contactForm.heading}
        subheading={contact.contactForm.subheading}
        description={contact.contactForm.description}
        ctaText={contact.contactForm.ctaText}
        ctaSecondary={contact.contactForm.ctaSecondary}
        email={contact.email}
        benefits={contact.contactForm.benefits}
      />

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

// Server-Side Rendering with getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  const siteData = loadAllConfig();

  return {
    props: {
      siteData,
    },
  };
};
