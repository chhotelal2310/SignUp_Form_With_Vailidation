import React, { useState, useEffect } from "react";
import "../styles/otpVerification.css";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const location = useLocation();
  const email = location.state?.email;
  // console.log(`email is receive from the signin page ${email}`);
  let f = 1;
  useEffect(() => {
    (function (setIsTimerRunning) {
      if (f) {
        setIsTimerRunning(true);
        f = 0;
      }
    })(setIsTimerRunning);
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime == 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleResendOtp = () => {
    setTimer(60);
    setIsTimerRunning(true);
  };
  let chekOTP = () => {
    if (otp.length == 0) {
      alert("Please Eneter OTP");
    } else if (otp.length < 6) {
      alert("Please Eneter the vaild OTP");
    } else if (otp.length == 6) {
      console.log(otp);
      console.log(email);
      axios
        .post("http://172.16.16.20:5052/api/v1/user/loginVerifyOtp", {
          otp: otp,
          email: email,
        })
        .then((res) => {
          console.log("OTP verification successfully");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(`Error occurs verify the otp : ${error}`);
        });
    }
  };

  return (
    <>
      <div className="OTPmainContainer">
        <div className="OTPContainer">
          <h1>OTP VERIFICATION</h1>
          <p className="otpSubtitle">
            Enter the otp sent to <span>{email}</span>
          </p>
          <div>
            <OtpInput
              className="containerStyle"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{ width: "40px", height: "40px" }}
              containerStyle={"ContainerStylebox"}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="OtpTimingandResend">
            {/* <p>{`${"00:120"} sec`} </p> */}
            <p>{`00:${timer} sec`} </p>
            <p className="Otpresend">
              Don't receive code resend?{" "}
              <span onClick={handleResendOtp}>Re-send</span>
            </p>
          </div>
          <div className="otpButtonContainer">
            <button type="submit" onClick={chekOTP}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
