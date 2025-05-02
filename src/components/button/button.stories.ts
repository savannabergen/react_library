import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    children: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    variant: {
      control: { type: "inline-radio" },
      options: ["default", "neon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button Text",
    disabled: false,
    variant: "default",
  },
};

export const Neon: Story = {
  args: {
    children: "Neon Button",
    disabled: false,
    variant: "neon",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const DisabledNeon: Story = {
  args: {
    children: "Disabled Neon Button",
    disabled: true,
    variant: "neon",
  },
};
