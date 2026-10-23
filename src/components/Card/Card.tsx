import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { CardProps } from './Card.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledCard = styled.div<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  padding: 1.25rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: ${({ $disabled }) => ($disabled ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.15)')};
  h3 {
    margin: 0 0 0.5rem;
  }
  p {
    margin: 0 0 0.75rem;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card title',
  description,
  children,
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledCard
    data-testid="card"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {children}
  </StyledCard>
);

export default Card;
