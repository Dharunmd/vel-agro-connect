# Vel AgroConnect

## Overview

Vel AgroConnect is a modern, mobile-first agricultural marketplace platform that connects farmers directly with global exporters. The application features a scroll-friendly landing page with smooth animations, interactive crop listings, and comprehensive user engagement features. Built as a full-stack web application, it provides farmers with a platform to showcase their produce and enables exporters to discover quality agricultural products for international trade.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using React with TypeScript, featuring a component-based architecture with modern UI patterns:

- **Framework**: React 18 with TypeScript for type safety and modern React features
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth scroll animations, page transitions, and interactive elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The server-side follows a RESTful API pattern with Express.js:

- **Framework**: Express.js with TypeScript for the web server
- **API Design**: RESTful endpoints for CRUD operations on contacts, crops, farmers, and exporters
- **Data Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Development**: TSX for TypeScript execution and hot reloading

### Data Storage Solutions
The application uses a flexible storage architecture:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Client**: Neon Database serverless PostgreSQL for cloud deployment
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Current Implementation**: In-memory storage for development with sample data
- **Data Models**: Users, contacts, crops, farmers, and exporters with proper relationships

### Design System and Styling
The application implements a cohesive design system:

- **Color Scheme**: Green primary (#4CAF50), white backgrounds, yellow accents for agricultural branding
- **Typography**: Inter font family for clean, readable text across all screen sizes
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Component Library**: Comprehensive UI components including cards, buttons, forms, navigation, and layout elements
- **Animation System**: Scroll-triggered animations, hover effects, and smooth transitions for enhanced user experience

### Key Features Implementation
The application includes several specialized features:

- **Hero Section**: Full-width background with clear call-to-action buttons for user registration
- **Interactive Crop Listings**: Filterable grid layout with category-based filtering (vegetables, fruits, grains)
- **Trust Indicators**: Animated counters showing platform statistics and impact metrics
- **Educational Content**: Carousel/slider component for agricultural tips and best practices
- **Contact System**: Form handling with validation and WhatsApp integration for direct communication
- **Smooth Scrolling**: Section-based navigation with smooth scroll behavior

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible component foundation
- **Animation**: Framer Motion for scroll animations and page transitions
- **HTTP Client**: TanStack Query for data fetching, caching, and synchronization
- **Form Management**: React Hook Form with Hookform Resolvers for integration
- **Styling**: Tailwind CSS with class variance authority for component variants
- **Utilities**: clsx and tailwind-merge for conditional styling, date-fns for date manipulation

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect for database operations
- **Database Provider**: Neon Database serverless for cloud PostgreSQL hosting
- **Validation**: Zod for schema validation and type inference
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development Tools**: TSX for TypeScript execution, ESBuild for production builds

### Development and Build Tools
- **Bundler**: Vite with React plugin for fast development and optimized builds
- **TypeScript**: Full TypeScript setup with strict configuration
- **Linting and Formatting**: ESLint and Prettier configurations
- **Path Resolution**: Configured path aliases for clean imports (@/, @shared/, @assets/)
- **Replit Integration**: Specialized plugins for Replit development environment

### Third-party Integrations
- **WhatsApp Business**: Direct integration for farmer-exporter communication
- **Image Hosting**: External image URLs for crop photos (currently using Pixabay)
- **Font Services**: Google Fonts for typography (Inter, Architects Daughter, DM Sans)
- **Replit Services**: Development banner, error overlay, and cartographer for enhanced development experience