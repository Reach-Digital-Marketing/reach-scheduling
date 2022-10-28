import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid #00558b;
  border-radius: 0.25rem;
  background: transparent;
  color: #00558b;
  cursor: pointer;
  font-family: "Muli", inherit;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.4s ease;
  padding: 0.625rem 1.75rem;

  & > span {
    transition: all 0.2s;
  }

  &:hover {
    background-color: #00558b;
    color: #ffffff;
  }

  &:disabled,
  &:active {
    filter: brightness(0.85);
  }

  &:disabled {
    cursor: no-drop;
  }

  &:disabled > span {
    visibility: hidden;
    opacity: 0;
  }

  &:disabled::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 0.125rem solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
