import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["docsPage"],
  argTypes: {
    title: { control: { type: "text" } },
    links: { control: { type: "object" } },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleLinkClick = () => {
  console.log("Link clicked");
};

export const Default: Story = {
  args: {
    title: "My App",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
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
    links: [{ text: "Home", href: "#", onClick: handleLinkClick }],
  },
};

export const ManyLinks: Story = {
  args: {
    title: "My App",
    links: [
      { text: "Home", href: "#", onClick: handleLinkClick },
      { text: "About", href: "#", onClick: handleLinkClick },
      { text: "Contact", href: "#", onClick: handleLinkClick },
      { text: "FAQ", href: "#", onClick: handleLinkClick },
      { text: "Terms", href: "#", onClick: handleLinkClick },
    ],
  },
};
