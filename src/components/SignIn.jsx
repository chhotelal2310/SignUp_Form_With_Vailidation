import React, { useState } from "react";
import "../styles/signin.css";
import googlelogo from "../Images/googlelogo.png";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SignIn = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  let handleLogin = (values) => {
    let email = values.email;
    axios
      .post("http://172.16.16.20:5052/api/v1/user/loginUser", values)
      .then((res) => {
        console.log("You are Sign in successfully");
        console.log(res.data);

        // navigate("/otpverification", { email: email });
        navigate("/otpverification", { state: { email: email } });
      })
      .catch((error) => {
        console.log(`Error occurs : ${error}`);
      });
  };
  return (
    <>
      <div className="mainContainer1">
        <div className="formContainer1">
          <div className="headingandTitle1">
            <h1>Sign In and Continue</h1>
            <p>Welecome Back! Please Enter your datails</p>
          </div>

          <div className="formbodyContainer1">
            <div className="signingoogle1">
              <img src={googlelogo} />
              <span>sign in with google</span>
            </div>
            <div className="ButtonandOrContainer1">
              <div></div>
              <p>OR</p>
              <div></div>
            </div>

            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Please Enter the Email";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (values.password.length == 0) {
                    errors.password = "Please Enter the password";
                  } else if (values.password.length < 5) {
                    errors.password = "Please Enter the currect passwoerd";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  handleLogin(values);
                }}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="formdetailsContainer1"
                  >
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      id="inputemail"
                      type="email"
                      placeholder="Enter the email......."
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email && (
                      <p style={{ color: "red", marginTop: "-12px" }}>
                        {errors.email}
                      </p>
                    )}

                    <br />

                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      id="inputpassword"
                      type="password"
                      placeholder="Enter the password......."
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <p style={{ color: "red", marginTop: "0px" }}>
                        {errors.password}
                      </p>
                    )}

                    <div className="termandservices1">
                      <Checkbox
                        onClick={() => {
                          setChecked(!checked);
                        }}
                        sx={{
                          marginLeft: "-10px",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                        {...label}
                        checked={checked}
                      />
                      <p className="temservicesParagraph1">
                        I accept all the term & condition
                      </p>
                    </div>
                    <div className="buttonContainer1">
                      <button type="submit">Sign in</button>
                    </div>
                    <p className="AlreadySignIn1">
                      If don't have account please?{" "}
                      <span onClick={() => navigate("/")}>Sign up</span>
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
