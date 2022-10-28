import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;

  .react-calendar {
    border-color: #d2d2d2;
    border-width: 2px;
    border-radius: 0.25rem;

    button {
      color: #6d7a8c;

      &.react-calendar__month-view__days__day--neighboringMonth {
        color: #aaaaaa;
      }

      &.react-calendar__navigation__label {
        color: inherit !important;
      }

      &:disabled {
        background-color: #eeeeee;
        color: #d2d2d2;
        cursor: not-allowed;
      }

      &.react-calendar__tile--now {
        background-color: transparent;
        border: 2px solid #00558b;
      }

      &.react-calendar__tile--active {
        background-color: #00558b;
        color: #ffffff;

        &:enabled:focus,
        &:enabled:hover {
          background-color: #00558b;
          filter: brightness(1.2);
        }
      }
    }
  }
`;
