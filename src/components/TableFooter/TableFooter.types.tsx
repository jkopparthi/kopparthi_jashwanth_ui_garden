export interface TableFooterProps {
  /** Footer text */
  text?: string;
  /** Number of columns the footer spans */
  colSpan?: number;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
