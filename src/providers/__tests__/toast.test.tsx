import React, { FC } from 'react';
import userEvent from '@testing-library/user-event';
import { render, baseRender, screen } from '../../../test-utils/render';
import useToast, { ToastProvider } from '../toast';

test('renders children', () => {
  baseRender(
    <ToastProvider>
      <p>child text</p>
    </ToastProvider>,
  );

  expect(screen.queryByText('child text')).toBeInTheDocument();
});

test('displays a single toast message', async () => {
  const TestComponent: FC = function TestComponent() {
    const toast = useToast();
    return (
      <button type="button" onClick={() => toast.success('Too much ranch')}>
        Dispatch
      </button>
    );
  };

  render(<TestComponent />);
  expect(screen.queryByText('Too much ranch')).not.toBeInTheDocument();

  await userEvent.click(screen.getByText('Dispatch'));
  expect(screen.queryByText('Too much ranch')).toBeInTheDocument();
});

test('displays title when provided', async () => {
  const TestComponent: FC = function TestComponent() {
    const toast = useToast();
    return (
      <button
        type="button"
        onClick={() => toast.success('attractive body', { title: 'bad face' })}
      >
        Dispatch
      </button>
    );
  };

  render(<TestComponent />);
  await userEvent.click(screen.getByText('Dispatch'));
  expect(screen.queryByText('attractive body')).toBeInTheDocument();
  expect(screen.queryByText('bad face')).toBeInTheDocument();
});

describe('variants', () => {
  test('success', async () => {
    const TestComponent: FC = function TestComponent() {
      const toast = useToast();
      return (
        <button type="button" onClick={() => toast.success('mustache purchased')}>
          Dispatch
        </button>
      );
    };

    const { container } = render(<TestComponent />);
    expect(container.querySelector('.toast.bg-success')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Dispatch'));
    expect(container.querySelector('.toast.bg-success')).toBeInTheDocument();
  });

  test('error', async () => {
    const TestComponent: FC = function TestComponent() {
      const toast = useToast();
      return (
        <button type="button" onClick={() => toast.error('going bald')}>
          Dispatch
        </button>
      );
    };

    const { container } = render(<TestComponent />);
    expect(container.querySelector('.toast.bg-danger')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Dispatch'));
    expect(container.querySelector('.toast.bg-danger')).toBeInTheDocument();
  });
});

test('closes when close button in header is clicked', async () => {
  const TestComponent: FC = function TestComponent() {
    const toast = useToast();
    return (
      <button type="button" onClick={() => toast.success('did a thing')}>
        Dispatch
      </button>
    );
  };

  render(<TestComponent />);
  await userEvent.click(screen.getByText('Dispatch'));
  expect(screen.queryByText('did a thing')).toBeInTheDocument();

  await userEvent.click(screen.getByLabelText('Close'));
  expect(screen.queryByText('did a thing')).not.toBeInTheDocument();
});

test('opens multiple messages', async () => {
  const TestComponent: FC = function TestComponent() {
    const toast = useToast();
    return (
      <>
        <button type="button" onClick={() => toast.success('yay')}>
          Success
        </button>
        <button type="button" onClick={() => toast.error('boo')}>
          Error
        </button>
      </>
    );
  };

  render(<TestComponent />);
  await Promise.all([
    userEvent.click(screen.getByText('Success')),
    userEvent.click(screen.getByText('Error')),
  ]);

  expect(screen.queryByText('yay')).toBeInTheDocument();
  expect(screen.queryByText('boo')).toBeInTheDocument();
});

test('closes after duration elapses', async () => {
  const TestComponent: FC = function TestComponent() {
    const toast = useToast();
    return (
      <button type="button" onClick={() => toast.success('quip', { duration: 100 })}>
        Dispatch
      </button>
    );
  };

  render(<TestComponent />);
  await userEvent.click(screen.getByText('Dispatch'));
  expect(screen.queryByText('quip')).toBeInTheDocument();

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      expect(screen.queryByText('quip')).not.toBeInTheDocument();
      resolve();
    }, 150);
  });
});
