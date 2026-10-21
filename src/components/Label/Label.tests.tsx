import { render, screen } from '@testing-library/react';
import Label from './Label';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Label', () => {
  it('is visible in the default state', () => {
    render(<Label text="Email"  />);
    expect(screen.getByTestId('label')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Label text="Email" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('label');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Label text="Email" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('label')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('label')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
