import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { HeroImageProps } from './HeroImage.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
  $image?: string;
}

const StyledHero = styled.section<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  background-image: ${({ $image, $disabled }) =>
    !$disabled && $image
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${$image})`
      : 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  padding: 2rem;
  text-align: center;
  box-sizing: border-box;
  h1 {
    margin: 0 0 0.5rem;
    font-size: clamp(1.75rem, 5vw, 3rem);
  }
  p {
    margin: 0;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
  @media (max-width: 600px) {
    min-height: 240px;
    padding: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title = 'Welcome',
  subtitle = 'A hero banner for your landing page',
  imageUrl,
  backgroundColor = '#37474f',
  textColor = '#ffffff',
  disabled = false,
}) => (
  <StyledHero
    data-testid="hero-image"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    $image={imageUrl}
    aria-disabled={disabled}
  >
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </StyledHero>
);

export default HeroImage;
