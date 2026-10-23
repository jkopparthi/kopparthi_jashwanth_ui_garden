import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';

describe('HeroImage', () => {
  it('is visible in the default state', () => {
    render(<HeroImage title="Hero"  />);
    expect(screen.getByTestId('hero-image')).toBeVisible();
  });

  it('changes its background colour and cursor when disabled', () => {
    const { rerender } = render(<HeroImage title="Hero" backgroundColor="#ff0000" />);
    const element = screen.getByTestId('hero-image');
    expect(element).toHaveStyle('background-color: #ff0000');

    rerender(<HeroImage title="Hero" backgroundColor="#ff0000" disabled />);
    expect(screen.getByTestId('hero-image')).toHaveStyle(`background-color: ${DISABLED_BG}`);
    expect(screen.getByTestId('hero-image')).toHaveStyle(`cursor: ${DISABLED_CURSOR}`);
  });
});
