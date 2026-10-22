import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TableHeaderProps } from './TableHeader.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledHeader = styled.thead<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  th {
    padding: 0.75rem;
    text-align: left;
    font-weight: 700;
  }
  @media (max-width: 600px) {
    th {
      padding: 0.5rem;
      font-size: 0.85rem;
    }
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  columns = ['Column 1',
  'Column 2',
  'Column 3'],
  backgroundColor = '#1976d2',
  textColor = '#ffffff',
  disabled = false,
}) => (
  <StyledHeader
    data-testid="table-header"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  </StyledHeader>
);

export default TableHeader;
