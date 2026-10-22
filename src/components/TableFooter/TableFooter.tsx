import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TableFooterProps } from './TableFooter.types';

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledFooter = styled.tfoot<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  td {
    padding: 0.75rem;
    font-weight: 600;
  }
  @media (max-width: 600px) {
    td {
      padding: 0.5rem;
      font-size: 0.85rem;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  text = 'Footer',
  colSpan = 3,
  backgroundColor = '#eeeeee',
  textColor = '#212121',
  disabled = false,
}) => (
  <StyledFooter
    data-testid="table-footer"
    $bg={backgroundColor}
    $color={textColor}
    $disabled={disabled}
    aria-disabled={disabled}
  >
    <tr>
      <td colSpan={colSpan}>{text}</td>
    </tr>
  </StyledFooter>
);

export default TableFooter;
