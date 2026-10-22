import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('TableRow', () => {
  it('is visible in the default state', () => {
    render(<table><tbody><TableRow ><td>cell</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<table><tbody><TableRow backgroundColor="#ff0000"><td>cell</td></TableRow></tbody></table>);
    const element = screen.getByTestId('table-row');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<table><tbody><TableRow backgroundColor="#ff0000" disabled><td>cell</td></TableRow></tbody></table>);
    expect(screen.getByTestId('table-row')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('table-row')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
