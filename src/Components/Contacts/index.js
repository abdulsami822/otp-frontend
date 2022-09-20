import React, { useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  ContainerDiv,
  ContactDiv,
  ContactName,
  Heading,
  ContactLinkDiv,
  Button,
  ContactHeader,
  Input,
  InputContainer,
} from "./styledComponents";

export default function Contacts() {
  const [state, setState] = useState({
    contacts: [],
    filteredContacts: [],
    searchValue: "",
  });

  useEffect(() => {
    getContacts();
  }, []);

  //fetch contacts and update state
  const getContacts = async () => {
    const url = "https://meragaonotp.herokuapp.com/contacts";
    const response = await fetch(url);
    if (response.ok === true) {
      const reponseContacts = await response.json();
      //change name case
      const contacts = reponseContacts.map((contact) => {
        const { first_name, last_name, id, phone } = contact;
        return { firstName: first_name, lastName: last_name, id, phone };
      });
      setState({ ...state, contacts, filteredContacts: contacts });
    }
  };

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

  const clearInput = () => {
    const { contacts } = state;
    setState({ ...state, searchValue: "", filteredContacts: contacts });
  };

  const renderSearch = () => {
    const { searchValue } = state;
    return (
      <InputContainer>
        <Input value={searchValue} onChange={searchData} />
        {searchValue.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon onClick={clearInput} />
        )}
      </InputContainer>
    );
  };

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
              <Button to={`/${id}`}>Send</Button>
            </ContactLinkDiv>
          );
        })}
      </ContactDiv>
    );
  };

  const renderLoader = () => {
    return <LineWave />;
  };

  const blender = () => {
    const { contacts } = state;
    return (
      <ContainerDiv>
        {contacts.length === 0 ? renderLoader() : renderContactList()}
      </ContainerDiv>
    );
  };

  return blender();
}
