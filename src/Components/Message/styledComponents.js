import { Oval } from "react-loader-spinner";
import styled from "styled-components";

export const MessageDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const MessageForm = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 8px #888;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  padding: 20px;
  width: 400px;
`;

export const ContactInfo = styled.p`
  align-self: flex-start;
  color: var(--primary-color);
  font-weight: 600;
  margin: 0;
`;

export const TextArea = styled.textarea`
  height: 50%;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid var(--primary-color);
`;

export const Button = styled.button`
  background-color: var(--accent-color);
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 30px;
  width: 100px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: Inter;
  font-size: 12px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-family: Inter;
  font-size: 12px;
`;

export const Spinner = styled(Oval)`
  max-height: 100px;
`;
