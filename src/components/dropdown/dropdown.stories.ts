import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta = {
title: "Example/Dropdown",
component: Dropdown,
tags: ["docsPage"],
argTypes: {
options: { control: { type: "object" } },
value: { control: { type: "text" } },
onChange: { action: "onChange" },
},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
options: [
{ label: "Option 1", value: "option-1" },
{ label: "Option 2", value: "option-2" },
],
value: "option-1",
onChange: () => {}, // Add this line
},
};