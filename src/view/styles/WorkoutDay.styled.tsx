import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 868px) {
    flex-direction: column;
  }
`;

export const WorkoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ListWrapper = styled.div`
  margin: auto;
  padding: 1rem 4.5rem;
  flex: 2;
`;
