import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TableCellProps } from './TableCell.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledCell = styled.td<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  padding: 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledCell
    data-testid="table-cell"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    {children}
  </StyledCell>
);

export default TableCell;
