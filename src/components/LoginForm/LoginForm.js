import React, { Component } from "react";
import * as yup from "yup";
import SIGN_UP_SCHEMA from "../../schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
    <Formik initialValues={initialState} onSubmit={handleSubmitToFormik} validationSchema={SIGN_UP_SCHEMA}>
      {(formikProps) => {
        return (
          <Form style={{display: 'flex', flexDirection: 'column'}}>
            <Field name="firstName" placeholder="Type ur first name" />
            <ErrorMessage name="firstName" component="p"/>
            <Field name="lastName" placeholder="Type ur last name"/>
            <ErrorMessage name="lastName" component="p"/>
            <Field name="email" placeholder="Type ur email"/>
            <ErrorMessage name="email" component="p"/>
            <Field name="password" placeholder="Type ur password"/>
            <ErrorMessage name="password" component="p"/>
            <button type="submit">Send nudes</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
