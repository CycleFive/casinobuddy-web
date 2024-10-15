import React, { ReactElement, ReactNode, FC } from 'react';
import { render as defaultRender, RenderOptions } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { ToastProvider } from '../src/providers/toast';

interface Props {
  children: ReactNode;
}

const TestWrapper: FC<Props> = function TestWrapper({ children }) {
  return (
    <ToastProvider>
      <Router>
        {children}
      </Router>
    </ToastProvider>
  );
};

export * from '@testing-library/react';
export const baseRender = defaultRender;

export function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return defaultRender(ui, {
    wrapper: TestWrapper,
    ...options,
  });
}
