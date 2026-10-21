import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    text: 'The quick brown fox jumps over the lazy dog.',
    backgroundColor: '#ffffff',
    textColor: '#212121',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
