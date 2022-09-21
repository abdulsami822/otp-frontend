import React, { useState } from "react";

export default function Message() {
  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    message: "",
  });

  const render = () => {
    return <h1>Render</h1>;
  };

  render();
}
