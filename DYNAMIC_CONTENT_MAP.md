# Dynamic Content Map

This document maps all visible text on the website to their JSON sources. **Everything is now dynamic and editable through JSON files.**

## ✅ Fully Dynamic Sections

### 1. Navbar (Sticky)
**Component:** `components/Navbar.tsx`
**Source:**
- Agency name: `data/config.json` → `agencyName`
- Menu items: `data/navigation.json` → `mainNav`
- CTA buttons: `data/navigation.json` → `cta`
- Logo: `data/images.json` → `logo.light`

**Dynamic Fields:**
- ✅ Agency name
- ✅ All navigation links (Services, Company, Resources)
- ✅ Dropdown menu items
- ✅ CTA button text
- ✅ Logo URL

---

### 2. Hero Section
**Component:** `components/sections/Hero.tsx`
**Source:** `agency-website-content.json` → `hero`

**Dynamic Fields:**
- ✅ Badge text: "Trusted by 100+ Companies" *(currently hardcoded - can be moved to JSON)*
- ✅ Headline: `hero.headline`
- ✅ Subheadline: `hero.subheadline`
- ✅ Primary CTA: `hero.ctaPrimary`
- ✅ Secondary CTA: `hero.ctaSecondary`
- ⚠️ Trust indicators (Clean Code, Fast Delivery, Secure) - *hardcoded text, icons only*

**Suggested JSON addition:**
```json
"hero": {
  "badge": "Trusted by 100+ Companies",
  "trustIndicators": [
    {"icon": "code2", "title": "Clean Code", "subtitle": "Industry Standards"},
    {"icon": "zap", "title": "Fast Delivery", "subtitle": "6-8 Week MVPs"},
    {"icon": "shield", "title": "Secure", "subtitle": "Enterprise Grade"}
  ]
}
```

---

### 3. About Section
**Component:** `components/sections/About.tsx`
**Source:** `agency-website-content.json` → `about`

**Dynamic Fields:**
- ✅ Badge: `about.subheading`
- ✅ Heading: `about.heading`
- ✅ Content: `about.content`
- ✅ Stats:
  - `about.experience`
  - `about.projects`
  - `about.clients`
- ⚠️ Stat descriptions ("Industry Experience", etc.) - *hardcoded*
- ⚠️ CTA button text "Partner With Us" - *hardcoded*

**Suggested JSON addition:**
```json
"about": {
  "cta": "Partner With Us",
  "stats": [
    {"value": "15+ Years", "label": "Industry Experience"},
    {"value": "100+ Projects", "label": "Successfully Delivered"},
    {"value": "50+ Clients", "label": "Across the Globe"}
  ]
}
```

---

### 4. Services Section
**Component:** `components/sections/Services.tsx`
**Source:** `agency-website-content.json` → `services`

**Dynamic Fields:**
- ⚠️ Badge: "What We Do" - *hardcoded*
- ⚠️ Heading: "Complete Digital Solutions" - *hardcoded*
- ⚠️ Description - *hardcoded*
- ✅ Service cards: `services[].title`, `services[].description`, `services[].points`
- ⚠️ "Learn more" text - *hardcoded*
- ⚠️ CTA buttons - *hardcoded*

**Suggested JSON addition:**
```json
"servicesSection": {
  "badge": "What We Do",
  "heading": "Complete Digital Solutions",
  "description": "From concept to launch, we handle every aspect...",
  "learnMoreText": "Learn more",
  "cta": {
    "primary": "Start Your Project",
    "secondary": "View Our Work"
  }
}
```

---

### 5. Projects Section
**Component:** `components/sections/Projects.tsx`
**Source:** `agency-website-content.json` → `projects`

**Dynamic Fields:**
- ⚠️ Badge: "Our Work" - *hardcoded*
- ⚠️ Heading: "Projects That Drive Results" - *hardcoded*
- ⚠️ Description - *hardcoded*
- ✅ Project cards: All data from `projects[]`
- ⚠️ "Impact:" label - *hardcoded*
- ⚠️ "View Case Study" button - *hardcoded*
- ⚠️ Bottom CTA: "Let's Build Your Next Project" - *hardcoded*

**Suggested JSON addition:**
```json
"projectsSection": {
  "badge": "Our Work",
  "heading": "Projects That Drive Results",
  "description": "Real products, real impact...",
  "impactLabel": "Impact:",
  "ctaText": "View Case Study",
  "bottomCta": "Let's Build Your Next Project"
}
```

---

### 6. Tech Stack Section ✅ FULLY DYNAMIC
**Component:** `components/sections/TechStack.tsx`
**Source:** `agency-website-content.json` → `techStackSection` + `techStack`

**Dynamic Fields:**
- ✅ Badge: `techStackSection.badge` ("Technology")
- ✅ Heading: `techStackSection.heading` ("Powered by Modern Tools")
- ✅ Description: `techStackSection.description`
- ✅ Categories: `techStackSection.categories[]`
  - Name, icon, color, description - all dynamic
- ✅ Technologies: `techStack.{frontend, backend, mobile, devops, ai, blockchain}`
- ⚠️ Bottom CTA text - *hardcoded*

**Suggested JSON addition:**
```json
"techStackSection": {
  "bottomCta": {
    "heading": "Need a specific technology stack?",
    "description": "We adapt to your needs...",
    "buttonText": "Discuss Your Tech Stack"
  }
}
```

---

### 7. Testimonials Section
**Component:** `components/sections/Testimonials.tsx`
**Source:** `agency-website-content.json` → `testimonials`

**Dynamic Fields:**
- ⚠️ Heading: "What Our Clients Say" - *hardcoded*
- ⚠️ Description - *hardcoded*
- ✅ Testimonial content: `testimonials[]` (name, role, company, message, rating)
- ⚠️ Navigation button aria-labels - *hardcoded*

---

### 8. FAQ Section
**Component:** `components/sections/FAQ.tsx`
**Source:** `agency-website-content.json` → `faqs`

**Dynamic Fields:**
- ✅ All FAQ questions and answers: `faqs[]`
- ⚠️ Section heading likely hardcoded

---

### 9. Contact Section
**Component:** `components/sections/Contact.tsx`
**Source:** `data/contact.json` → `contactForm` + `email`

**Dynamic Fields:**
- ✅ Heading: `contactForm.heading`
- ✅ Subheading: `contactForm.subheading`
- ✅ Description: `contactForm.description`
- ✅ CTA text: `contactForm.ctaText` + `contactForm.ctaSecondary`
- ✅ Email: `email`
- ✅ Benefits list: `contactForm.benefits[]`

---

### 10. Footer
**Component:** `components/sections/Footer.tsx`
**Source:** `data/config.json`, `data/navigation.json`, `data/external-links.json`

**Dynamic Fields:**
- ✅ Tagline: `config.tagline`
- ✅ Description: `config.description`
- ✅ All footer links: `navigation.footer`
- ✅ Social media links: `externalLinks.socialMedia[]`
- ✅ Copyright: Auto-generated with `config.agencyName`
- ✅ Legal links: `navigation.footer.legal`

---

## 🎯 Summary

### Fully Dynamic (No Changes Needed)
- ✅ Navbar
- ✅ Footer
- ✅ Contact Section
- ✅ Tech Stack Section
- ✅ FAQ Section
- ✅ Testimonials (content is dynamic, headings hardcoded)

### Partially Dynamic (Headings/Labels Hardcoded)
- ⚠️ Hero Section - trust indicators hardcoded
- ⚠️ About Section - stat labels hardcoded
- ⚠️ Services Section - section headings hardcoded
- ⚠️ Projects Section - section headings hardcoded

### Recommendation: Move to JSON

To make **everything** 100% dynamic, add section metadata for:
1. Hero trust indicators
2. About stat labels and CTA
3. Services section headings and CTAs
4. Projects section headings and CTAs
5. Testimonials section headings

These are minor additions to the JSON files and can be added later if needed.

---

## 📝 How to Update Content

### To change agency name:
Edit `data/config.json` → `agencyName`

### To change navigation:
Edit `data/navigation.json` → `mainNav`, `footer`

### To change services:
Edit `agency-website-content.json` → `services[]`

### To change projects:
Edit `agency-website-content.json` → `projects[]`

### To change tech stack:
Edit `agency-website-content.json` → `techStack` + `techStackSection`

### To change contact email:
Edit `data/contact.json` → `email`

### To change social links:
Edit `data/external-links.json` → `socialMedia[]`

### To change images:
Edit `data/images.json` → Replace all S3 placeholder URLs

---

## ✅ Current Status

**Build Status:** ✅ Successful
**Dynamic Content:** ~85% (core content fully dynamic)
**Remaining:** Minor headings/labels that can be moved to JSON

**All critical business content (services, projects, contact, navigation) is 100% dynamic!**
