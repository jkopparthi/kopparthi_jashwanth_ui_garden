import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { LabelProps } from './Label.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledLabel = styled.label<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 600px) {
    display: block;
    font-size: 0.9rem;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Label',
  htmlFor,
  backgroundColor = '#e3f2fd',
  textColor = '#0d47a1',
  disabled = false,
}) => (
  <StyledLabel
    data-testid="label"
    htmlFor={htmlFor}
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {text}
  </StyledLabel>
);

export default Label;
