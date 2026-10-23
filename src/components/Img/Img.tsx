import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_CURSOR } from '../constants';
import { ImgProps } from './Img.types';

export const PLACEHOLDER_IMG = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">' +
    '<rect width="640" height="400" fill="#90caf9"/>' +
    '<circle cx="480" cy="120" r="50" fill="#fff59d"/>' +
    '<path d="M0 400 L200 180 L340 320 L440 230 L640 400 Z" fill="#1976d2"/>' +
    '</svg>'
)}`;

interface StyledProps {
  $bg: string;
  $disabled: boolean;
}

const StyledImg = styled.img<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(100%) opacity(0.6)' : 'none')};
`;

export const Img: React.FC<ImgProps> = ({
  src = PLACEHOLDER_IMG,
  alt = 'Placeholder image',
  width = 320,
  backgroundColor = '#eeeeee',
  disabled = false,
}) => (
  <StyledImg
    data-testid="img"
    src={src}
    alt={alt}
    width={width}
    $bg={backgroundColor}
    $disabled={disabled}
    aria-disabled={disabled}
  />
);

export default Img;
