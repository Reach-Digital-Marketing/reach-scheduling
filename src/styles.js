import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  input,
  select {
    border-color: #d2d2d2;
    border-radius: 0.25rem;
  }

  input:active,
  input:focus,
  select:active,
  select:focus {
    border-color: #00558b;
  }

  & > * {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;

    label {
      flex-shrink: 0;
      margin-bottom: 0;
    }
  }

  p.error-text {
    color: red;
    font-style: italic;
  }

  p.success-text {
    color: green;
    font-style: italic;
  }

  p.info-text {
    align-self: center;
  }
`;
