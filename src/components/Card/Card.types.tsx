import { ReactNode } from 'react';
export interface CardProps {
  /** Card heading */
  title?: string;
  /** Card body text */
  description?: string;
  /** Extra content shown under the description */
  children?: ReactNode;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
