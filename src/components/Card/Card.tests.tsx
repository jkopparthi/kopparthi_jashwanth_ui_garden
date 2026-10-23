import { render, screen } from '@testing-library/react';
import Card from './Card';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('Card', () => {
  it('is visible in the default state', () => {
    render(<Card title="Card" description="Body"  />);
    expect(screen.getByTestId('card')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<Card title="Card" description="Body" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('card');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<Card title="Card" description="Body" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('card')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('card')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
