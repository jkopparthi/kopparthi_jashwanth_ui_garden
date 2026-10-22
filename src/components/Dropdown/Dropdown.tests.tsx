import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Dropdown', () => {
  it('is visible in the default state', () => {
    render(<Dropdown placeholder="Pick"  />);
    expect(screen.getByTestId('dropdown')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Dropdown placeholder="Pick" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('dropdown');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Dropdown placeholder="Pick" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('dropdown')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('dropdown')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
