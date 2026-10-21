import { render, screen } from '@testing-library/react';
import Table from './Table';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Table', () => {
  it('is visible in the default state', () => {
    render(<Table caption="People" ><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Table caption="People" backgroundColor="#ff0000"><tbody><tr><td>x</td></tr></tbody></Table>);
    const element = screen.getByTestId('table');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Table caption="People" backgroundColor="#ff0000" disabled><tbody><tr><td>x</td></tr></tbody></Table>);
    expect(screen.getByTestId('table')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('table')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
