import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    links: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "My App",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
  },
};

export const EmptyLinks: Story = {
  args: {
    title: "My App",
    links: [],
  },
};

export const SingleLink: Story = {
  args: {
    title: "My App",
    links: [{ text: "Home", href: "/" }],
  },
};

export const ManyLinks: Story = {
  args: {
    title: "My App",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
      { text: "FAQ", href: "/faq" },
      { text: "Terms", href: "/terms" },
    ],
  },
};
