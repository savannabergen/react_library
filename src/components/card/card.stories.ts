import type { Meta, StoryObj } from "@storybook/react";
import { CardComponent } from "./card";

const meta = {
title: "Example/Card",
component: CardComponent,
tags: ["docsPage"],
argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof CardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card Title",
    description: "This is a card",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Another Card",
    description: "With different content",
    disabled: true,
  },
};