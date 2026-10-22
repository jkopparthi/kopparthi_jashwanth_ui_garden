import { ChangeEvent } from 'react';
export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  /** Items shown in the list */
  options?: DropdownOption[];
  /** Disabled first option shown before a choice is made */
  placeholder?: string;
  /** Accessible name for the select */
  ariaLabel?: string;
  /** Initially selected value */
  defaultValue?: string;
  /** Change handler */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
