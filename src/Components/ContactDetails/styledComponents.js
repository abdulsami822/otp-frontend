import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerDiv = styled.div`
  min-height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactDiv = styled.div`
  height: 300px;
  width: 400px;
  box-shadow: 0 0 8px #888;
  border: none;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContactInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

export const Heading = styled.h1`
  margin: 4px;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

export const ContactInfo = styled.p`
  font-size: 15px;
  font-family: Inter;
  margin: 3px;
  color: var(--secondary-color);
`;

export const ContactInfoTitle = styled(ContactInfo)`
  color: var(--primary-color);
`;

export const Button = styled(Link)`
  height: 40px;
  width: 90px;
  margin-top: 10px;
  color: #fff;
  background-color: var(--accent-color);
  border: none;
  border-radius: 5px;
  font-family: Inter;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
