import type { Meta, StoryObj } from "@storybook/react";
import Hamburger from "./Hamburger";

const meta = {
  title: "Example/Hamburger",
  component: Hamburger,
  tags: ["docsPage"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Hamburger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};