import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <div>
        <p>welcome to react</p>
        <p>{process.env.NAME}</p>
      </div>
    </React.StrictMode>
  );
}