# Design Guidelines: Mureithi's Farm To Table

## Design Approach

**Reference-Based Approach**: Drawing inspiration from successful farm-to-table and organic food e-commerce sites like Farmbox Direct, Imperfect Foods, and local agricultural marketplaces. The design emphasizes authenticity, freshness, and direct farmer-to-consumer connection.

**Core Principles**:
- Honest, authentic presentation that builds trust
- Photography-first approach showcasing vibrant produce
- Clear, accessible contact methods (critical for phone-based orders)
- Mobile-optimized for on-the-go browsing

## Typography System

**Font Stack**:
- Primary: "Inter" (Google Fonts) - Clean, modern sans-serif for body text
- Display: "Fraunces" (Google Fonts) - Warm, friendly serif for headlines

**Hierarchy**:
- Hero Headline: Fraunces, 3xl-6xl responsive, font-bold
- Section Headers: Fraunces, 2xl-4xl, font-semibold
- Product Names: Inter, xl-2xl, font-semibold
- Body Text: Inter, base-lg, font-normal, leading-relaxed
- Labels/Meta: Inter, sm, font-medium

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

**Grid System**:
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Sections: grid-cols-1 lg:grid-cols-2
- Mobile: Always single column, generous spacing

## Page Structure

### Homepage Layout

**Hero Section** (80vh):
- Full-width background image: Vibrant spread of fresh indigenous vegetables on wooden surface or farmer holding produce basket
- Centered overlay content with backdrop-blur-sm buttons
- Headline: "Fresh Indigenous Vegetables, Direct From Our Farm"
- Subheadline highlighting farm-to-table freshness
- Dual CTA: "View Products" + "Contact Us" (WhatsApp icon)

**Farm Story Section** (py-20):
- Two-column layout (image left, text right)
- Image: Farmer in field or close-up of vegetable plants
- Compelling narrative about indigenous vegetables and sustainable practices

**Featured Products Section** (py-20):
- Grid display: 8-9 product cards in 3-column layout
- Each card: Square vegetable image, name (English/Local), brief description
- Hover interaction: Subtle lift effect

**Why Choose Us Section** (py-16):
- 3-column grid with icon-headline-text
- Benefits: "100% Fresh", "Indigenous Varieties", "Direct From Farm"
- Icons from Heroicons

**Contact Call-to-Action** (py-20):
- Centered, prominent section
- Multiple contact methods with icons
- WhatsApp button with green indicator
- Phone number large and tap-friendly (tel: link)

### Product Catalog Page

**Product Grid**:
- 3-column responsive grid
- Filter sidebar on desktop (toggleable on mobile)
- Product cards with:
  - High-quality vegetable image (square aspect ratio)
  - Product name (both English and local name)
  - Short description emphasizing freshness
  - "Order Now" button linking to contact

### Contact Page

**Split Layout**:
- Left: Contact form (Name, Email, Phone, Message)
- Right: Contact information cards
  - Phone/WhatsApp with clickable links
  - Email with mailto: link
  - Business hours
  - Farm location (if applicable)

## Component Library

**Navigation**:
- Sticky header with farm logo/name
- Simple menu: Home, Products, About, Contact
- Mobile: Hamburger menu
- WhatsApp floating action button (bottom-right, fixed)

**Product Cards**:
- Rounded corners (rounded-lg)
- Image fills card top, 4:3 aspect ratio
- White/neutral card background
- Shadow on hover (shadow-lg transition)
- Padding: p-4 to p-6

**Buttons**:
- Primary: Rounded-full, px-8 py-3, font-semibold
- Secondary: Outline style with border
- All buttons include hover:scale-105 transition

**Contact Buttons**:
- WhatsApp: Icon + text, distinctive treatment
- Phone: tel: link, large tap target (min-h-12)
- Email: mailto: link with envelope icon

**Form Inputs**:
- Rounded borders (rounded-lg)
- Clear labels above inputs
- Adequate spacing (space-y-4)
- Focus states with ring treatment

## Images Strategy

**Required Images**:
1. **Hero**: Full-width vibrant vegetable arrangement or farmer portrait (professional photography)
2. **Product Images**: Individual vegetable photos on neutral backgrounds (8-9 images)
3. **Farm Story**: Candid farming scenes or farmer working with crops
4. **Section Backgrounds**: Subtle texture overlays (burlap, wood grain) used sparingly

**Image Treatment**:
- High quality, well-lit photography
- Consistent aspect ratios per section
- Lazy loading for performance
- Next.js Image component optimization

## Animations

**Minimal, Purposeful Motion**:
- Card hover lifts (transform scale-105)
- Button hover states (built-in)
- Smooth scroll to sections
- Fade-in on scroll for product cards (intersection observer)

## Accessibility

- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Sufficient contrast ratios
- Keyboard navigation support
- Alt text for all product images
- Form validation with clear error states