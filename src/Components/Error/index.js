import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ErrorContainer, Heading } from "./styledComponents";

//component to display when errors show up duing data fetching
export default function Error() {
  const navigate = useNavigate();

  const reload = () => {
    navigate(0);
  };

  return (
    <ErrorContainer>
      <Heading>Something Went Wrong</Heading>
      <Button onClick={reload}>Retry</Button>
    </ErrorContainer>
  );
}
