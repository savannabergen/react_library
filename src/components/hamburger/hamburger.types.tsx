export interface HamburgerProps {
  /**
   * Whether the hamburger menu is open or not.
   */
  isOpen?: boolean;
  /**
   * Callback function to toggle the hamburger menu.
   */
  onToggle?: (isOpen: boolean) => void;
  /**
   * Custom class name for the hamburger menu button.
   */
  className?: string;
  /**
   * Custom style for the hamburger menu button.
   */
  style?: React.CSSProperties;
}