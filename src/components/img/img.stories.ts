import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
title: 'Example/Img',
component: Img,
tags: ['docsPage'],
argTypes: {
src: { control: { type: 'text' } },
alt: { control: { type: 'text' } },
},
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s',
alt: 'Example Image',
},
};