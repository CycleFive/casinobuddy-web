import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './home';
import NotFoundPage from './not-found';

const Pages: FC = function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Pages;
