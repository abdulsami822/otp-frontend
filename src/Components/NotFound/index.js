import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, NotFoundContainer, Heading } from "./styledComponents";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <Heading>Something Went Wrong</Heading>
      <Button onClick={goHome}>Go To Home</Button>
    </NotFoundContainer>
  );
}
