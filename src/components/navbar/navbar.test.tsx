import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  it('renders the navbar title', () => {
    render(<Navbar title="My App" links={links} />);
    expect(screen.getByText('My App')).toBeTruthy();
  });

  it('renders the navbar links', () => {
    render(<Navbar title="My App" links={links} />);
    links.forEach((link) => {
      expect(screen.getByText(link.text)).toBeTruthy();
      expect(screen.getByText(link.text).getAttribute('href')).toBe(link.href);
    });
  });

  it('renders the correct number of links', () => {
    render(<Navbar title="My App" links={links} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(links.length);
  });
});