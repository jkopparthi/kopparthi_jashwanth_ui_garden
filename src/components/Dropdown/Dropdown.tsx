import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { DropdownProps, DropdownOption } from './Dropdown.types';

const DEFAULT_OPTIONS: DropdownOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledSelect = styled.select<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'pointer')};
  padding: 0.6rem 0.75rem;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  font-size: 1rem;
  min-width: 200px;
  max-width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options = DEFAULT_OPTIONS,
  placeholder,
  ariaLabel = 'Dropdown',
  defaultValue,
  onChange,
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledSelect
    data-testid="dropdown"
    aria-label={ariaLabel}
    defaultValue={defaultValue ?? (placeholder ? '' : undefined)}
    disabled={disabled}
    onChange={onChange}
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
  >
    {placeholder && (
      <option value="" disabled>
        {placeholder}
      </option>
    )}
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
