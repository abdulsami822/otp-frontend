import styled from "styled-components";

export const InputContainer = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  display: flex;
  height: 30px;
  justify-content: center;
  max-width: 200px;
  padding: 0px 10px;
  @media (max-width: 600px) {
    font-size: 15px !important;
    height: 25px;
    max-width: 100px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
