import { ReactNode } from 'react';
import SEO from './SEO';
import Navbar from './Navbar';
import { getSiteConfig, getNavigation, getImages } from '../lib/loadConfig';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
}

export default function Layout({ children, title, description, keywords }: LayoutProps) {
  const siteConfig = getSiteConfig();
  const navigation = getNavigation();
  const images = getImages();

  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <Navbar
        agencyName={siteConfig.agencyName}
        navigation={navigation}
        logoUrl={images.logo.light}
      />
      <main className="min-h-screen pt-20">
        {children}
      </main>
    </>
  );
}
