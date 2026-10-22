import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('TableHeader', () => {
  it('is visible in the default state', () => {
    render(<table><TableHeader columns={["A", "B"]}  /></table>);
    expect(screen.getByTestId('table-header')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<table><TableHeader columns={["A", "B"]} backgroundColor="#ff0000" /></table>);
    const element = screen.getByTestId('table-header');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<table><TableHeader columns={["A", "B"]} backgroundColor="#ff0000" disabled /></table>);
    expect(screen.getByTestId('table-header')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('table-header')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
