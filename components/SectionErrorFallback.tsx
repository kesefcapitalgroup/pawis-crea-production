'use client';

import React, { FC } from 'react';

const SectionErrorFallback: FC<{ error: Error }> = ({ error }) => (
  <div className="error-fallback">
    <h2>Something went wrong</h2>
    <p>We apologize for the inconvenience. Please try refreshing the page.</p>
    <details>
      <summary>Error Details</summary>
      <pre>{error.toString()}</pre>
    </details>
  </div>
);

export default SectionErrorFallback;
