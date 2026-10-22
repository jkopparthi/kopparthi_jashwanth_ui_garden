import type { Meta, StoryObj } from '@storybook/react';
import TableCell from '../TableCell';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    backgroundColor: '#ffffff',
    textColor: '#212121',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
  render: (args) => (
    <TableRow {...args}>
      <TableCell disabled={args.disabled}>Ada</TableCell>
      <TableCell disabled={args.disabled}>Engineer</TableCell>
    </TableRow>
  ),
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
