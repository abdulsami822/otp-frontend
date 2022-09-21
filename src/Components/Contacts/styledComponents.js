import { Link } from "react-router-dom";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

export const ContainerDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 90%;
  width: 100%;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 60%;
  @media (max-width: 600px) {
    min-width: 80%;
  }
`;

export const ContactLinkDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  margin: 0;
  text-decoration: none;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ContactHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  color: var(--primary-color);
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  align-items: center;
  background-color: var(--accent-color);
  border-radius: 5px;
  border: none;
  color: #fff;
  display: flex;
  font-family: Inter;
  font-size: 11px;
  height: 25px;
  justify-content: space-around;
  text-decoration: none;
  width: 60px;
  @media (max-width: 600px) {
    height: 20px;
    width: 40px;
    font-size: 8px;
  }
`;

export const MessageIcon = styled(SendIcon)`
  font-size: 11px !important;
  @media (max-width: 600px) {
    font-size: 8px !important;
  }
`;
