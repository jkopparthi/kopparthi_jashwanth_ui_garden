export interface HeroImageProps {
  /** Main heading */
  title?: string;
  /** Supporting text */
  subtitle?: string;
  /** Optional background image URL */
  imageUrl?: string;
  /** Background colour in the default state */
  backgroundColor?: string;
  /** Text colour in the default state */
  textColor?: string;
  /** Greys the component out and shows a not-allowed cursor */
  disabled?: boolean;
}
