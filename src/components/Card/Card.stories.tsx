import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    title: 'Card title',
    description: 'Cards group related content and actions together.',
    backgroundColor: '#ffffff',
    textColor: '#212121',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
