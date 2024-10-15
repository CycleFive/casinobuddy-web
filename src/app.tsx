import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './providers/toast';
import Pages from './pages';
import PageLayout from './components/page-layout';

const App: FC = function App() {
  return (
    <ToastProvider>
      <Router>
        <PageLayout>
          <Pages />
        </PageLayout>
      </Router>
    </ToastProvider>
  );
};

export default App;
