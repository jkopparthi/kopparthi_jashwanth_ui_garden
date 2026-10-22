import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    colSpan: { control: 'number' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    text: 'Total: 3 rows',
    colSpan: 3,
    backgroundColor: '#eeeeee',
    textColor: '#212121',
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
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
