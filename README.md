# Ultimate Next.js Starter Template

A modern, production-ready Next.js starter template with all the tools you need to build amazing web applications.

## Features

- ⚡️ **Next.js 15** - The latest version of Next.js with App Router
- 🔥 **React 19** - The latest version of React with improved performance
- 🦾 **TypeScript** - Type safety for your codebase
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔍 **SEO Optimized** - Built-in SEO with Next.js Metadata API
- 📱 **PWA Ready** - Progressive Web App support
- 🚀 **CI/CD** - GitHub Actions workflows for continuous integration
- 📝 **ESLint & Prettier** - Code quality and formatting
- 🧪 **Optional Testing** - Jest and Playwright available when needed
- 🔐 **Environment Variables** - Comprehensive environment setup for various services

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ultimate-nextjs-starter.git my-project

# Navigate to the project directory
cd my-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Development

### Directory Structure

```
├── .github/workflows  # GitHub Actions workflows
├── app/               # Next.js App Router
├── components/        # React components
├── lib/               # Utility functions and libraries
├── public/            # Static assets
├── scripts/           # Utility scripts
└── tests/             # Test files (optional)
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run dev:turbo` - Start the development server with Turbopack (faster)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run Jest tests (optional)

## Environment Variables

This template includes a comprehensive environment variables setup for various services:

- **Supabase** - Authentication, database, and storage
- **MCP Servers** - Custom server configurations
- **Authentication** - OAuth providers and NextAuth.js
- **Payment Processing** - Stripe and PayPal
- **Email Services** - Resend and SendGrid
- **Media & Storage** - Cloudinary and AWS S3
- **Analytics & Monitoring** - Google Analytics and Sentry
- **API Keys & External Services** - OpenAI, Algolia, etc.
- **Feature Flags** - Toggle features on/off

To get started:

1. Copy `.env.example` to `.env.local`
2. Fill in the values for the services you're using
3. Use the `lib/env.ts` utility for type-safe access to environment variables

## Optional Features

### Testing Setup

This template includes testing as an optional feature. To enable testing:

1. Install the optional testing dependencies:
   ```bash
   npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript jest babel-jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
   ```

2. Rename `.babelrc.optional` to `.babelrc`:
   ```bash
   mv .babelrc.optional .babelrc
   ```

### Turbopack

Turbopack is Next.js's new bundler designed to be faster than Webpack. To use Turbopack:

```bash
npm run dev:turbo
```

## Deployment

This template is ready to deploy on Vercel, Netlify, or any other hosting platform that supports Next.js.

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
