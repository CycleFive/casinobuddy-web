import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './providers/toast';
import { ClerkProvider } from '@clerk/clerk-react';
import Pages from './pages';
import PageLayout from './components/page-layout';
import { VITE_CLERK_PUBLISHABLE_KEY } from './env';

const App: FC = function App() {
  return (
    <ToastProvider>
      <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Router>
          <PageLayout>
            <Pages />
          </PageLayout>
        </Router>
      </ClerkProvider>
    </ToastProvider>
  );
};

export default App;
