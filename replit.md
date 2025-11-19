# Thile AI - AI Automation Platform

## Overview

Thile AI is a Vietnamese-language marketing website for an AI automation platform. It targets Vietnamese small businesses in the United States, particularly car dealerships, focusing on AI-powered customer service automation. The website's primary purpose is lead generation, showcasing AI agent capabilities for automating customer interactions across channels like WhatsApp and Instagram.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

**Technology Stack**: Static HTML/CSS website with no JavaScript framework dependencies.

**Design System**:
- Glassmorphism UI pattern with frosted glass effects.
- Aurora-inspired animated gradient background using CSS animations.
- Purple/blue/pink gradient color scheme.
- Fully responsive design using CSS media queries.

**Page Structure**:
- Multi-page static site (10 main pages + 5 blog posts):
  - Main pages: Home, About, Solutions, AI Agents, Case Studies, Resources, Car Dealerships, Contact, Privacy, Terms
  - Blog posts: 5 AI automation articles in `blog/` directory
- Centralized styling via `css/styles.css`.
- Solutions page (`giai-phap.html`) details AI solutions for Marketing, Sales, and CSKH.
- AI Agents page (`doi-ngu-ai.html`) showcases specialized AI agents and their workflows.
- Case Studies page (`case-studies.html`) presents real-world success stories.
- Resources page (`tai-lieu.html`) showcases AI automation blog articles with card-based layout.
- Blog directory contains 5 detailed Vietnamese articles about AI automation workflows.
- All pages are in Vietnamese and optimized for mobile responsiveness with consistent navigation and touch targets.
- Navigation includes 5 main links: Trang Chủ, Giải pháp, Đội Ngũ AI, Case Studies, Tài Liệu.

### Backend

**Web Server**: Simple Python HTTP server (`server.py`) using the built-in `http.server` module.
- Serves static files on port 5000.
- Implements cache-busting headers.
- Root path (`/`) redirects to `index.html`.
- Chosen for its lightweight nature, simplicity, and suitability for development/static content.

### Language and Localization

- **Primary Language**: Vietnamese (`lang="vi"`).
- **Target Audience**: Vietnamese small business owners in the United States.
- All content is in Vietnamese to cater to the specific demographic.

## External Dependencies

### Third-Party Services

- None currently implemented. The website is self-contained with no external API calls, analytics, or third-party integrations in the codebase.

### Future Integration Points (Anticipated)

- **Communication Platforms**: WhatsApp Business API, Instagram Messaging API.
- **CRM Systems**: For lead capture.
- **AI/LLM Services**: For AI agent functionality.
- **Analytics**: For tracking conversions.
- **Email Services**: For transactional and marketing emails.

### Assets and Resources

- Custom favicon (`generated-icon.png`).
- Self-hosted CSS.
- No external font libraries (uses system fonts).

### Development Dependencies

- **Python 3.x**: Required for running `server.py`.
- No package manager dependencies; uses only Python standard library.