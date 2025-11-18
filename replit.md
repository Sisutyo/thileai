# Thile AI - AI Automation Platform

## Overview

Thile AI is a Vietnamese-language marketing website for an AI automation platform targeting Vietnamese small businesses in the United States. The platform focuses on AI-powered customer service automation, with specialized solutions for car dealerships. The website serves as a lead generation tool to showcase AI agent capabilities for automating customer interactions across channels like WhatsApp and Instagram.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Static HTML/CSS website with no JavaScript framework dependencies.

**Design System**: 
- Glassmorphism UI pattern with frosted glass effects (`backdrop-filter: blur()`)
- Aurora-inspired animated gradient background using CSS animations
- Purple/blue/pink gradient color scheme aligned with AI/tech branding
- Fully responsive design using CSS media queries

**Page Structure**:
- Multi-page static site with shared navigation
- Pages: Home (`index.html`), About (`about.html`), Solutions (`giai-phap.html`), Car Dealerships (`car-dealerships.html`), Contact (`contact.html`), Privacy Policy (`privacy.html`), Terms of Service (`terms.html`)
- Centralized styling through `css/styles.css`
- **Solutions Page** (`giai-phap.html`): Dedicated page showcasing AI features and interactive ROI calculator

**Rationale**: Static HTML approach chosen for simplicity, fast load times, and easy deployment. No complex state management needed for a marketing/landing page site. Glassmorphism creates modern, premium feel appropriate for AI product positioning.

### Backend Architecture

**Web Server**: Simple Python HTTP server (`server.py`) using built-in `http.server` module.

**Server Features**:
- Serves on port 5000
- Implements cache-busting headers (`Cache-Control`, `Pragma`, `Expires`)
- Root path (`/`) redirects to `index.html`
- Serves static files from current directory

**Rationale**: Lightweight server suitable for development and simple deployment. No backend logic required as this is purely a static marketing site. Python chosen for cross-platform compatibility and ease of use.

**Alternatives Considered**: Could use nginx or Apache for production, but Python server sufficient for current needs and Replit deployment.

**Pros**: 
- Zero configuration
- Cross-platform
- Built into Python standard library

**Cons**: 
- Not production-grade for high traffic
- No HTTPS by default
- Limited performance optimization

### Language and Localization

**Primary Language**: Vietnamese (`lang="vi"`)

**Target Audience**: Vietnamese small business owners in the United States, particularly those running car dealerships.

**Content Strategy**: All UI text, marketing copy, and CTAs are in Vietnamese to serve the specific demographic and reduce language barriers.

## Recent Changes (November 18, 2025)

### Testimonials Section Added
- Created new testimonials section on homepage (`index.html`)
- Positioned between ROI Stats section and Final CTA section
- **Masonry column layout**: 3-column vertical layout with staggered cards
- **Vertical floating animation**: Cards slowly float up and down (8s infinite loop)
- **Darker minimalist design**: Dark cards (rgba(20, 20, 20, 0.6)) with subtle borders
- **Header structure**: Badge ("CÂU CHUYỆN THÀNH CÔNG") + Title + Subtitle
- 9 authentic Vietnamese testimonials distributed across 3 columns from different business types:
  - Nail salons, restaurants, car dealerships, auto repair shops, hair salons
- Hover effects with purple border glow
- Responsive: 3 columns desktop → 1 column mobile (animation disabled on mobile)
- CTA button: "Xem Demo Miễn Phí" linking to contact page
- CSS: `.testimonials-masonry`, `.testimonial-column`, `.testimonial-card`, `@keyframes float-vertical`

### Business Contact Information Update
- **Phone Number:** Updated from (650) 555-0123 to (270) 330-2844
- **Address:** Updated from San Francisco, CA to Richmond, KY (212 N 2nd St Ste 100, Richmond, KY 40475)
- Updated tel: links, WhatsApp links, and contact form placeholders
- Updated arbitration location in Terms of Service from San Francisco to Richmond, Kentucky
- Changed timezone reference from PST to EST in contact hours

### Email Domain Update
- Changed all email addresses from @thileai.com to @thile.ai
- Updated email types: info@thile.ai, support@thile.ai, legal@thile.ai, privacy@thile.ai
- Updated both mailto links and plain text email addresses across all pages

### Interactive ROI Calculator Removal from Solutions Page
- Removed interactive ROI calculator from giai-phap.html (kept only on homepage)
- Removed associated JavaScript for calculator functionality from giai-phap.html
- ROI calculator now exists exclusively on index.html to avoid duplication

### CTA Card Section Migration
- Created new glassmorphic CTA card section with "chăm sóc khách hàng" italicized gradient text
- Moved CTA card from index.html to end of giai-phap.html (before footer)
- Button: "Nhận Demo Miễn Phí" with arrow icon linking to contact.html
- Card features purple border (rgba(139, 92, 246, 0.3)) and glassmorphic styling
- **index.html structure**: Hero → AI Demo → Problem-Solution → Interactive ROI Calculator → ROI Stats → Final CTA
- **giai-phap.html structure**: Hero → Features → WhatsApp Demo → Instagram Demo → Stats → CTA Card

## Previous Changes (November 17, 2025)

### Solutions Page Created
- Created dedicated `giai-phap.html` page for showcasing AI solutions
- Moved "Giải Pháp AI Toàn Diện" features section (6 feature cards) from homepage to Solutions page
- Moved interactive ROI calculator from homepage to Solutions page
- Updated navigation across all pages to include "Giải pháp" link
- Page structure: Hero → Features (6 cards) → ROI Calculator → CTA Section

### Interactive ROI Calculator Features
- 4 input sliders: Business type, monthly traffic, conversion rate, average order value
- Real-time calculations showing revenue projections
- Formula: 35% conversion improvement assumption
- Displays: Current customers, projected customers, additional revenue, annual revenue projection
- Insights section with 3 data points about AI performance improvements

### Problem-Solution Section Redesign
- Updated heading: "60-70% Khách Hàng Đang Bị Mất" (instead of "Từ Quá Tải Đến Tự Động")
- Added pulsing badge: "Vấn Đề Của Mọi Doanh Nghiệp"
- Redesigned problem card: "Thực Tế Hiện Nay" with "4+ Giờ" highlighted stat box
- Redesigned solution card: "Giải Pháp Của Thile" with "24/7" highlighted stat box
- Updated bullet points to focus on customer loss prevention
- Added SVG icons for both cards (alert triangle and check circle)
- Added stats row: $500+, 78%, 24/7 in glassmorphic cards
- Added CTA section: "Ngừng Mất Khách Hàng Ngay Hôm Nay" with arrow button
- New CSS classes: .stat-card, .stat-value, .stat-label, .cta-card

### Content Migration to Solutions Page
- Moved **WhatsApp AI Agent** section from index.html to giai-phap.html
- Moved **Instagram AI Manager** section from index.html to giai-phap.html
- Moved **Stats Section** ("Thile AI Trong Con Số") from index.html to giai-phap.html
- **giai-phap.html structure**: Hero → Features → ROI Calculator → WhatsApp Demo → Instagram Demo → Stats → CTA
- **index.html** streamlined: Hero → AI Demo → Problem-Solution → Interactive ROI Calculator → Final CTA

### Interactive ROI Calculator Migration
- Added full interactive calculator from giai-phap.html to index.html
- Calculator features: Business type selector, 3 input sliders (traffic, conversion rate, average order value)
- Real-time calculations: Shows current vs. projected customers, additional revenue, percentage increase, annual projection
- 3 insight cards explaining AI improvements (35% conversion increase, 80% faster response, 45% customer satisfaction)
- Vanilla JavaScript implementation with live updates on slider input
- **Basic ROI stats section** added below interactive calculator with "Liên Hệ Ngay" button
- Stats: 70% time savings, 3x revenue, 95% cost reduction
- Both pages now have the same interactive calculator experience

## External Dependencies

### Third-Party Services

**None currently implemented** - The website is completely self-contained with no external API calls, analytics, or third-party integrations visible in the codebase.

### Future Integration Points

Based on the business model (AI automation for customer service), likely future integrations include:

1. **Communication Platforms**: WhatsApp Business API, Instagram Messaging API (mentioned in hero copy)
2. **CRM Systems**: For lead capture from contact forms
3. **AI/LLM Services**: For the AI agent functionality (not yet implemented in website)
4. **Analytics**: Google Analytics or similar for tracking conversions
5. **Email Services**: For transactional emails and marketing campaigns

### Assets and Resources

- Custom favicon (`generated-icon.png`)
- Self-hosted CSS (no CDN dependencies)
- No external font libraries (using system fonts)

### Development Dependencies

**Python 3.x**: Required for running `server.py`

**No package manager dependencies**: Project uses only Python standard library.