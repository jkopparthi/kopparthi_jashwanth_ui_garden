import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    columns: { control: 'object' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    columns: ['Name', 'Role', 'City'],
    backgroundColor: '#1976d2',
    textColor: '#ffffff',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
