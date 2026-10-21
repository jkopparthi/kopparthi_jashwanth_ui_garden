import { render, screen } from '@testing-library/react';
import Text from './Text';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Text', () => {
  it('is visible in the default state', () => {
    render(<Text text="Hello world"  />);
    expect(screen.getByTestId('text')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Text text="Hello world" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('text');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Text text="Hello world" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('text')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('text')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
