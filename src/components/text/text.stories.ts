import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
title: "Example/Text",
component: Text,
tags: ["docsPage"],
argTypes: {
children: { control: { type: "text" } },
},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
children: "Text",
},
};
