export interface NavbarProps {
  title: string;
  logo?: { src: string; alt: string };
  links: { text: string; href: string; onClick?: () => void }[];
  LinkComponent?: React.ComponentType<{
    to: string;
    children: React.ReactNode;
  }>;
  theme?: "light" | "dark";
}
