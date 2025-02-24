import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import '@testing-library/jest-dom';

describe('Label', () => {
  test('renders visible Label with children', async () => {
    const children = 'Label Text';
    render(<Label>{children}</Label>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  test('renders disabled Label with children', async () => {
    const children = 'Label Text';
    render(<Label disabled>{children}</Label>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});