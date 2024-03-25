import React, { Component } from "react";
import * as yup from "yup";
import SIGN_UP_SCHEMA from "../../schemas";
import { Formik, Form, Field } from "formik";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

function SignUpForm(props) {
  const handleSubmitToFormik = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
      {(formikProps) => {
        return (
          <Form>
            <Field name="firstName" placeholder="Type ur first name" />
            <Field name="lastName" placeholder="Type ur last name"/>
            <Field name="email" placeholder="Type ur email"/>
            <Field name="password" placeholder="Type ur password"/>
            <button type="submit">Send nudes</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
