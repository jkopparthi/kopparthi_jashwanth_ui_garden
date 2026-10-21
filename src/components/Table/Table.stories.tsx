import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    caption: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  args: {
    caption: 'Team members',
    backgroundColor: '#ffffff',
    textColor: '#212121',
    disabled: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader columns={['Name', 'Role', 'City']} disabled={args.disabled} />
      <tbody>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Ada</TableCell>
          <TableCell disabled={args.disabled}>Engineer</TableCell>
          <TableCell disabled={args.disabled}>London</TableCell>
        </TableRow>
        <TableRow disabled={args.disabled}>
          <TableCell disabled={args.disabled}>Grace</TableCell>
          <TableCell disabled={args.disabled}>Admiral</TableCell>
          <TableCell disabled={args.disabled}>New York</TableCell>
        </TableRow>
      </tbody>
      <TableFooter text="2 members" colSpan={3} disabled={args.disabled} />
    </Table>
  ),
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
