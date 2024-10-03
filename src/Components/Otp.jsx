import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CTAButton from "./CTAButton";
import "../Css/Otp.css";

export default function Otp() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <h3 className="otp-heading">Enter OTP:</h3>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span style={{ width: "8px" }}></span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "1.3rem",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue",
        }}
      />
      <CTAButton title="Verify OTP" btn_class="otp-btn" />
    </>
  );
}
