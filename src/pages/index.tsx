import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './home';
import DashboardPage from './dashboard';
import NotFoundPage from './not-found';

const Pages: FC = function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Pages;
