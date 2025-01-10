// index.tsx
import './global-polyfill'; // Import this first
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import AppWithProvider from './App.tsx';  // Change to AppWithProvider

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppWithProvider />
    </StrictMode>,
);
