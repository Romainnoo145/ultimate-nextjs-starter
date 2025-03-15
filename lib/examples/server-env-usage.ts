import { validateEnv, getEnvVar } from '../env';

/**
 * Example function showing how to use environment variables in server components or API routes
 * This is just for demonstration purposes
 */
export async function serverSideEnvExample() {
  // Validate required environment variables
  try {
    validateEnv();
  } catch (error) {
    console.error('Environment validation failed:', error);
    throw new Error('Server configuration error');
  }
  
  // Example: Connect to Supabase
  const supabaseUrl = getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
  const supabaseKey = getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase configuration missing');
    return { configured: false };
  }
  
  // Example: Connect to MCP Server
  const mcpServerUrl = getEnvVar('MCP_SERVER_URL');
  const mcpApiKey = getEnvVar('MCP_API_KEY');
  
  if (!mcpServerUrl || !mcpApiKey) {
    console.warn('MCP Server configuration missing');
    return { configured: false };
  }
  
  // In a real application, you would use these variables to connect to services
  return {
    configured: true,
    environment: getEnvVar('NEXT_PUBLIC_APP_ENV'),
    services: {
      supabase: !!supabaseUrl,
      mcpServer: !!mcpServerUrl
    }
  };
} 