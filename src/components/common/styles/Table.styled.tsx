import { Link } from "react-router-dom";
import styled from "styled-components";

export const Table = styled.table`
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0.5em 0.8em;
  font-size: 1.75rem;
  color: #ecf0f1;
  text-align: center;
  letter-spacing: 0.2rem;
  cursor: default;
  thead {
    font-style: italic;
    text-decoration: underline;
  }
`;

export const Row = styled.tr`
  /* cursor: pointer; */
  margin: 0.5rem 0.5rem;
  transition: 0.16s;
  /* &:hover {
    color: #3498db;
    font-size: 1.85rem;
} */
`;

export const CellPositive = styled.td`
  border-bottom: 2px solid #95a5a6;
  &:hover {
    border-color: #2980b9;
  }
`;

export const CellNegative = styled.td`
  border-bottom: 2px solid #95a5a6;
  &:hover {
    border-color: #c0392b;
  }
`;

export const LinkData = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.16s;

  &:hover {
    color: #3498db;
  }
`;
