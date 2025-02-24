import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
title: "Example/Dropdown",
component: Dropdown,
tags: ["docsPage"],
argTypes: {
buttonText: { control: { type: "text" } },
menuItems: { control: { type: "object" } },
disabled: { control: { type: "boolean" } },
},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
args: {
buttonText: "Enabled Dropdown",
menuItems: ["Option 1", "Option 2", "Option 3"],
disabled: false,
},
};

export const Disabled: Story = {
args: {
buttonText: "Disabled Dropdown",
menuItems: ["Option 1", "Option 2", "Option 3"],
disabled: true,
},
};