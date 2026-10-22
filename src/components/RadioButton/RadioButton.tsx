import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { RadioButtonProps } from './RadioButton.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledRadio = styled.label<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'pointer')};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  input {
    cursor: inherit;
  }
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option',
  name = 'options',
  value = 'option',
  checked,
  onChange,
  backgroundColor = '#f5f5f5',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledRadio
    data-testid="radio-button"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <input
      type="radio"
      name={name}
      value={value}
      defaultChecked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <span>{label}</span>
  </StyledRadio>
);

export default RadioButton;
