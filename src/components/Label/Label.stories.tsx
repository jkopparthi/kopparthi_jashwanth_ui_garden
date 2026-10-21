import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    text: 'Email address',
    backgroundColor: '#e3f2fd',
    textColor: '#0d47a1',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
