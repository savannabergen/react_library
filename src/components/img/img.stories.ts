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
src: '(link unavailable)',
alt: 'Example Image',
},
};