import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
title: "Example/Table",
component: Table,
tags: ["docsPage"],
argTypes: {
headers: { control: { type: "object" } },
children: { control: { type: "text" } },
},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
headers: ["Column 1", "Column 2", "Column 3"],
children: "Table content",
},
};