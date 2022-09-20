import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDiv = styled.div`
  min-height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80%;
  height: 100%;
`;

export const ContactLinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  font-size: 15px;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: #000;
  margin: 0;
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h1`
  color: var(--primary-color);
`;

export const InputContainer = styled.div`
  border: 1px solid #888;
  height: 30px;
  max-width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
`;

export const Button = styled(Link)`
  color: #fff;
  background-color: var(--accent-color);
  font-family: Inter;
  height: 25px;
  width: 60px;
  border: none;
  border-radius: 5px;
  font-size: 11px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
