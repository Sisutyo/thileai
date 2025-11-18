# Thile AI - Branding & Design Guidelines

## Brand Identity

### Brand Name
**Thile AI** - AI Automation Platform

### Tagline
"Giải pháp AI automation hàng đầu cho doanh nghiệp Việt tại Mỹ"
(Leading AI automation solution for Vietnamese businesses in the US)

### Target Audience
Vietnamese-American small business owners in the United States, primarily in:
- Nail salons
- Restaurants  
- Hair salons
- Auto repair shops
- Car dealerships

### Brand Voice
- Professional yet approachable
- Tech-savvy but easy to understand
- Vietnamese-first communication
- Supportive and empowering

---

## Color Palette

### Primary Colors

#### Purple (Primary Brand Color)
- **Hex:** `#8b5cf6`
- **CSS Variable:** `--primary-purple`
- **Usage:** Primary CTAs, brand elements, links, highlights
- **Gradient Version:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

#### Blue (Secondary Brand Color)
- **Hex:** `#3b82f6`
- **CSS Variable:** `--primary-blue`
- **Usage:** Secondary CTAs, accents, interactive elements
- **Gradient Version:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

#### Pink (Accent Color)
- **Hex:** `#ec4899`
- **CSS Variable:** `--primary-pink`
- **Usage:** Highlights, hover states, special callouts

### Gradient Combinations

#### Aurora Background (Primary)
```css
background: linear-gradient(135deg, 
    #667eea 0%, 
    #764ba2 25%, 
    #f093fb 50%, 
    #4facfe 75%, 
    #00f2fe 100%
);
```

#### Hero Gradient
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Text Colors

- **Primary Text:** `#ffffff` (white)
- **Secondary Text:** `rgba(255, 255, 255, 0.8)`
- **Muted Text:** `rgba(255, 255, 255, 0.6)`

### Background Colors

- **Dark Base:** `#0f0f23`
- **Card Background:** `rgba(255, 255, 255, 0.05)` with blur
- **Hover State:** `rgba(255, 255, 255, 0.1)`

---

## Typography

### Font Family
System font stack for optimal performance and native feel:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes

#### Headings
- **H1 (Hero):** `3.5rem` (56px) - Desktop | `2.5rem` (40px) - Mobile
- **H2 (Section):** `2.5rem` (40px) - Desktop | `2rem` (32px) - Mobile
- **H3 (Subsection):** `1.8rem` (28.8px) - Desktop | `1.5rem` (24px) - Mobile
- **H4 (Card Title):** `1.2rem` (19.2px)

#### Body Text
- **Large:** `1.25rem` (20px)
- **Regular:** `1.1rem` (17.6px)
- **Small:** `0.9rem` (14.4px)

### Font Weights
- **Regular:** 400
- **Medium:** 500
- **Semi-Bold:** 600
- **Bold:** 700

---

## Design System

### Glassmorphism Effect

Core design pattern throughout the website:

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
```

**Variations:**
- **Stronger glass:** `rgba(255, 255, 255, 0.1)` + `blur(15px)`
- **Subtle glass:** `rgba(255, 255, 255, 0.03)` + `blur(8px)`

### Border Radius Standards

- **Large containers:** `20px`
- **Cards:** `15px`
- **Buttons:** `50px` (pill-shaped)
- **Small elements:** `10px`

### Spacing System

Based on 8px grid:

- **XXS:** `4px`
- **XS:** `8px`
- **S:** `16px`
- **M:** `24px`
- **L:** `32px`
- **XL:** `48px`
- **XXL:** `64px`
- **XXXL:** `100px`

---

## UI Components

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 15px 40px;
border-radius: 50px;
border: none;
font-size: 1.1rem;
font-weight: 600;
```

**Hover State:**
```css
transform: translateY(-2px);
box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
```

#### Secondary Button
```css
background: rgba(255, 255, 255, 0.1);
border: 2px solid rgba(255, 255, 255, 0.2);
color: white;
padding: 15px 40px;
border-radius: 50px;
```

**Hover State:**
```css
background: rgba(255, 255, 255, 0.15);
border-color: var(--primary-purple);
```

### Cards

#### Feature Card
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
padding: 40px;
transition: all 0.3s ease;
```

**Hover State:**
```css
transform: translateY(-10px);
background: rgba(255, 255, 255, 0.08);
box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
```

### Forms

#### Input Fields
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 10px;
padding: 15px;
color: white;
font-size: 1rem;
```

**Focus State:**
```css
border-color: var(--primary-purple);
background: rgba(255, 255, 255, 0.08);
outline: none;
```

### Navigation

#### Desktop Navigation
```css
background: rgba(15, 15, 35, 0.8);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 50px;
padding: 15px 30px;
```

#### Mobile Navigation (Hamburger)
- **Icon Size:** `30px`
- **Menu Background:** `rgba(15, 15, 35, 0.98)`
- **Backdrop Blur:** `20px`

---

## Animation & Effects

### Aurora Background Animation
```css
@keyframes aurora {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
animation: aurora 15s ease infinite;
background-size: 200% 200%;
```

### Hover Animations

#### Standard Lift
```css
transition: transform 0.3s ease;
transform: translateY(-5px);
```

#### Card Lift with Shadow
```css
transition: all 0.3s ease;
transform: translateY(-10px);
box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
```

### Transition Timings
- **Fast:** `0.2s ease`
- **Standard:** `0.3s ease`
- **Slow:** `0.5s ease`

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Extra Small - Mobile Portrait */
@media (max-width: 480px) { }

/* Small - Mobile Landscape */
@media (max-width: 768px) { }

/* Medium - Tablet */
@media (max-width: 968px) { }

/* Large - Desktop */
@media (min-width: 969px) { }
```

### Mobile Optimization

#### Touch Targets
- **Minimum size:** `44px × 44px`
- **Recommended spacing:** `8px` between interactive elements

#### Typography Scaling
- Hero headings reduce by ~30% on mobile
- Body text maintains readability at 16px minimum

#### Layout Changes
- Grid columns collapse to single column
- Padding reduces from `100px` to `40px`
- Navigation switches to hamburger menu

---

## Iconography

### Social Media Icons

Only use **Facebook** and **LinkedIn**:

#### Facebook SVG
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
```

#### LinkedIn SVG
```svg
<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
</svg>
```

#### Social Link Styling
```css
.social-link {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: var(--primary-purple);
    transform: translateY(-3px);
}

.social-link svg {
    width: 20px;
    height: 20px;
}
```

### Emoji Icons

Used sparingly for visual interest in contact sections:
- **Email:** 📧
- **Phone:** 📞
- **Location:** 📍
- **Social:** 🌐

---

## Accessibility

### ARIA Labels
Always include descriptive ARIA labels for icon-only buttons and links:

```html
<a href="#" class="social-link" aria-label="Facebook">
    <!-- SVG icon -->
</a>
```

### Color Contrast
All text maintains WCAG AA standards:
- **White on dark purple:** 7.5:1 ratio
- **White on dark background:** 15:1 ratio

### Focus States
All interactive elements include visible focus indicators:
```css
:focus {
    outline: 2px solid var(--primary-purple);
    outline-offset: 2px;
}
```

---

## Content Guidelines

### Language
- **Primary:** Vietnamese
- **Secondary:** English (for technical terms)
- **Tone:** Professional, supportive, empowering

### Vietnamese Diacritics
Always use proper Vietnamese diacritics for authenticity:
- Correct: "Giải pháp"
- Incorrect: "Giai phap"

### Messaging Principles
1. **Clear Value:** Explain benefits before features
2. **Vietnamese-First:** Communicate in native language
3. **Real Examples:** Use relevant business scenarios
4. **Call-to-Action:** Every section has clear next steps

---

## Layout Patterns

### Hero Section
```
- Full viewport height
- Centered content
- Large gradient heading
- Subtitle + CTA buttons
- Aurora animated background
```

### Feature Grid
```
- 3 columns desktop
- 2 columns tablet  
- 1 column mobile
- Equal height cards
- Consistent padding
```

### Footer Structure
```
4-column layout:
1. Brand + Social (Thile AI logo with gradient)
2. Sản Phẩm (Products)
3. Công Ty (Company)
4. Liên Hệ (Contact)

Mobile: Stacks vertically
```

---

## File Structure

### CSS Organization
```
css/
└── styles.css (centralized stylesheet)
    ├── Reset & Variables
    ├── Global Styles
    ├── Navigation
    ├── Hero Sections
    ├── Components
    ├── Forms
    ├── Footer
    └── Media Queries
```

### HTML Pages
```
Root Directory:
├── index.html (Home)
├── about.html (About)
├── giai-phap.html (Solutions)
├── doi-ngu-ai.html (AI Agents)
├── case-studies.html (Case Studies)
├── contact.html (Contact)
├── car-dealerships.html (Car Dealerships)
├── privacy.html (Privacy Policy)
└── terms.html (Terms of Service)
```

---

## Best Practices

### Performance
1. Use system fonts (no external font loading)
2. Optimize images for web
3. Minimize CSS animations
4. Enable cache-busting headers

### SEO
1. Proper heading hierarchy (H1 → H6)
2. Descriptive meta tags
3. Semantic HTML structure
4. Vietnamese language declaration

### Cross-Browser Compatibility
1. Test on Chrome, Firefox, Safari, Edge
2. Use CSS vendor prefixes for backdrop-filter
3. Fallback backgrounds for older browsers

### Mobile-First Development
1. Design for mobile screens first
2. Progressive enhancement for larger screens
3. Touch-friendly interactive elements
4. Optimized images for mobile bandwidth

---

## Brand Assets

### Logo
- **Format:** Text-based "Thile AI" with gradient
- **Gradient:** Purple to pink (`#8b5cf6` to `#ec4899`)
- **Font Weight:** 700 (Bold)
- **Size:** 1.5rem minimum

### Favicon
- **File:** `generated-icon.png`
- **Format:** PNG
- **Size:** 512×512px recommended

### Social Media
- **Platforms:** Facebook, LinkedIn only
- **Color Scheme:** Match brand purple/blue/pink
- **Profile Image:** Use gradient logo

---

## Version History

**Version 1.0** - November 2025
- Initial branding guidelines
- Glassmorphism design system
- Vietnamese-first content strategy
- Mobile-responsive implementation
- 9-page website structure

---

## Contact

For questions about branding guidelines or design implementation:
- **Email:** info@thile.ai
- **Support:** support@thile.ai

---

**Last Updated:** November 18, 2025
