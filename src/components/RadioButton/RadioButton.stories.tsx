import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Option A',
    name: 'choices',
    value: 'a',
    checked: false,
    backgroundColor: '#f5f5f5',
    textColor: '#212121',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
