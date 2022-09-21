import React, { useEffect, useState } from "react";
import { SearchInput } from "../SearchInput";
import Error from "../Error";
import Loader from "../Loader";
import {
  ContainerDiv,
  ContactDiv,
  ContactName,
  Heading,
  ContactLinkDiv,
  Button,
  ContactHeader,
  MessageIcon,
} from "./styledComponents";

export default function Contacts() {
  const [state, setState] = useState({
    contacts: [],
    filteredContacts: [],
    searchValue: "",
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    getContacts();
  }, []);

  //fetch contacts and update state
  const getContacts = async () => {
    try {
      const url = "http://localhost:4000/contacts";
      const response = await fetch(url);

      const reponseContacts = await response.json();
      //format keys into camelCase from snake_case
      const contacts = reponseContacts.map((contact) => {
        const { first_name, last_name, id, phone } = contact;
        return { firstName: first_name, lastName: last_name, id, phone };
      });
      setState({
        ...state,
        isLoading: false,
        contacts,
        filteredContacts: contacts,
      });
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  //filter contact list according to search input
  const searchData = (event) => {
    const inputValue = event.target.value;

    const { contacts } = state;
    const filteredContacts = contacts.filter((contact) => {
      const { firstName, lastName } = contact;
      const name = firstName + " " + lastName;
      return name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setState({ ...state, searchValue: inputValue, filteredContacts });
  };

  //clear input field
  const clearInput = () => {
    const { contacts } = state;
    setState({ ...state, searchValue: "", filteredContacts: contacts });
  };

  //returns JSX for search input
  const renderSearch = () => {
    const { searchValue } = state;
    return (
      <SearchInput value={searchValue} change={searchData} clear={clearInput} />
    );
  };

  //look for Error in API Call and return JSX Accordingly
  const renderContent = () => {
    const { isError } = state;
    return isError ? <Error /> : renderContactList();
  };

  //returns JSX for contact list
  const renderContactList = () => {
    const { filteredContacts } = state;
    return (
      <ContactDiv>
        <ContactHeader>
          <Heading>Contacts</Heading>
          {renderSearch()}
        </ContactHeader>
        {filteredContacts.map((contact) => {
          const { id, firstName, lastName } = contact;
          return (
            <ContactLinkDiv key={id}>
              <ContactName>{`${id}. ${firstName} ${lastName}`}</ContactName>
              <Button to={`/contact/${id}`}>
                Send
                <MessageIcon />
              </Button>
            </ContactLinkDiv>
          );
        })}
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
