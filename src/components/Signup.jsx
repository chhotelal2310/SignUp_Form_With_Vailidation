import React, { useState, useEffect } from "react";
import "../styles/signup.css";
import googlelogo from "../Images/googlelogo.png";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  let handleSubmit = (values, setSubmitting) => {
    /***********************************************************************************************************************/
    /*******************************************Below using  axios method **************************************************/
    axios
      .post("http://172.16.16.20:5052/api/v1/user/userSingUp", values)
      .then((res) => {
        console.log("You are Sign up successfully");
        console.log(res.data);
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(`Error occurs : ${error}`);
      });
    /***********************************************************************************************************************/
    /*******************************************Below using  fetch method **************************************************/
    // fetch("http://172.16.16.20:5052/api/v1/user/userSingUp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Response from backend:", data);
    //     setSubmitting(false);
    //   })
    //   .catch((error) => {
    //     console.error(" I am error Error:", error);
    //     setSubmitting(false);
    //   });
  };

  return (
    <>
      <div className="mainContainer">
        <div className="formContainer">
          <div className="headingandTitle">
            <h1>Create Your Account</h1>
            <p>Welecome Back! Please Enter your datails</p>
          </div>

          <div className="formbodyContainer">
            <div className="signingoogle">
              <img src={googlelogo} />
              <span>sign up with google</span>
            </div>
            <div className="ButtonandOrContainer">
              <div></div>
              <p>OR</p>
              <div></div>
            </div>

            <div>
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (values.name.length == 0) {
                    errors.name = "Please Enter the name";
                  } else if (values.name.length < 3) {
                    errors.name = "Please Enter the name at list 3 character";
                  } else if (!values.email) {
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
                    errors.password =
                      "Please Enter the at list 5 character passord";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values, setSubmitting);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="formdetailsContainer"
                  >
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      id="inputname"
                      type="text"
                      placeholder="Enter the name......."
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name && (
                      <p style={{ color: "red", marginTop: "-12px" }}>
                        {errors.name}
                      </p>
                    )}
                    <br />
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

                    <div className="termandservices">
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
                      <p className="temservicesParagraph">
                        I accept all the term & condition
                      </p>
                    </div>
                    <button type="submit">Sign up</button>
                    <p className="AlreadySignIn">
                      Already have an account?{" "}
                      <span
                        style={{ color: "rgb(89, 89, 226)" }}
                        onClick={() => {
                          navigate("/signin");
                        }}
                      >
                        Sign in
                      </span>
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

export default Signup;
