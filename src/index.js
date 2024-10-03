import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import LoginDetails from "./Components/LoginDetails";
import Otp from "./Components/Otp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <LoginPage>
              <LoginDetails />
            </LoginPage>
          }
        />
        <Route
          path="/verify"
          element={
            <LoginPage>
              <Otp />
            </LoginPage>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
