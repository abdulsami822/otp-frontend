import styled from "styled-components";

export const OtpContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 80%;
  width: 100%;
`;

export const Heading = styled.h1`
  color: var(--primary-color);
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ContentHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
`;

export const OtpContent = styled.div`
  overflow: hidden;
  width: 50%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Styles = styled.div`
  overflow-x: auto;
  width: 100%;
  table {
    border-spacing: 0;
    border: 1px solid var(--primary-color);
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      border-bottom: 1px solid var(--primary-color);
      border-right: 1px solid var(--primary-color);
      margin: 0;
      padding: 20px;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
