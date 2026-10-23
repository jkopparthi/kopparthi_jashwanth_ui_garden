import type { Meta, StoryObj } from '@storybook/react';
import { PLACEHOLDER_IMG } from './Img';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    src: PLACEHOLDER_IMG,
    alt: 'Mountains under a blue sky',
    width: 320,
    backgroundColor: '#eeeeee',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
