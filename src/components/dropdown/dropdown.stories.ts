import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./index";

const meta = {
title: "Example/Dropdown",
component: Dropdown,
tags: ["docsPage"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {},
};

export const Disabled: Story = {
args: {
disabled: true,
},
};