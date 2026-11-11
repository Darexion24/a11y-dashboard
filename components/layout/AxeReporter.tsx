'use client';

import { useEffect } from 'react';
import React from 'react';

export default function AxeReporter() {
  useEffect(() => {
    // Only run axe-core in development mode, and only in the browser
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      import('@axe-core/react').then((axe) => {
        import('react-dom').then((ReactDOM) => {
          axe.default(React, ReactDOM, 1000);
        });
      });
    }
  }, []);

  return null;
}