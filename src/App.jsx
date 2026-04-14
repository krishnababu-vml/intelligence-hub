import React, { useState, useEffect } from "react";

import Market from "./components/Market";
import Login from "./components/Login";

export default function App() {
  const [login, setLogin] = useState(false);

  const generateEncryptedCode = () => {
    const array = new Uint8Array(12);
    window.crypto.getRandomValues(array);
    const base64String = btoa(String.fromCharCode(...array));
    return base64String.slice(0, 16);
  };
  useEffect(() => {
    setLogin(sessionStorage.getItem("login") ? true : false);
  });

  const loggedIn = (value) => {
    setLogin(value);
    if (value) sessionStorage.setItem("login", generateEncryptedCode());
  };

  return (
    <>
      {!login && <Login loggedIn={loggedIn} />}
      {login && <Market />}
    </>
  );
}
