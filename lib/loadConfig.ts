import config from '../data/config.json';
import images from '../data/images.json';
import projects from '../data/projects.json';
import contact from '../data/contact.json';
import navigation from '../data/navigation.json';
import externalLinks from '../data/external-links.json';
import uiText from '../data/ui-text.json';
import legacyContent from '../agency-website-content.json';

// Type definitions
export interface SiteConfig {
  agencyName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  metadata: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export interface Images {
  hero: {
    background: string;
    backgroundAlt: string;
  };
  projects: Record<string, {
    thumbnail: string;
    hero: string;
    gallery: string[];
  }>;
  testimonials: Record<string, string>;
  team: Record<string, string>;
  about: {
    hero: string;
    officeSpace: string;
  };
  blog: {
    defaultThumbnail: string;
  };
  og: {
    default: string;
    home: string;
    projects: string;
  };
  favicon: {
    ico: string;
    png16: string;
    png32: string;
    appleTouchIcon: string;
  };
  logo: {
    light: string;
    dark: string;
    icon: string;
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  techUsed: string[];
  results: string;
  link: string;
  externalLink: string | null;
  featured: boolean;
  year: string;
  client: string;
  imageKey: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  businessHours: {
    timezone: string;
    weekdays: string;
    weekend: string;
  };
  contactForm: {
    heading: string;
    subheading: string;
    description: string;
    ctaText: string;
    ctaSecondary: string;
    benefits: string[];
  };
  calendly: {
    enabled: boolean;
    url: string;
  };
  supportEmail: string;
  salesEmail: string;
  careersEmail: string;
}

export interface NavigationItem {
  label: string;
  type?: string;
  href?: string;
  items?: Array<{
    label: string;
    href: string;
    description?: string;
    isExternal?: boolean;
  }>;
}

export interface Navigation {
  mainNav: NavigationItem[];
  mobileNav: Array<{
    label: string;
    href: string;
    icon: string;
  }>;
  footer: {
    services: Array<{ label: string; href: string }>;
    company: Array<{ label: string; href: string }>;
    resources: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface ExternalLinks {
  socialMedia: Array<{
    platform: string;
    url: string;
    icon: string;
    label: string;
  }>;
  partnerships: Array<{
    name: string;
    url: string;
    logo: string;
  }>;
  external: {
    calendly: string;
    medium: string;
    devTo: string;
    producthunt: string;
  };
  documentation: {
    apiDocs: string | null;
    developerPortal: string | null;
    changelog: string | null;
  };
}

export interface AllConfig {
  config: SiteConfig;
  images: Images;
  projects: { projects: Project[] };
  contact: Contact;
  navigation: Navigation;
  externalLinks: ExternalLinks;
  uiText: typeof uiText;
  legacyContent: typeof legacyContent;
}

/**
 * Load all configuration files
 * This function aggregates all JSON config files into a single object
 */
export function loadAllConfig(): AllConfig {
  return {
    config: config as SiteConfig,
    images: images as Images,
    projects: projects as { projects: Project[] },
    contact: contact as Contact,
    navigation: navigation as Navigation,
    externalLinks: externalLinks as ExternalLinks,
    uiText: uiText as typeof uiText,
    legacyContent,
  };
}

/**
 * Get site configuration
 */
export function getSiteConfig(): SiteConfig {
  return config as SiteConfig;
}

/**
 * Get images configuration
 */
export function getImages(): Images {
  return images as Images;
}

/**
 * Get all projects
 */
export function getProjects(): Project[] {
  return (projects as { projects: Project[] }).projects;
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find(p => p.slug === slug);
}

/**
 * Get contact information
 */
export function getContact(): Contact {
  return contact as Contact;
}

/**
 * Get navigation configuration
 */
export function getNavigation(): Navigation {
  return navigation as Navigation;
}

/**
 * Get external links
 */
export function getExternalLinks(): ExternalLinks {
  return externalLinks as ExternalLinks;
}

/**
 * Get image URL by key path
 * Example: getImageUrl('projects.financeflow.thumbnail')
 */
export function getImageUrl(keyPath: string): string {
  const keys = keyPath.split('.');
  let value: any = images;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Image not found for key: ${keyPath}`);
      return '';
    }
  }

  return value as string;
}

/**
 * Merge project data with images
 */
export function getProjectsWithImages(): Array<Project & { images: any }> {
  const projectsData = getProjects();
  const imagesData = getImages();

  return projectsData.map(project => ({
    ...project,
    images: imagesData.projects[project.imageKey as keyof typeof imagesData.projects] || {}
  }));
}

const configLoader = {
  loadAllConfig,
  getSiteConfig,
  getImages,
  getProjects,
  getProjectBySlug,
  getContact,
  getNavigation,
  getExternalLinks,
  getImageUrl,
  getProjectsWithImages,
};

export default configLoader;
