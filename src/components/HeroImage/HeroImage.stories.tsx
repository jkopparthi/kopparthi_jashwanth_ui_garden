import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const SAMPLE_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#42a5f5"/><stop offset="1" stop-color="#7e57c2"/>' +
    '</linearGradient></defs>' +
    '<rect width="1200" height="600" fill="url(#g)"/>' +
    '</svg>'
)}`;

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageUrl: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    title: 'Welcome to the UI Garden',
    subtitle: 'Reusable React components built with styled-components',
    imageUrl: SAMPLE_IMAGE,
    backgroundColor: '#37474f',
    textColor: '#ffffff',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
