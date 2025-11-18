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

## Recent Changes (November 17, 2025)

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
- Replaced simple static ROI section in index.html with full interactive calculator from giai-phap.html
- Calculator features: Business type selector, 3 input sliders (traffic, conversion rate, average order value)
- Real-time calculations: Shows current vs. projected customers, additional revenue, percentage increase, annual projection
- 3 insight cards explaining AI improvements (35% conversion increase, 80% faster response, 45% customer satisfaction)
- Vanilla JavaScript implementation with live updates on slider input
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