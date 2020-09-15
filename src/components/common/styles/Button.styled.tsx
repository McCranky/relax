import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6rem 1.5rem;
  margin: 0.4rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  border-style: solid;
  cursor: pointer;
  background: none;
  color: white;
  outline: none;
  border: 3px solid #16a085;
  transition: 0.16s;

  &:hover {
    background-color: #1abc9c;
  }
`;

export const ButtonDanger = styled(Button)`
  &:hover {
    background-color: #e74c3c;
    border: 3px solid #c0392b;
  }
`;
export const ButtonSuccess = styled(Button)`
  &:hover {
    background-color: #2ecc71;
    border: 3px solid #27ae60;
  }
`;
export const ButtonInfo = styled(Button)`
  &:hover {
    background-color: #3498db;
    border: 3px solid #2980b9;
  }
`;
