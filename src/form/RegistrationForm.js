import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Registrationform.css";
import validation from "./validation.js";

const RegistrationForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label>First Name</label>
            <Field name="firstName" type="text" className="form-control" />
            <ErrorMessage name="firstName" className="error-message" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage name="lastName" className="error-message" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" className="error-message" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" className="error-message" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className="form-control"
            />
            <ErrorMessage name="confirmPassword" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
