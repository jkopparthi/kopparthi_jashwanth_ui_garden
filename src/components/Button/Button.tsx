import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { ButtonProps } from './Button.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledButton = styled.button<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'pointer')};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  max-width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label = 'Click me',
  backgroundColor = '#1976d2',
  textColor = '#ffffff',
  disabled = false,
  onClick,
}) => (
  <StyledButton
    type="button"
    data-testid="button"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);

export default Button;
