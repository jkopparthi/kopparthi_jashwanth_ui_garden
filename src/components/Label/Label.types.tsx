export interface LabelProps {
  /** Label text */
  text?: string;
  /** id of the form control this label belongs to */
  htmlFor?: string;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
