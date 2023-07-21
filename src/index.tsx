import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { App } from './app/App';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';

const containter = document.getElementById('root');

if (!containter) {
  throw new Error(
    'Контейнер root не найден. Не удалось вмонировать приложение...',
  );
}

const root = createRoot(containter);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
