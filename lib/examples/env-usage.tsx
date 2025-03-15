'use client';

import { useEffect, useState } from 'react';
import { env } from '../env';

/**
 * Example component showing how to use environment variables
 * This is just for demonstration purposes
 */
export function EnvExample() {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);
  
  useEffect(() => {
    // Access environment variables using the env utility
    setIsFeatureEnabled(env.NEXT_PUBLIC_ENABLE_FEATURE_X || false);
    
    // You can also check the current environment
    if (env.NEXT_PUBLIC_APP_ENV === 'development') {
      console.log('Running in development mode');
    }
  }, []);
  
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Environment Configuration</h2>
      <p className="mb-2">
        <span className="font-semibold">Site URL:</span> {env.NEXT_PUBLIC_SITE_URL}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Environment:</span> {env.NEXT_PUBLIC_APP_ENV}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Feature X Enabled:</span> {isFeatureEnabled ? 'Yes' : 'No'}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Maintenance Mode:</span> {env.NEXT_PUBLIC_MAINTENANCE_MODE ? 'Yes' : 'No'}
      </p>
      
      {env.NEXT_PUBLIC_SUPABASE_URL && (
        <p className="mb-2">
          <span className="font-semibold">Supabase Configured:</span> Yes
        </p>
      )}
      
      {env.MCP_SERVER_URL && (
        <p className="mb-2">
          <span className="font-semibold">MCP Server Configured:</span> Yes
        </p>
      )}
    </div>
  );
} 