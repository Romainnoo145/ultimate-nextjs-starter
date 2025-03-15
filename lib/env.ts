/**
 * Environment variable validation and type safety
 * This file provides type safety and validation for environment variables
 */

// Define the shape of your environment variables
export interface Env {
  // Next.js
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_APP_ENV: 'development' | 'staging' | 'production';
  
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  
  // MCP Servers
  MCP_SERVER_URL?: string;
  MCP_API_KEY?: string;
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_FEATURE_X?: boolean;
  NEXT_PUBLIC_MAINTENANCE_MODE?: boolean;
}

// Get environment variables with type safety
export function getEnv(): Env {
  return {
    // Next.js
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_APP_ENV: (process.env.NEXT_PUBLIC_APP_ENV as Env['NEXT_PUBLIC_APP_ENV']) || 'development',
    
    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    
    // MCP Servers
    MCP_SERVER_URL: process.env.MCP_SERVER_URL,
    MCP_API_KEY: process.env.MCP_API_KEY,
    
    // Feature Flags
    NEXT_PUBLIC_ENABLE_FEATURE_X: process.env.NEXT_PUBLIC_ENABLE_FEATURE_X === 'true',
    NEXT_PUBLIC_MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  };
}

// Validate required environment variables
export function validateEnv(): void {
  const requiredEnvVars: (keyof Env)[] = [
    'NEXT_PUBLIC_SITE_URL',
    'NEXT_PUBLIC_APP_ENV',
  ];
  
  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
  
  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  }
}

// Get a single environment variable with type safety
export function getEnvVar<K extends keyof Env>(key: K): Env[K] {
  return getEnv()[key];
}

// Export a singleton instance for use throughout the app
export const env = getEnv(); 