import { ChangeEvent } from 'react';
export interface RadioButtonProps {
  /** Text next to the radio input */
  label?: string;
  /** Radio group name */
  name?: string;
  /** Value of this radio input */
  value?: string;
  /** Whether the radio starts selected */
  checked?: boolean;
  /** Change handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
