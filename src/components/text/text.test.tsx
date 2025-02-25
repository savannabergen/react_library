import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  test('renders enabled Text with children', async () => {
    const children = 'Hello World!';
    render(<Text>{children}</Text>);
    expect(screen.getByText(children)).toHaveStyle('color: #000');
  });

  test('renders disabled Text with children', async () => {
    const children = 'Hello World!';
    render(<Text disabled>{children}</Text>);
    expect(screen.getByText(children)).toHaveStyle('opacity: 0.5');
  });
});