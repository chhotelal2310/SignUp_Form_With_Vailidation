import React, { useState } from "react";
import "../styles/otpVerification.css";
import OtpInput from "react-otp-input";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="OTPmainContainer">
        <div className="OTPContainer">
          <h1>OTP VERIFICATION</h1>
          <p className="otpSubtitle">{`Enter the otp sent to ${"Tarality@gmail.com"}`}</p>
          {/* <div>
            
          </div> */}
          <div>
            <OtpInput
              // maxTime={60}
              className="containerStyle"
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{ width: "40px", height: "40px" }}
              // containerStyle={{ gap: "18px" }}
              containerStyle={"ContainerStylebox"}
              // renderSeparator={{ gap: "18px" }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="OtpTimingandResend">
            <p>{`${"00:120"} sec`} </p>
            <p className="Otpresend">
              Don't receive code resend? <span>Re-send</span>
            </p>
          </div>
          <div className="otpButtonContainer">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;

// import React, { useEffect, useState } from "react";
// import "../styles/otpVerification.css";
// import OtpInput from "react-otp-input";

// const OTPVerification = () => {
//   const [otp, setOtp] = useState("");
//   const [timer, setTimer] = useState(60); // Initialize with your starting time (e.g., 60 second
//   const [isTimerRunning, setIsTimerRunning] = useState(false); // To track if the timer is running

//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       interval = setInterval(() => {
//         setTimer((prevTime) => {
//           if (prevTime <= 0) {
//             clearInterval(interval); // Stop the timer when it reaches 0
//             return 0; // Ensure timer stays at 0
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval); // Clean up interval when timer is not running
//     }

//     // Cleanup function to clear the interval if the component is unmounted
//     return () => clearInterval(interval);
//   }, [isTimerRunning]); // The effect depends on the `isTimerRunning` state

//   const handleResendOtp = () => {
//     setTimer(60); // Reset the timer to 60 seconds
//     setIsTimerRunning(true); // Start the timer countdown
//   };

//   return (
//     <>
//       <div className="OTPmainContainer">
//         <div className="OTPContainer">
//           <h1>OTP VERIFICATION</h1>
//           <p className="otpSubtitle">{`Enter the otp sent to ${"Tarality@gmail.com"}`}</p>
//           <div>
//             <OtpInput
//               className="containerStyle"
//               value={otp}
//               onChange={setOtp}
//               numInputs={5}
//               inputStyle={{ width: "40px", height: "40px" }}
//               containerStyle={"ContainerStylebox"}
//               renderInput={(props) => <input {...props} />}
//             />
//           </div>
//           <div className="OtpTimingandResend">
//             <p>{`${timer} sec`}</p>
//             <p className="Otpresend">
//               Don't receive code resend?{" "}
//               <span onClick={handleResendOtp}>Re-send</span>
//             </p>
//           </div>
//           <div className="otpButtonContainer">
//             <button type="submit">Submit</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OTPVerification;
