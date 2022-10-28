import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;

  & > div {
    border: 0.25rem solid transparent;
    border-top-color: #00558b;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
