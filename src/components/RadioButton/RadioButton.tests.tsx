import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('RadioButton', () => {
  it('is visible in the default state', () => {
    render(<RadioButton label="Option A"  />);
    expect(screen.getByTestId('radio-button')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<RadioButton label="Option A" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('radio-button');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<RadioButton label="Option A" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('radio-button')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('radio-button')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
