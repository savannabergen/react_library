import type { Meta, StoryObj } from '@storybook/react';
import Form from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fields: [
      {
        label: 'Name',
        type: 'text',
        name: 'name',
        value: '',
        onChange: () => {},
      },
      {
        label: 'Email',
        type: 'email',
        name: 'email',
        value: '',
        onChange: () => {},
      },
      {
        label: 'Message',
        type: 'textarea',
        name: 'message',
        value: '',
        onChange: () => {},
      },
    ],
    buttonText: 'Submit',
    onSubmit: () => {},
  },
};
