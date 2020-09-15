import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.p<{ bounce: boolean }>`
  font-size: 3rem;
  padding: 2rem;
  animation: ${({ bounce }) => (bounce ? "bounce 0.2s 1" : "none")};

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
