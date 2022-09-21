import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Error from "../Error";
import Loader from "../Loader";
import {
  Button,
  ContactInfo,
  MessageForm,
  MessageDiv,
  TextArea,
  ErrorMessage,
  SuccessMessage,
} from "./styledComponents";

export default function Message() {
  const [state, setState] = useState({
    contact: {},
    message: "",
    isError: false,
    isLoading: true,
    formError: false,
    formErrorMessage: "",
    isSubmitSuccess: false,
    isSubmitting: false,
  });

  // to get path parameters
  const params = useParams();

  useEffect(() => {
    getContact();
  }, []);

  //fetch particular contact with id and update state
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
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      const message = `Hi, Your OTP is ${randomNumber}`;
      setState({
        ...state,
        contact: formattedData,
        message,
        isLoading: false,
      });
    } catch (error) {
      setState({ ...state, isLoading: false, isError: true });
    }
  };

  //makes textarea controlled input
  const changeMessage = (event) => {
    const message = event.target.value;
    setState({ ...state, message });
  };

  //send the message to backend
  const sendMessage = async () => {
    const { message, contact } = state;
    //regex for string containing 6 digits number
    const regex = /([^\d]|^)\d{6,}([^\d]|$)/;
    //validation
    if (message === "" || !regex.test(message)) {
      //set form error
      setState({
        ...state,
        formError: true,
        formErrorMessage: "Enter valid OTP",
        isSubmitSuccess: false,
      });
    } else {
      //undo form error
      setState({ ...state, formError: false, isSubmitting: true });
    }

    const { firstName, lastName, phone } = contact;
    const otp = message.match(regex)[0];
    const url = "http://localhost:4000/send-otp";
    const body = {
      firstName,
      lastName,
      to: phone,
      text: message,
      otp,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(url, options);
      //successfull API call
      if (response.status === 200) {
        setState({
          ...state,
          formError: false,
          isSubmitSuccess: true,
          isSubmitting: false,
        });
      }
      //handling error in API Call
      else {
        const data = await response.json();
        setState({
          ...state,
          formError: true,
          formErrorMessage: data.err_msg,
          isSubmitting: false,
        });
      }
    } catch (err) {
      //unexpected error
      setState({ ...state, isError: true, isSubmitting: false });
    }
  };

  //render JSX based on error
  const renderContent = () => {
    const { isError } = state;
    return isError ? <Error /> : renderForm();
  };

  //render button based on form submitting status
  const renderButton = () => {
    const { isSubmitting } = state;
    return isSubmitting ? (
      <Button type="submit" onClick={sendMessage}>
        <Oval height={20} color="#fff" />
      </Button>
    ) : (
      <Button type="submit" onClick={sendMessage}>
        Send
      </Button>
    );
  };

  const renderForm = () => {
    const { contact, message, formError, formErrorMessage, isSubmitSuccess } =
      state;
    const { phone } = contact;
    return (
      <MessageForm>
        <ContactInfo>To : {phone}</ContactInfo>
        <TextArea value={message} onChange={changeMessage} />
        {renderButton()}
        {formError ? <ErrorMessage>{formErrorMessage}</ErrorMessage> : ""}
        {isSubmitSuccess ? (
          <SuccessMessage>OTP is sent successfully</SuccessMessage>
        ) : (
          ""
        )}
      </MessageForm>
    );
  };

  const render = () => {
    const { isLoading } = state;
    return <MessageDiv>{isLoading ? <Loader /> : renderContent()}</MessageDiv>;
  };

  return render();
}
