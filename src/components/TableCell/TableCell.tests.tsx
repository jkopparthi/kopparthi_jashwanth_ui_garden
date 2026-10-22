import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('TableCell', () => {
  it('is visible in the default state', () => {
    render(<table><tbody><tr><TableCell >Cell</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<table><tbody><tr><TableCell backgroundColor="#ff0000">Cell</TableCell></tr></tbody></table>);
    const element = screen.getByTestId('table-cell');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<table><tbody><tr><TableCell backgroundColor="#ff0000" disabled>Cell</TableCell></tr></tbody></table>);
    expect(screen.getByTestId('table-cell')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('table-cell')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
