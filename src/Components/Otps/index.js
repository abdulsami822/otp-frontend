import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import {
  Heading,
  OtpContainer,
  OtpContent,
  ContentHeader,
} from "./styledComponents";
import { Table } from "./Table";
import Error from "../Error";
import { SearchInput } from "../SearchInput";

export default function Otps() {
  const [state, setState] = useState({
    contacts: [],
    filteredContacts: [],
    searchValue: "",
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    getOtps();
  }, []);

  //fetch otps and update state
  const getOtps = async () => {
    try {
      const url = "http://localhost:4000/otps";
      const response = await fetch(url);
      const responseOtps = await response.json();

      //format keys into camelCase from snake_case
      const otps = responseOtps.map((otpData) => {
        const { first_name, last_name, id, time, otp } = otpData;
        return { id, firstName: first_name, lastName: last_name, time, otp };
      });

      setState({
        ...state,
        isLoading: false,
        otps,
        filteredOtps: otps,
      });
    } catch (error) {
      //handle unexpected error
      setState({
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  //onChange handler for search input
  const searchData = (event) => {
    const inputValue = event.target.value;

    const { otps } = state;
    const filteredOtps = otps.filter((otpData) => {
      const { firstName, lastName } = otpData;
      const name = firstName + " " + lastName;
      return name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setState({ ...state, searchValue: inputValue, filteredOtps });
  };

  //clear search input field
  const clearInput = () => {
    const { otps } = state;
    setState({ ...state, searchValue: "", filteredOtps: otps });
  };

  //render heading and search input
  const renderHeader = () => {
    const { searchValue } = state;
    return (
      <ContentHeader>
        <Heading>OTP Details</Heading>
        <SearchInput
          value={searchValue}
          change={searchData}
          clear={clearInput}
        />
      </ContentHeader>
    );
  };

  const renderContent = () => {
    const { filteredOtps, isError } = state;
    const columns = ["First Name", "Last Name", "Time", "OTP"];
    if (isError) {
      return <Error />;
    }
    return (
      <OtpContent>
        {renderHeader()}
        <Table columns={columns} data={filteredOtps} />
      </OtpContent>
    );
  };

  const render = () => {
    const { isLoading } = state;
    return (
      <OtpContainer>{isLoading ? <Loader /> : renderContent()}</OtpContainer>
    );
  };

  return render();
}
