export interface TableHeaderProps {
  /** Column heading labels */
  columns?: string[];
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
