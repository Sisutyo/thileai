# Thile AI - Branding & Design Guidelines

## 1. Brand Identity

### Logo
- **Primary Logo**: `images/thile-ai-automation-logo.png`
- **Favicon**: `images/thile-ai-favicon.png` / `thile-ai-favicon.svg`
- **Chatbot Avatar**: `images/thile-ai-chatbot-avatar.png`
- **Logo Height**: 55px (desktop), 32px (mobile)

### Brand Name
- **Full Name**: Thile AI
- **Tagline**: "Tự Động Hóa AI Cho Doanh Nghiệp Việt"

---

## 2. Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#8b5cf6` | Main accent, buttons, highlights |
| Primary Blue | `#3b82f6` | Secondary accent, gradients |
| Primary Pink | `#ec4899` | Tertiary accent, gradients |

### Signature Color (Blog Thumbnails)
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Purple | `#1a0a2e` | Blog thumbnail backgrounds, brand signature |

### Background Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0a0a0a` | Main page background |
| Card | `#141414` | Card backgrounds |
| Dark Card | `rgba(20, 20, 20, 0.6)` | Transparent card backgrounds |

### Text Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Text | `#ffffff` | Headings, main content |
| Secondary Text | `#a1a1aa` | Descriptions, captions |
| Muted Text | `#71717a` | Less important text |

### Glass Effects
| Property | Value | Usage |
|----------|-------|-------|
| Glass Background | `rgba(255, 255, 255, 0.1)` | Glassmorphism panels |
| Glass Border | `rgba(255, 255, 255, 0.2)` | Glassmorphism borders |
| Input Background | `rgba(255, 255, 255, 0.15)` | Form inputs |

---

## 3. Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Font Sizes
| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero Title | 4.5rem | 2rem - 2.5rem |
| Section Title | 3rem | 1.75rem - 2rem |
| Body Text | 1rem | 0.95rem |
| Button | 1.125rem | 1rem |
| Badge | 0.75rem | 0.7rem |
| Caption | 0.875rem | 0.8rem |

### Font Weights
| Weight | Usage |
|--------|-------|
| 300 | Body text, descriptions |
| 400 | Regular text |
| 600 | Buttons, labels |
| 700 | Subheadings |
| 800 | Headings |

### Line Height
- Body: `1.6`
- Headings: `1.1` - `1.2`

---

## 4. Gradient Styles

### Primary Gradient (Text)
```css
background: linear-gradient(135deg, #8b5cf6, #3b82f6, #ec4899);
background-size: 200% 200%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Aurora Background Gradient
```css
background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 50%);
```

### Button Shadow Gradient
```css
box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
```

---

## 5. UI Components

### Buttons

#### Primary Button
```css
background: white;
color: black;
padding: 16px 32px;
border-radius: 9999px;
font-weight: 600;
box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
```

#### Secondary Button
```css
background: transparent;
color: white;
border: 1px solid rgba(255, 255, 255, 0.2);
backdrop-filter: blur(10px);
border-radius: 9999px;
```

#### Hover Effects
- Transform: `translateY(-3px) scale(1.05)`
- Transition: `all 0.3s ease`

### Cards

#### Standard Card
```css
background: rgba(20, 20, 20, 0.6);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
padding: 32px;
```

#### Card Hover
```css
border-color: rgba(139, 92, 246, 0.3);
background: rgba(30, 30, 30, 0.7);
transform: translateY(-5px);
```

### Navigation (Glassmorphism)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 9999px;
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
```

### Badges
```css
background: rgba(139, 92, 246, 0.1);
border: 1px solid rgba(139, 92, 246, 0.3);
color: #a78bfa;
border-radius: 9999px;
padding: 8px 20px;
font-size: 0.75rem;
letter-spacing: 0.1em;
text-transform: uppercase;
```

---

## 6. Spacing System

### Border Radius
| Size | Value | Usage |
|------|-------|-------|
| Small | `0.75rem` (12px) | Inputs, small elements |
| Medium | `16px` | Cards |
| Large | `24px` | Large cards, modals |
| Full | `9999px` | Buttons, badges, pills |

### Padding
| Element | Desktop | Mobile |
|---------|---------|--------|
| Section | 100px | 60px - 80px |
| Card | 32px | 24px |
| Button | 16px 32px | 14px 28px |
| Badge | 8px 20px | 6px 16px |

### Gap
| Context | Value |
|---------|-------|
| Grid Gap | 32px |
| Card Gap | 24px |
| Mobile Gap | 16px |

---

## 7. Animation & Motion

### Transitions
```css
transition: all 0.3s ease;
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

### Hover Transforms
- Buttons: `translateY(-3px) scale(1.05)`
- Cards: `translateY(-5px)`
- Links: `translateY(-2px)`

### Aurora Animation
```css
@keyframes aurora-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
animation: aurora-rotate 20s linear infinite;
```

### Continuous Scroll (Testimonials)
```css
@keyframes scrollUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
}
animation: scrollUp 22s linear infinite;
will-change: transform;
```

### Fade In
```css
@keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
    animation: none;
}
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Desktop Large | > 1200px | Full layout |
| Desktop | > 968px | Standard desktop |
| Tablet | 769px - 968px | Tablet layout |
| Mobile Large | 481px - 768px | Large phones |
| Mobile | < 480px | Small phones |

### Mobile Navigation
- Hide desktop nav links
- Show hamburger menu toggle
- Full-screen overlay menu

---

## 9. Image Guidelines

### Blog Thumbnails
- **Aspect Ratio**: 16:9
- **Background**: Deep Purple `#1a0a2e`
- **Style**: White icons with subtle glow
- **Location**: `images/blog/`

### Icon Style
- Clean, minimal line icons
- White color on dark backgrounds
- Subtle glow effect: `filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))`

---

## 10. Content Guidelines

### Language
- **Primary**: Vietnamese
- **Target**: Vietnamese business owners in the USA
- **Tone**: Professional, friendly, supportive

### Pricing Display
- Setup fee: $600
- Monthly fee: $200/month
- ROI timeframe: 3 months

### Key Metrics
- 70% time savings
- 3x revenue increase
- 95% cost reduction

---

## 11. Glassmorphism Pattern

### Standard Glass Panel
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
```

### Glass Card Variant
```css
background: rgba(20, 20, 20, 0.6);
border: 1px solid rgba(255, 255, 255, 0.08);
```

---

## 12. Z-Index Layers

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Background | -1 | Aurora background |
| Content | 1 | Main content |
| Cards | 10 | Floating cards |
| Navigation | 1000 | Fixed navbar |
| Mobile Menu | 999 | Mobile nav overlay |
| Modal | 9998-9999 | Modals, popups |
| Chatbot | 10000 | Chatbot widget |

---

## Quick Reference: CSS Variables

```css
:root {
    /* Primary Colors */
    --primary-purple: #8b5cf6;
    --primary-blue: #3b82f6;
    --primary-pink: #ec4899;
    
    /* Backgrounds */
    --background: #0a0a0a;
    --card: #141414;
    
    /* Text */
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --muted-foreground: #71717a;
    
    /* Glass Effects */
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    
    /* Border & Input */
    --border: rgba(255, 255, 255, 0.2);
    --input: rgba(255, 255, 255, 0.15);
    
    /* Radius */
    --radius: 0.75rem;
}
```

---

*Last Updated: November 2025*
*Project: Thile AI - AI Automation Platform*
