import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.scss';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <div className='p-4'>
        <div className='py-5 rounded-md bg-slate-900 text-white text-center'>
          welcome to react
        </div>
        <div className="py-5"></div>
        <div className=""></div>
      </div>
    </React.StrictMode>
  );
}