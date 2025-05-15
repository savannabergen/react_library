import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["docsPage"],
  argTypes: {
    title: { control: { type: "text" } },
    links: { control: { type: "object" } },
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleLinkClick = () => {
  console.log("Link clicked");
};

export const DefaultLight: Story = {
  args: {
    title: "My App",
    theme: "light",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
    ],
  },
};

export const DefaultDark: Story = {
  args: {
    title: "My App",
    theme: "dark",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
    ],
  },
};

export const EmptyLinksLight: Story = {
  args: {
    title: "My App",
    theme: "light",
    links: [],
  },
};

export const EmptyLinksDark: Story = {
  args: {
    title: "My App",
    theme: "dark",
    links: [],
  },
};

export const SingleLinkLight: Story = {
  args: {
    title: "My App",
    theme: "light",
    links: [{ text: "Home", href: "#", onClick: handleLinkClick }],
  },
};

export const SingleLinkDark: Story = {
  args: {
    title: "My App",
    theme: "dark",
    links: [{ text: "Home", href: "#", onClick: handleLinkClick }],
  },
};

export const ManyLinksLight: Story = {
  args: {
    title: "My App",
    theme: "light",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
      { text: "FAQ", href: "#", onClick: handleLinkClick },
      { text: "Terms", href: "#", onClick: handleLinkClick },
    ],
  },
};

export const ManyLinksDark: Story = {
  args: {
    title: "My App",
    theme: "dark",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
      { text: "FAQ", href: "#", onClick: handleLinkClick },
      { text: "Terms", href: "#", onClick: handleLinkClick },
    ],
  },
};
