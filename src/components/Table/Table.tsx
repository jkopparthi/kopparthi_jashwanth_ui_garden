import React from 'react';
import styled from 'styled-components';
import { DISABLED_BG, DISABLED_COLOR, DISABLED_CURSOR } from '../constants';
import { TableProps } from './Table.types';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* lets wide tables scroll on small screens */
`;

interface StyledProps {
  $bg: string;
  $color: string;
  $disabled: boolean;
}

const StyledTable = styled.table<StyledProps>`
  background-color: ${({ $bg, $disabled }) => ($disabled ? DISABLED_BG : $bg)};
  color: ${({ $color, $disabled }) => ($disabled ? DISABLED_COLOR : $color)};
  cursor: ${({ $disabled }) => ($disabled ? DISABLED_CURSOR : 'default')};
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  caption {
    padding: 0.5rem;
    font-weight: 600;
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const Table: React.FC<TableProps> = ({
  caption,
  children,
  backgroundColor = '#ffffff',
  textColor = '#212121',
  disabled = false,
}) => (
  <Wrapper>
    <StyledTable
      data-testid="table"
      $bg={backgroundColor}
      $color={textColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {caption && <caption>{caption}</caption>}
      {children}
    </StyledTable>
  </Wrapper>
);

export default Table;
