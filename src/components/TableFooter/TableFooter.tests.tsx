import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('TableFooter', () => {
  it('is visible in the default state', () => {
    render(<table><TableFooter text="Total"  /></table>);
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<table><TableFooter text="Total" backgroundColor="#ff0000" /></table>);
    const element = screen.getByTestId('table-footer');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<table><TableFooter text="Total" backgroundColor="#ff0000" disabled /></table>);
    expect(screen.getByTestId('table-footer')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('table-footer')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
