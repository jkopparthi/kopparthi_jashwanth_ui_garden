import { ReactNode } from 'react';
export interface TableCellProps {
  /** Cell content */
  children?: ReactNode;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
