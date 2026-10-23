import { render, screen } from '@testing-library/react';
import Img from './Img';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Img', () => {
  it('is visible in the default state', () => {
    render(<Img alt="Sample"  />);
    expect(screen.getByTestId('img')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Img alt="Sample" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('img');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Img alt="Sample" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('img')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('img')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
