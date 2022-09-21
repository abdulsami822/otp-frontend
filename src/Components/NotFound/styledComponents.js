import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  color: var(--primary-color);
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
`;
