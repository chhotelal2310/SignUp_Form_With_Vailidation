import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import OTPVerification from "./components/OTPVerification";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/otpverification" element={<OTPVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
