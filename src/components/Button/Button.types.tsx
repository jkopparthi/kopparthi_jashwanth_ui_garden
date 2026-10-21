export interface ButtonProps {
  /** Text shown on the button */
  label?: string;
  /** Click handler */
  onClick?: () => void;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
