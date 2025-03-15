# Environment Variables Guide

This document provides detailed information about the environment variables used in this project.

## Getting Started

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your configuration values.

3. For production, set these variables in your hosting platform (Vercel, Netlify, etc.).

## Available Environment Variables

### Next.js Configuration

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | The URL of your website | Yes | `http://localhost:3000` |
| `NEXT_PUBLIC_APP_ENV` | The environment (development, staging, production) | Yes | `development` |

### Supabase Configuration

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | No | - |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | No | - |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key (server-side only) | No | - |
| `SUPABASE_JWT_SECRET` | Your Supabase JWT secret (server-side only) | No | - |

### Database Configuration (if not using Supabase)

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | Your database connection URL | No | - |
| `DATABASE_DIRECT_URL` | Direct connection URL (bypassing pooling) | No | - |

### Authentication Providers

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth client ID | No | - |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | No | - |
| `NEXT_PUBLIC_GITHUB_CLIENT_ID` | GitHub OAuth client ID | No | - |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret | No | - |
| `NEXTAUTH_URL` | NextAuth.js URL | No | - |
| `NEXTAUTH_SECRET` | NextAuth.js secret | No | - |

### Payment Processing

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | No | - |
| `STRIPE_SECRET_KEY` | Stripe secret key | No | - |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | No | - |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal client ID | No | - |
| `PAYPAL_CLIENT_SECRET` | PayPal client secret | No | - |

### MCP Servers Configuration

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MCP_SERVER_URL` | Main MCP server URL | No | - |
| `MCP_API_KEY` | MCP API key | No | - |
| `MCP_SECRET_KEY` | MCP secret key | No | - |
| `MCP_SERVER_URL_US` | US region MCP server URL | No | - |
| `MCP_SERVER_URL_EU` | EU region MCP server URL | No | - |
| `MCP_SERVER_URL_ASIA` | Asia region MCP server URL | No | - |
| `MCP_AUTH_TOKEN` | MCP authentication token | No | - |
| `MCP_REFRESH_TOKEN` | MCP refresh token | No | - |

### Feature Flags

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_ENABLE_FEATURE_X` | Enable Feature X | No | `false` |
| `NEXT_PUBLIC_MAINTENANCE_MODE` | Enable maintenance mode | No | `false` |

## Using Environment Variables

### In Client Components

```tsx
'use client';

import { env } from '@/lib/env';

export function MyComponent() {
  return (
    <div>
      <p>Site URL: {env.NEXT_PUBLIC_SITE_URL}</p>
      <p>Environment: {env.NEXT_PUBLIC_APP_ENV}</p>
      
      {env.NEXT_PUBLIC_ENABLE_FEATURE_X && (
        <p>Feature X is enabled!</p>
      )}
    </div>
  );
}
```

### In Server Components or API Routes

```tsx
import { validateEnv, getEnvVar } from '@/lib/env';

export async function MyServerComponent() {
  // Validate required environment variables
  validateEnv();
  
  // Get specific environment variables
  const siteUrl = getEnvVar('NEXT_PUBLIC_SITE_URL');
  const appEnv = getEnvVar('NEXT_PUBLIC_APP_ENV');
  
  // Use them in your component
  return (
    <div>
      <p>Site URL: {siteUrl}</p>
      <p>Environment: {appEnv}</p>
    </div>
  );
}
```

## Best Practices

1. **Security**: Never expose sensitive keys in client-side code. Only use `NEXT_PUBLIC_` prefix for variables that are safe to expose.

2. **Validation**: Always validate required environment variables early in your application lifecycle.

3. **Type Safety**: Use the `env.ts` utility to ensure type safety when accessing environment variables.

4. **Default Values**: Provide sensible default values for non-critical environment variables.

5. **Documentation**: Keep this document updated when adding new environment variables.

## Troubleshooting

- **Changes not taking effect**: Restart your development server after changing environment variables.
- **Missing variables in production**: Ensure you've set all required variables in your hosting platform.
- **Type errors**: Update the `Env` interface in `lib/env.ts` when adding new environment variables. 