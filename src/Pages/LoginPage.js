import React from "react";
import Navbar from "../Components/NavBar";
import Login from "../Components/Login.jsx";

const LoginPage = ({ children }) => {
  return (
    <>
      <Navbar />
      <Login>{children}</Login>
    </>
  );
};

export default LoginPage;
