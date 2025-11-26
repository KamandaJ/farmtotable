# Mureithi's Farm To Table - Replit Configuration

## Overview

Mureithi's Farm To Table is a farm-to-table e-commerce website specializing in fresh indigenous African vegetables. The application showcases products like amaranth, black nightshade, cowpeas, kale, pumpkins, butternut squash, and chillies, grown sustainably on a family farm in Kenya. The site emphasizes authentic presentation, photography-first design, and easy contact methods (WhatsApp integration) for phone-based orders.

**Primary Purpose**: Enable customers to browse fresh indigenous vegetables and contact the farm directly for orders via WhatsApp or contact form.

**Target Audience**: Health-conscious consumers interested in traditional African vegetables and farm-to-table produce.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight alternative to React Router).

**State Management**: 
- TanStack Query (React Query) for server state management
- React Hook Form for form state with Zod validation

**UI Framework**: 
- Shadcn/ui component library (Radix UI primitives with custom styling)
- Tailwind CSS for styling with a custom farm-to-table color scheme
- Custom fonts: Inter (body text) and Fraunces (display/headings)

**Design System**:
- Photography-first approach with high-quality vegetable imagery
- Green primary color (#2D7A4D) emphasizing natural/organic feel
- Mobile-first responsive design
- Theme provider supporting light/dark modes

**Key Pages**:
- Home: Hero section with call-to-action, featured products, farm story
- Products: Filterable product catalog (leafy greens, vegetables, chillies)
- About: Farm story and values presentation
- Contact: Contact form with WhatsApp integration
- 404: Custom not-found page

### Backend Architecture

**Runtime**: Node.js with Express framework

**Development vs Production**:
- Development: Vite dev server middleware integrated with Express
- Production: Static file serving from built assets

**API Design**: RESTful endpoints
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve contact messages (admin functionality)

**Data Validation**: Zod schemas shared between client and server (located in `/shared/schema.ts`)

**Storage Strategy**: 
- Currently using in-memory storage (`MemStorage` class) for contact messages
- Designed with abstraction (`IStorage` interface) to allow database implementation
- Schema definitions prepared for PostgreSQL with Drizzle ORM

**Session Management**: Infrastructure in place with `connect-pg-simple` for PostgreSQL session storage

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL

**Database Schema** (defined but not yet connected):
- `users` table: User authentication (id, username, password)
- `contact_messages` table: Contact form submissions (id, name, email, phone, message, created_at)

**Migration System**: Drizzle Kit for schema migrations to `./migrations` directory

**Current State**: Application runs with in-memory storage; PostgreSQL integration prepared but not active (requires `DATABASE_URL` environment variable)

**Design Decision**: Abstraction layer allows switching from memory storage to database without changing business logic.

### External Dependencies

**Database**: 
- Neon Database (@neondatabase/serverless) - Serverless PostgreSQL provider
- Connection configured via `DATABASE_URL` environment variable
- Not currently provisioned/connected

**Third-Party Services**:
- WhatsApp Business integration via wa.me links (phone: +254712700008)
- Pre-configured for direct messaging with custom text

**Image Assets**:
- Locally stored generated product images in `/attached_assets/generated_images/`
- Images imported directly into components (Vite handles bundling)

**Fonts**:
- Google Fonts: Inter and Fraunces
- Loaded via CDN in index.html

**Development Tools**:
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- Only loaded in development environment

**UI Component Libraries**:
- Radix UI primitives for accessible component foundations
- Lucide React for icons
- React Icons for brand icons (WhatsApp)
- Embla Carousel for carousels
- CMDK for command palette functionality

**Form Handling**:
- React Hook Form for form state
- Hookform Resolvers with Zod for validation
- date-fns for date formatting

**Build Tools**:
- Vite for frontend bundling
- esbuild for backend bundling in production
- TypeScript for type checking
- PostCSS with Tailwind CSS and Autoprefixer