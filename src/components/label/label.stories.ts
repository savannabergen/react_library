import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
title: "Example/Label",
component: Label,
tags: ["docsPage"],
  argTypes: {
    children: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    children: "Label Text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Label Text",
    disabled: true,
  },
};