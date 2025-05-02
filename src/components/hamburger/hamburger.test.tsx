import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hamburger from './Hamburger';
import '@testing-library/jest-dom';

describe('Hamburger', () => {
  test('renders hamburger icon', () => {
    render(<Hamburger />);
    expect(screen.getByTestId('hamburger-button')).toBeInTheDocument();
  });

  test('toggles open class when clicked', async () => {
    render(<Hamburger />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    expect(hamburgerButton).not.toHaveClass('open');
    await userEvent.click(hamburgerButton);
    expect(hamburgerButton).toHaveClass('open');
    await userEvent.click(hamburgerButton);
    expect(hamburgerButton).not.toHaveClass('open');
  });

  test('calls onToggle callback when clicked', async () => {
    const onToggle = jest.fn();
    render(<Hamburger onToggle={onToggle} />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    await userEvent.click(hamburgerButton);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(true);
    await userEvent.click(hamburgerButton);
    expect(onToggle).toHaveBeenCalledTimes(2);
    expect(onToggle).toHaveBeenLastCalledWith(false);
  });

  test('initially open if isOpen prop is true', () => {
    render(<Hamburger isOpen={true} />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    expect(hamburgerButton).toHaveClass('open');
  });
});