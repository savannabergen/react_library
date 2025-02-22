import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
title: "Example/Label",
component: Label,
tags: ["docsPage"],
argTypes: {
children: { control: { type: "text" } },
},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
children: "Label Text",
},
};