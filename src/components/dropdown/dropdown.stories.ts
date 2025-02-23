import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from './Dropdown';

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  tags: ["docsPage"],
  argTypes: {
    buttonText: { control: { type: "text" } },
    menuItems: { control: { type: "object" } },
    },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  buttonText: "Dropdown",
  menuItems: ["Option 1", "Option 2", "Option 3"],
  },
};

export const CustomMenuItems: Story = {
  args: {
  buttonText: "Dropdown",
  menuItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
  },
};

export const Disabled: Story = {
  args: {
  buttonText: "Dropdown",
  menuItems: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
  },
};