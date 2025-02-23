import type { Meta, StoryObj } from "@storybook/react";
import HeroImg from "./heroImg";

const meta = {
title: "Example/HeroImg",
component: HeroImg,
tags: ["docsPage"],
argTypes: {
src: { control: { type: "text" } },
alt: { control: { type: "text" } },
},
} satisfies Meta<typeof HeroImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s",
alt: "Hero Image",
},
};