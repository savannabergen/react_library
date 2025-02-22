import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
title: "Example/Button",
component: Button,
tags: ["docsPage"],
argTypes: {
children: { control: { type: "text" } },
disabled: { control: { type: "boolean" } },
},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
children: "Button Text",
disabled: false,
},
};