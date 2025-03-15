import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Example/Radio",
  component: Radio,
  tags: ["docsPage"],
  argTypes: {
    label: { control: { type: "text" } },
    checked: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    label: "Radio Label",
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Radio Label",
    checked: false,
    disabled: true,
  },
};
