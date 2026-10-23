export interface ImgProps {
  /** Image URL (defaults to a built-in placeholder) */
  src?: string;
  /** Alternative text */
  alt?: string;
  /** Width attribute; the image never exceeds its container */
  width?: number | string;
  /** Background colour behind the image */
  backgroundColor?: string;
  /** Greys the image out and shows a not-allowed cursor */
  disabled?: boolean;
}
