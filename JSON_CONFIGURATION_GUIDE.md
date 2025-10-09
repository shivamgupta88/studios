# JSON Configuration Guide

This guide explains the JSON-based configuration system for your agency website. All dynamic content is now stored in separate JSON files in the `/data` directory.

## Overview

The website now uses a modular JSON configuration system that separates different types of content:

- **config.json** - Site-wide settings and agency information
- **images.json** - All image URLs (S3 placeholders ready for your links)
- **projects.json** - Project portfolio data
- **contact.json** - Contact information and form settings
- **navigation.json** - Navigation menus and site structure
- **external-links.json** - Social media and external URLs

## File Structure

```
/data
├── config.json           # Site configuration & agency details
├── images.json          # Image URLs (S3 placeholder links)
├── projects.json        # Project portfolio
├── contact.json         # Contact information
├── navigation.json      # Navigation menus
└── external-links.json  # Social media & external links
```

## Configuration Files

### 1. config.json

**Purpose:** Site-wide configuration including agency name, tagline, and SEO metadata.

**Key Fields to Update:**
- `agencyName` - Your agency name (currently: "DevGency")
- `tagline` - Your agency tagline
- `description` - Brief description of your agency
- `siteUrl` - Your website URL
- `metadata.defaultTitle` - Default page title for SEO
- `metadata.defaultDescription` - Default meta description
- `metadata.keywords` - SEO keywords array

**Example:**
```json
{
  "agencyName": "DevGency",
  "tagline": "Building digital products that matter",
  "siteUrl": "https://youragency.com"
}
```

---

### 2. images.json

**Purpose:** Centralized image management with S3 placeholder URLs.

**Structure:**
- `hero` - Hero section images
- `projects` - Project screenshots organized by project key
- `testimonials` - Client avatar images
- `team` - Team member photos
- `about` - About page images
- `blog` - Blog post images
- `og` - Open Graph images for social sharing
- `favicon` - Favicon files
- `logo` - Logo variations (light/dark/icon)

**How to Update:**
1. Upload your images to S3
2. Replace placeholder URLs with your actual S3 URLs
3. Keep the same key structure

**Example:**
```json
{
  "projects": {
    "financeflow": {
      "thumbnail": "https://your-bucket.s3.amazonaws.com/projects/financeflow-thumb.jpg",
      "hero": "https://your-bucket.s3.amazonaws.com/projects/financeflow-hero.jpg",
      "gallery": [
        "https://your-bucket.s3.amazonaws.com/projects/financeflow-1.jpg",
        "https://your-bucket.s3.amazonaws.com/projects/financeflow-2.jpg"
      ]
    }
  }
}
```

**Current Placeholder Format:**
```
https://your-s3-bucket.s3.amazonaws.com/[category]/[image-name].jpg
```

---

### 3. projects.json

**Purpose:** Portfolio projects with details, tech stack, and results.

**Key Fields:**
- `id` - Unique project identifier
- `title` - Project name
- `slug` - URL-friendly slug
- `category` - Project category
- `summary` - Brief description
- `description` - Full project description
- `techUsed` - Array of technologies
- `results` - Project outcomes/metrics
- `link` - Internal project page link
- `externalLink` - External link (or null)
- `featured` - Show on homepage (true/false)
- `year` - Project year
- `client` - Client name
- `imageKey` - Reference to images.json

**Adding a New Project:**
```json
{
  "id": "new-project",
  "title": "Project Name",
  "slug": "project-name",
  "category": "Full Stack Development",
  "summary": "Brief summary...",
  "description": "Full description...",
  "techUsed": ["React", "Node.js", "PostgreSQL"],
  "results": "Metrics and results...",
  "link": "/projects/project-name",
  "externalLink": null,
  "featured": true,
  "year": "2025",
  "client": "Client Name",
  "imageKey": "projectKey"
}
```

**Note:** The `imageKey` must match a key in `images.json` under `projects`.

---

### 4. contact.json

**Purpose:** Contact information and contact form settings.

**Key Fields to Update:**
- `email` - Primary contact email (used throughout the site)
- `phone` - Contact phone number
- `address` - Physical address
- `businessHours` - Operating hours
- `contactForm.heading` - Contact section heading
- `contactForm.benefits` - Benefits list shown on contact form
- `calendly.url` - Your Calendly booking link
- `supportEmail` - Support email
- `salesEmail` - Sales email
- `careersEmail` - Careers email

**Example:**
```json
{
  "email": "hello@youragency.com",
  "phone": "+1 (555) 123-4567",
  "calendly": {
    "enabled": true,
    "url": "https://calendly.com/youragency/consultation"
  }
}
```

**Important:** The `email` field is used in:
- Contact section
- Footer
- Any mailto: links

---

### 5. navigation.json

**Purpose:** Site navigation structure and menus.

**Structure:**
- `mainNav` - Desktop navigation menu
- `mobileNav` - Mobile navigation menu
- `footer` - Footer navigation links
- `cta` - Call-to-action buttons

**Main Navigation Structure:**
```json
{
  "label": "Services",
  "type": "dropdown",
  "items": [
    {
      "label": "Web Development",
      "href": "/#web-development",
      "description": "Build blazing-fast web applications"
    }
  ]
}
```

**Link Types:**
- Anchor links: `/#section-id` (scrolls to section)
- Internal pages: `/page-name` (Next.js routing)
- External links: `https://example.com` (set `isExternal: true`)

**Adding New Menu Items:**
1. Add to `mainNav` for desktop
2. Add to `mobileNav` for mobile
3. Add to appropriate `footer` section
4. Ensure the `href` doesn't lead to 404

---

### 6. external-links.json

**Purpose:** Social media links and external integrations.

**Key Sections:**
- `socialMedia` - Social media profiles
- `partnerships` - Partner logos/links
- `external` - External services (Calendly, Medium, etc.)
- `documentation` - API docs and developer resources

**Social Media Structure:**
```json
{
  "platform": "GitHub",
  "url": "https://github.com/youragency",
  "icon": "github",
  "label": "Follow us on GitHub"
}
```

**Updating Social Links:**
1. Replace URLs with your actual social profiles
2. Add/remove platforms as needed
3. Icons map to Lucide icons (github, linkedin, twitter, etc.)

**Available Icons:**
- github
- linkedin
- twitter
- instagram
- youtube
- dribbble

---

## Using the Configuration in Code

### Loading All Config

```typescript
import { loadAllConfig } from '../lib/loadConfig';

const siteData = loadAllConfig();
console.log(siteData.config.agencyName); // "DevGency"
```

### Loading Individual Configs

```typescript
import {
  getSiteConfig,
  getImages,
  getProjects,
  getContact,
  getNavigation,
  getExternalLinks
} from '../lib/loadConfig';

const config = getSiteConfig();
const images = getImages();
const projects = getProjects();
```

### Getting a Specific Image

```typescript
import { getImageUrl } from '../lib/loadConfig';

const logo = getImageUrl('logo.light');
const projectThumb = getImageUrl('projects.financeflow.thumbnail');
```

### Getting Projects with Images

```typescript
import { getProjectsWithImages } from '../lib/loadConfig';

const projectsWithImages = getProjectsWithImages();
// Returns projects merged with their image data
```

---

## Updating Your Site Content

### Step 1: Update Agency Information

1. Open `data/config.json`
2. Update `agencyName`, `tagline`, `description`
3. Update SEO metadata

### Step 2: Upload Images to S3

1. Upload all images to your S3 bucket
2. Organize them by category (projects, testimonials, etc.)
3. Make sure they're publicly accessible
4. Copy the S3 URLs

### Step 3: Replace Image Placeholders

1. Open `data/images.json`
2. Replace all `https://your-s3-bucket.s3.amazonaws.com/...` URLs
3. Keep the same JSON structure and keys

### Step 4: Update Contact Information

1. Open `data/contact.json`
2. Update `email`, `phone`, `address`
3. Update Calendly URL if you use it
4. Customize contact form heading and benefits

### Step 5: Update Navigation

1. Open `data/navigation.json`
2. Review all menu items
3. Ensure all `href` values point to existing sections or pages
4. Remove any items you don't need

### Step 6: Update Social Media Links

1. Open `data/external-links.json`
2. Replace placeholder URLs with your actual profiles
3. Add or remove social platforms as needed

### Step 7: Update Projects

1. Open `data/projects.json`
2. Update existing projects or add new ones
3. Ensure each project has a matching `imageKey` in `images.json`
4. Set `featured: true` for projects you want on the homepage

---

## Important Notes

### Avoiding 404 Errors

All navigation links are configured to avoid 404s:

1. **Internal anchor links** (`/#section-id`) scroll to sections on the homepage
2. **Page links** (`/page-name`) should only be added when the page exists
3. **External links** should have valid URLs

Current pages that exist:
- `/` - Homepage
- Links starting with `/#` - Homepage sections

Pages that need to be created:
- `/blog` - Blog page
- `/case-studies` - Case studies page
- `/privacy` - Privacy policy page
- `/terms` - Terms of service page
- `/cookies` - Cookie policy page

You can either:
- Create these pages in `/pages` directory
- Remove the links from navigation.json
- Change them to external links (e.g., link to a Medium blog)

### Image Best Practices

1. **Use descriptive filenames**: `project-name-hero.jpg` instead of `img1.jpg`
2. **Optimize images**: Compress before uploading to S3
3. **Use consistent dimensions**: Same aspect ratios for each category
4. **Set up CORS**: Enable CORS on your S3 bucket if needed

### SEO Optimization

Update these fields in `config.json` for better SEO:
- `metadata.defaultTitle` - Appears in browser tab and search results
- `metadata.defaultDescription` - Shown in search result snippets
- `metadata.keywords` - Helps with search ranking

---

## Sticky Navbar

The new sticky navbar:
- Fixed at the top of the page
- Transparent when at the top, white background when scrolled
- Dropdown menus for Services, Company, and Resources
- Mobile-responsive with hamburger menu
- Uses dynamic data from `navigation.json` and `config.json`

The navbar automatically updates when you change:
- Agency name in `config.json`
- Menu items in `navigation.json`
- Logo URL in `images.json`

---

## Troubleshooting

### Build Errors

If you get TypeScript errors:
```bash
npm run build
```

Common issues:
1. **Missing comma in JSON** - Check JSON syntax
2. **Invalid JSON** - Use a JSON validator
3. **Missing required fields** - Check the structure matches examples

### Images Not Showing

1. Check S3 URLs are correct
2. Verify S3 bucket permissions (public read access)
3. Check CORS settings on S3 bucket
4. Verify image keys match between `projects.json` and `images.json`

### Links Going to 404

1. For homepage sections, use `/#section-id` format
2. Create the page in `/pages` directory before adding to navigation
3. Or remove the link from `navigation.json`

---

## Development Workflow

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Testing Changes

1. Update JSON files
2. Refresh the browser
3. Check that changes appear correctly
4. Run `npm run build` to ensure no errors

---

## Summary

**Files you'll update most often:**
1. `data/images.json` - Replace all S3 placeholders with your image URLs
2. `data/contact.json` - Update email, phone, and contact details
3. `data/external-links.json` - Add your social media links
4. `data/config.json` - Set your agency name and branding

**Files you may update occasionally:**
- `data/projects.json` - Add/update portfolio projects
- `data/navigation.json` - Modify menu structure

**Files managed by the system:**
- `agency-website-content.json` - Legacy content (still used for hero, services, etc.)
- `lib/loadConfig.ts` - Configuration loader (don't modify unless needed)

---

## Need Help?

If you encounter any issues:
1. Check this guide for common solutions
2. Verify your JSON syntax with a validator
3. Review the console for error messages
4. Run `npm run build` to catch errors early

Your website is now fully dynamic and easy to update! Just edit the JSON files and refresh.
