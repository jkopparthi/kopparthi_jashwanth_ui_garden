import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TableRowProps } from './TableRow.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledRow = styled.tr<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  &:hover {
    filter: ${({ $disabled }) => ($disabled ? 'none' : 'brightness(0.96)')};
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledRow
    data-testid="table-row"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {children}
  </StyledRow>
);

export default TableRow;
