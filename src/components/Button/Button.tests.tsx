import { render, screen } from '@testing-library/react';
import Button from './Button';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Button', () => {
  it('is visible in the default state', () => {
    render(<Button label="Click me"  />);
    expect(screen.getByTestId('button')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Button label="Click me" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('button');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Button label="Click me" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('button')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('button')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
