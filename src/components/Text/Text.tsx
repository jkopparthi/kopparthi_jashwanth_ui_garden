import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TextProps } from './Text.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledText = styled.p<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'text')};
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Text: React.FC<TextProps> = ({
  text = 'Some text',
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledText
    data-testid="text"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {text}
  </StyledText>
);

export default Text;
