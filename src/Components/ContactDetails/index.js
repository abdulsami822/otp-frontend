import React, { useEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";

export default function ContactDetails() {
  const [state, setState] = useState({
    contact: {},
  });

  const params = useParams();

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const { id } = params;
    const url = `https://meragaonotp.herokuapp.com/contact/${id}`;
    const response = await fetch(url);
    if (response.ok === true) {
      const data = await response.json();
      setState({ ...state, contact: data });
      console.log(data);
    }
  };

  const render = () => {
    return <div>COntact Details</div>;
  };

  return render();
}
