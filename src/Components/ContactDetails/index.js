import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error";
import Loader from "../Loader";
import {
  ContactDiv,
  ContactInfo,
  ContainerDiv,
  Heading,
  Button,
  ContactInfoDiv,
  ContactInfoTitle,
} from "./styledComponents";

export default function ContactDetails() {
  //state
  const [state, setState] = useState({
    contact: {},
    isError: false,
    isLoading: true,
  });

  // to get path parameters
  const params = useParams();

  useEffect(() => {
    getContact();
  }, []);

  //fetch particular contact full details and update state
  const getContact = async () => {
    try {
      const { id } = params;
      const url = `http://localhost:4000/contact/${id}`;
      const response = await fetch(url);
      const data = await response.json();

      //format keys into camelCase from snake_case
      const formattedData = {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        phone: data.phone,
      };

      setState({ ...state, contact: formattedData, isLoading: false });
    } catch (error) {
      //handling unexpected error
      setState({ ...state, isLoading: false, isError: true });
    }
  };

  //look for Error in API Call and return JSX Accordingly
  const renderContent = () => {
    const { isError } = state;
    return isError ? <Error /> : renderContact();
  };

  //render contact data's individual key-value pair
  const renderContactInfo = (title, value) => {
    return (
      <ContactInfoDiv>
        <ContactInfoTitle>{title}</ContactInfoTitle>
        <ContactInfo>{value}</ContactInfo>
      </ContactInfoDiv>
    );
  };

  //render contact complete information
  const renderContact = () => {
    const { contact } = state;
    const { id, firstName, lastName, phone } = contact;
    return (
      <ContactDiv>
        <Heading>Contact</Heading>
        {renderContactInfo("First Name", firstName)}
        {renderContactInfo("Last Name", lastName)}
        {renderContactInfo("Phone", phone)}
        <Button to={`/message/${id}`}>Compose</Button>
      </ContactDiv>
    );
  };

  //returns total JSX combined
  const render = () => {
    const { isLoading } = state;
    return (
      <ContainerDiv>{isLoading ? <Loader /> : renderContent()}</ContainerDiv>
    );
  };

  return render();
}
