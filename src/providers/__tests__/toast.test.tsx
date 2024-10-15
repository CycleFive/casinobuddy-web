import React, { FC } from 'react';
import { baseRender, screen } from '../../../test-utils/render';
import useToast, { ToastProvider } from '../toast';

test('renders children', () => {
  baseRender(
    <ToastProvider>
      <p>child text</p>
    </ToastProvider>,
  );

  expect(screen.queryByText('child text')).toBeInTheDocument();
});
