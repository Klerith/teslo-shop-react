import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TesloShopApp } from './TesloShopApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloShopApp />
  </StrictMode>
);
