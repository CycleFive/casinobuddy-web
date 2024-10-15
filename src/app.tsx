import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages';
import PageLayout from './components/page-layout';

const App: FC = function App() {
  return (
    <Router>
      <PageLayout>
        <Pages />
      </PageLayout>
    </Router>
  );
};

export default App;
