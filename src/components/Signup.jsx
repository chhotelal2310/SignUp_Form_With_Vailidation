import React from "react";
import "../styles/signup.css";
import googlelogo from "../Images/googlelogo.png";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Signup = () => {
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
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
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
                      // placeholder={
                      //   errors.name && touched.name
                      //     ? errors.name
                      //     : "Enter your name..."
                      // }
                      name="name"
                      onChange={handleChange}
                      // onBlur={handleBlur}
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
                      // onBlur={handleBlur}
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
                      // onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <p style={{ color: "red", marginTop: "0px" }}>
                        {errors.password}
                      </p>
                    )}

                    <div className="termandservices">
                      <Checkbox
                        sx={{
                          marginLeft: "-10px",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                        {...label}
                      />
                      <p className="temservicesParagraph">
                        I accept all the term & condition
                      </p>
                    </div>
                    <button type="submit">Sign in</button>
                    <p className="AlreadySignIn">
                      Already have an account? <span>Sign in</span>
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
